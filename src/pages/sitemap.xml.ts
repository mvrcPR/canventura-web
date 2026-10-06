import type { APIRoute } from "astro";
import { locales, homePath, menuPath, visitPath, siteUrl } from "../content/site";
export const prerender = true;
export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${locales
      .flatMap((lang) => [homePath(lang), menuPath(lang), visitPath(lang)])
      .map((path) => `<url><loc>${siteUrl}${path}</loc></url>`)
      .join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
