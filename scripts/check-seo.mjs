import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import { startProductionServer } from "./production-server.mjs";

// Inspect HTTP and delivered HTML, using the sitemap as the URL inventory.
// This complements Lighthouse; it does not prove external indexation.
const server = await startProductionServer();
const pages = new Map();
const assets = new Set();
const links = new Set();
const legacyResources = new Set();
let checks = 0;
function check(condition, message) {
  assert.ok(condition, message);
  checks++;
}
async function response(path, options) {
  return fetch(new URL(path, server.baseUrl), {
    signal: AbortSignal.timeout(15000), ...options,
  });
}
try {
  const sitemap = await response("/sitemap.xml");
  check(sitemap.status === 200 && /xml/.test(sitemap.headers.get("content-type")), "sitemap.xml: estat o MIME incorrecte");
  const xml = load(await sitemap.text(), { xml: true });
  const urls = xml("loc").map((_, el) => xml(el).text()).get();
  check(urls.length > 0 && new Set(urls).size === urls.length, "Sitemap buit o duplicat");
  const origin = new URL(urls[0]).origin;
  const robots = await response("/robots.txt");
  check(robots.status === 200 && (await robots.text()).includes(`Sitemap: ${origin}/sitemap.xml`), "robots.txt: sitemap incorrecte");

  for (const canonical of urls) {
    const path = new URL(canonical).pathname;
    const res = await response(path, { redirect: "manual" });
    check(res.status === 200 && /html/.test(res.headers.get("content-type")), `${path}: no lliura HTML amb estat 200`);
    check(!/noindex/i.test(res.headers.get("x-robots-tag") ?? ""), `${path}: noindex fora de staging`);
    const $ = load(await res.text());
    pages.set(canonical, $);
    const head = $("head");
    check(head.find("title").length === 1 && head.find("title").text().trim(), `${path}: title buit o duplicat`);
    check(head.find('meta[name="description"]').attr("content")?.trim(), `${path}: description buida`);
    check(!/noindex/i.test(head.find('meta[name="robots"]').attr("content") ?? ""), `${path}: meta noindex inesperada`);
    check(head.find('link[rel="canonical"]').length === 1 && head.find('link[rel="canonical"]').attr("href") === canonical, `${path}: canonical incorrecte`);
    check(head.find('meta[property="og:url"]').attr("content") === canonical, `${path}: og:url incorrecte`);
    check(head.find('meta[property="og:title"]').attr("content") === head.find("title").text(), `${path}: og:title divergent`);
    check($("h1").text().trim() && $("main#main").length, `${path}: contingut principal absent de l'HTML`);
    const lang = $("html").attr("lang");
    const alternates = head.find('link[rel="alternate"][hreflang]');
    check(alternates.filter(`[hreflang="${lang}"]`).attr("href") === canonical, `${path}: hreflang propi incorrecte`);
    check(alternates.filter('[hreflang="x-default"]').length === 1, `${path}: falta x-default`);
    alternates.each((_, el) => check(urls.includes($(el).attr("href")), `${path}: hreflang fora del sitemap`));

    const schema = JSON.parse(head.find('script[type="application/ld+json"]').text());
    check(schema["@type"] === "Restaurant" && schema.url === origin, `${path}: JSON-LD no representa el restaurant`);
    check(schema.address?.postalCode && schema.address?.addressLocality && schema.telephone, `${path}: dades locals incompletes`);
    for (const image of [schema.image, head.find('meta[property="og:image"]').attr("content")]) {
      check(image && new URL(image).origin === origin, `${path}: imatge social/schema invàlida`);
      assets.add(new URL(image).pathname);
    }
    $("img[src]").each((_, el) => {
      const img = $(el);
      check(img.attr("alt") !== undefined, `${path}: imatge sense alternativa`);
      check(Number(img.attr("width")) > 0 && Number(img.attr("height")) > 0, `${path}: imatge sense dimensions`);
      for (const src of [img.attr("src"), ...(img.attr("srcset") ?? "").split(",").map(x => x.trim().split(/\s+/)[0]).filter(Boolean)]) {
        const url = new URL(src, canonical);
        if (url.origin === origin && url.pathname.startsWith("/wp-content/uploads/")) legacyResources.add(url.href);
        else if (url.origin === origin) assets.add(url.pathname);
      }
    });
    if (!path.endsWith("carta/")) {
      check($(".family-section").text().includes("1977") || $("main").text().includes("1977"), `${path}: història absent sense JavaScript`);
      const hero = $(".hero-photo img").first();
      check(hero.attr("srcset") && hero.attr("sizes") && hero.attr("fetchpriority") === "high", `${path}: portada sense càrrega responsive/prioritària`);
      check($("a[href^='tel:']").length && $("a[href*='myrestoo.net']").length, `${path}: falten accions de contacte/reserva`);
    } else {
      check(/no-store/.test(res.headers.get("cache-control") ?? ""), `${path}: carta amb memòria cau inesperada`);
      check($("[data-menu-page] img").length || $(".menu-empty a[href*='els-nostres-menus']").length, `${path}: carta sense documents ni fallback`);
    }
    $("a[href]").each((_, el) => {
      const url = new URL($(el).attr("href"), canonical);
      if (url.origin === origin && (url.pathname.startsWith("/wp-content/uploads/") || url.pathname.endsWith("/els-nostres-menus/"))) legacyResources.add(url.href);
      else if (url.origin === origin) links.add(url.href);
    });
    $("link[rel='stylesheet'], link[rel='preload'], script[src]").each((_, el) => {
      const url = new URL($(el).attr("href") ?? $(el).attr("src"), canonical);
      if (url.origin === origin) assets.add(url.pathname);
    });
    console.log(`✓ ${path} · HTML, metadades, dades locals i recursos`);
  }
  for (const [canonical, $] of pages) {
    $('head link[rel="alternate"][hreflang]').each((_, el) => {
      const target = $(el).attr("href");
      const lang = $(el).attr("hreflang");
      const alternate = pages.get(target);
      check(alternate && (lang === "x-default" || alternate("html").attr("lang") === lang), `${canonical}: idioma de l'alternativa incorrecte`);
      const sourceLang = $("html").attr("lang");
      check(alternate(`head link[hreflang="${sourceLang}"]`).attr("href") === canonical, `${canonical}: hreflang no recíproc`);
    });
  }
  for (const href of links) {
    const url = new URL(href);
    const target = pages.get(`${url.origin}${url.pathname}`);
    check(target, `${href}: enllaç intern fora de les rutes publicades`);
    if (url.hash) check(target(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).length, `${href}: àncora inexistent`);
  }
  const resourceList = [...assets];
  for (let i = 0; i < resourceList.length; i += 8) {
    await Promise.all(resourceList.slice(i, i + 8).map(async path => {
      const res = await response(path);
      check(res.status === 200 && !/html/.test(res.headers.get("content-type")), `${path}: recurs absent o HTML inesperat`);
      if (path.startsWith("/_astro/") || /-[a-f0-9]{10}\.woff2$/.test(path)) {
        check(/immutable/.test(res.headers.get("cache-control") ?? ""), `${path}: falta cache immutable`);
      }
      await res.body?.cancel();
    }));
  }
  for (const [from, to] of [["/es", "/es/"], ["/fr", "/fr/"], ["/en", "/en/"], ["/carta", "/carta/"], ["/index.html", "/"], ["/es/index.html", "/es/"]]) {
    const res = await response(from + "?audit=1", { redirect: "manual" });
    const destination = new URL(res.headers.get("location"), server.baseUrl);
    check([301, 308].includes(res.status) && destination.pathname === to && destination.search === "?audit=1", `${from}: redirecció permanent o query incorrecta`);
    await res.body?.cancel();
  }
  const missing = await response("/missing-seo-audit-route/");
  check(missing.status === 404, "La ruta inexistent no torna un 404 real");
  await missing.body?.cancel();
  const stagingHeaders = await readFile(new URL("../dist/client/_headers", import.meta.url), "utf8");
  check(/https:\/\/canventura-web\.canventura\.workers\.dev\/\*\s+X-Robots-Tag: noindex/.test(stagingHeaders), "Falta noindex de staging als assets compilats");
  console.log(`\n${checks} comprovacions superades · ${pages.size} rutes · ${assets.size} recursos locals.`);
  if (legacyResources.size) console.log(`Dependència pendent: ${legacyResources.size} URLs de carta pertanyen al WordPress antic, no al nou build. Cal substituir aquesta font abans de migrar el domini.`);
  console.log("No comprova indexació externa ni la disponibilitat futura de la font de carta. El noindex de staging s'ha de verificar a la URL pública després de desplegar.");
} finally {
  await server.stop();
}
