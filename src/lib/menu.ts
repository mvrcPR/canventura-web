import { currentMenuUrl, type Locale } from "../content/site";
export interface MenuDocument {
  src: string;
  width: number;
  height: number;
}
// Interim adapter for the publicly observed menu page. No prices or snapshots
// are stored locally. Replace with the verified MyRestoo publication URL once
// supplied; this is not a claimed MyRestoo API.
export function extractMenuDocuments(html: string): MenuDocument[] {
  const documents: MenuDocument[] = [];
  const seen = new Set<string>();
  for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
    const attributes: Record<string, string> = {};
    for (const match of tag[0].matchAll(/([\w-]+)\s*=\s*["']([^"']*)["']/g))
      attributes[match[1].toLowerCase()] = match[2];
    if (!attributes["data-categories"]) continue;
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
        width: Number(attributes.width) || 1000,
        height: Number(attributes.height) || 1415,
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
      headers: { Accept: "text/html" },
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
