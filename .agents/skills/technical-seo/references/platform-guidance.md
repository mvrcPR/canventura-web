# Current technical SEO guidance

Last reviewed: 2026-08-11. The summaries below cover stable principles, but do
not substitute for current platform rules. Before implementing or approving a
change whose correctness depends on a search platform's behavior, open the
official source linked with that rule. This includes crawler identities and
policies, supported search features, eligibility rules, and metric definitions
or thresholds, which can change.

## Rendering, discovery, and indexation

- Google processes JavaScript through crawling, rendering, and indexing, but
  server-side rendering or prerendering reduces dependency on that rendering
  step and helps bots that do not execute JavaScript. Essential content and
  links should be present in the delivered HTML. See
  [Google's JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
- Crawling permission, indexation directives, canonical selection, and search
  appearance are separate outcomes. A blocked crawler may be unable to read a
  page-level `noindex` directive.
- Canonicals are signals for choosing among duplicate or similar URLs, not
  commands. Redirects, canonical annotations, sitemap URLs, and internal links
  should identify the same preferred URL. See
  [Google's canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
- `hreflang` describes distinct localized URLs. Each version must include
  itself and its alternates; multiple annotation methods add maintenance risk
  without extra search benefit. See
  [Google's localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).
- Google uses the mobile version of a page for indexing. Keep primary content,
  metadata, structured data, links, and crawlable resources equivalent on
  mobile, and do not require user interaction to load primary content. See
  [Google's mobile-first guidance](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing).

## Sitemaps and URL lifecycle

List intended canonical, indexable URLs in the sitemap. Sitemaps support
discovery but do not guarantee crawling or indexation. Google and Bing ignore
`priority` and `changefreq`; use `lastmod` only when it reflects a verifiable
content change. See [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
and [Bing's sitemap guidance](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search).

For permanent URL moves, prefer a direct server-side `301` or `308` to a
relevant replacement, then align canonicals, sitemaps, and internal links.
Avoid redirect chains and return a real `404` or `410` when no replacement
exists; redirecting unrelated URLs to the homepage can be treated as a soft
404. See [Google's migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

## Structured data

Use a type because it accurately describes visible page content, not merely
because Schema.org defines it. Follow the current search-feature documentation
for required properties and eligibility. Google recommends JSON-LD, but valid
markup does not guarantee a rich result and structured-data penalties do not
automatically imply a normal web-ranking penalty. See the
[general structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
and [supported search appearances](https://developers.google.com/search/docs/appearance).

Schema.org validation checks vocabulary and syntax. A search engine's rich
results test checks only its supported features and still cannot prove that a
feature will appear.

## Crawler purposes

Do not group every AI-related token under one allow or block decision:

| Purpose | Current examples |
|---|---|
| General search indexing | Googlebot, Bingbot |
| AI search indexing | OAI-SearchBot, Claude-SearchBot, PerplexityBot |
| User-triggered retrieval | Claude-User, Perplexity-User |
| Model training controls | GPTBot, ClaudeBot |
| Separate Gemini training and grounding control | Google-Extended |

The categories affect different products. In particular, Google states that
`Google-Extended` does not affect inclusion or ranking in Google Search.
OpenAI distinguishes OAI-SearchBot from GPTBot; Anthropic distinguishes its
search, user, and training crawlers; Perplexity distinguishes its crawler from
user-triggered retrieval. Verify current identities and WAF requirements from
the platform owners:

- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Google crawler documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- [Anthropic crawler documentation](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Bing crawler documentation](https://www.bing.com/webmasters/help/help/which-crawlers-does-bing-use-8c184ec0)

None of these reviewed platform documents establishes `llms.txt` as an
indexation or ranking requirement. Treat it as an optional publisher summary
unless future official guidance gives it a platform-specific role.

`robots.txt` is public policy for compliant crawlers, not access control. A
production CDN or WAF can still block an allowed bot, and a user-triggered
fetcher may follow different rules. Verify both policy and observed delivery.

## Image delivery

Use standard `<img>` or `<picture>` markup with a stable, crawlable `src`
fallback. Responsive sources and modern formats should preserve discovery as
well as visual quality. Give meaningful images contextual alternatives,
decorative images empty alternatives, and optimize dimensions and weight
because media can dominate page performance. See
[Google's image guidance](https://developers.google.com/search/docs/appearance/google-images).

## Performance evidence

Google's current good-experience thresholds are LCP within 2.5 seconds, INP
under 200 milliseconds, and CLS under 0.1 at the 75th percentile. Treat them as
user-experience targets, not guaranteed ranking thresholds. Field data answers
how real users perform; lab data helps reproduce and diagnose a particular
build. See [Google's Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals).

Google recommends Lighthouse during development as a diagnostic for a
predefined cold load, while CrUX or first-party RUM describes real-user health.
Keep its automated performance, accessibility, best-practices, and SEO findings
available for investigation without treating a category score as complete
coverage, a ranking signal, or a substitute for repository-specific checks.
See [Google's Core Web Vitals tooling workflow](https://web.dev/articles/vitals-tools).
