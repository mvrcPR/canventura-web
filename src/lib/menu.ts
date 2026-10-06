import { currentMenuUrl, type Locale } from "../content/site";
export interface MenuDocument {
  src: string;
  width: number;
  height: number;
}
// Interim source: the legacy website publishes the illustrated menus alongside
// a portrait, text-only edition. Only that edition belongs in this reader.
// Read on every request without storing dishes, prices or menu snapshots.
// The direct MyRestoo publication URL still needs to be supplied and verified.
export function extractMenuDocuments(html: string): MenuDocument[] {
  const documents: MenuDocument[] = [];
  const seen = new Set<string>();
  for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
    const attributes: Record<string, string> = {};
    for (const match of tag[0].matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g))
      attributes[match[1].toLowerCase()] = match[2];
    if (!attributes["data-categories"]) continue;
    const width = Number(attributes.width);
    const height = Number(attributes.height);
    if (
      !Number.isFinite(width) ||
      !Number.isFinite(height) ||
      width <= 0 ||
      height <= width
    )
      continue;
    try {
      const url = new URL(attributes.src);
      if (
        url.protocol !== "https:" ||
        url.hostname !== "canventura.com" ||
        !url.pathname.startsWith("/wp-content/uploads/")
      )
        continue;
      if (seen.has(url.href)) continue;
      seen.add(url.href);
      documents.push({
        src: url.href,
        width,
        height,
      });
    } catch {
      /* Skip malformed upstream URLs. Never expose raw upstream HTML. */
    }
  }
  return documents;
}
export async function getCurrentMenu(locale: Locale) {
  const source = currentMenuUrl(locale);
  try {
    const response = await fetch(source, {
      signal: AbortSignal.timeout(6500),
      headers: { Accept: "text/html", "Cache-Control": "no-cache" },
    });
    if (
      !response.ok ||
      !response.headers.get("content-type")?.includes("text/html")
    )
      return { source, documents: [], available: false };
    const documents = extractMenuDocuments(await response.text());
    return { source, documents, available: documents.length > 0 };
  } catch {
    return { source, documents: [], available: false };
  }
}
