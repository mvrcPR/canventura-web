# Search-facing repository surfaces

Read this reference when routes, delivered HTML, metadata, localization, images,
or production delivery are in scope. Discover the implementation that exists;
a previous project's framework, route registry, and commands are not defaults.

## Inventory the delivery chain

Read the root instructions, package scripts, framework configuration, and
source owners. Identify whether pages are static, server-rendered, hydrated, or
client-rendered, and which serving path represents production.

| Contract | What to locate in the current project |
| --- | --- |
| URLs and languages | Filesystem routes, router configuration, and existing localization ownership |
| Document shell and metadata | Layouts, head components, or page templates |
| Primary content and links | Owning pages, components, and content files |
| Images | Source assets, framework image components, or an existing optimization pipeline |
| JavaScript delivery | Build output, framework hydration boundaries, and any owned bundle reports |
| Discovery | Existing sitemap configuration, navigation, and contextual links |
| Crawler policy | Existing robots rules and observed CDN or WAF behavior |
| Serving and redirects | Framework adapter, hosting configuration, and production response |
| Validation | Commands actually defined by package scripts or repository instructions |

Record concrete owners for the task rather than creating another route or
metadata registry. When an owner is absent, decide whether the request requires
adding it; do not imply that a pipeline or validator already exists.

## Route changes

Change the source that owns the route and synchronize its actual consumers:
page content, canonical and social URLs, sitemap membership, navigation, and
contextual links where applicable. Preserve established URLs unless the request
includes a migration. When a URL moves, determine its redirect and status.

Not every route should be indexed or listed in a sitemap. State the intended
search contract and keep its signals consistent. An optional publisher summary,
if present, supplements the pages rather than overriding their evidence.

## Delivered HTML and HTTP responses

Build fresh output with the repository's actual build command. Inspect static
HTML when it exists; for server-rendered routes, inspect the response from the
appropriate local preview or production-serving path. Do not edit generated
build output.

Verify primary content, crawlable links, metadata, document language, and safe
JSON-LD serialization. Test unknown and moved URLs when status codes or
redirects are part of the change. A development server's rewrite behavior does
not prove production delivery.

Hosting, CDN, HTTPS, canonical-host redirects, and cache behavior are separate
owners. Inspect their configuration and live responses when authorized and
relevant; a local source file alone does not prove external state.

## Language and media delivery

Discover the existing localized URLs and default language. Preserve agreement
between paths, visible language, metadata, canonicals, and reciprocal language
annotations. Add alternates only for actual language versions.

Use the project's image facilities where they exist. Inspect the delivered
image markup for dimensions, meaningful alternatives, appropriate loading
priority, responsive sources, and crawlable fallback URLs. Preserve original
assets and avoid imposing a pipeline imported from another repository.

## Validation and performance evidence

Use available checks proportional to the changed surface. A successful build
proves compilation, not crawler behavior, indexation, or search performance.
Do not prescribe a command absent from the repository or add one solely to
satisfy this generic workflow.

When performance is in scope, use consistent lab profiles and repeated samples
for comparisons. Explain sampled URLs, device profiles, category scores with
their scale, and loading metrics with units. Bundle size and Lighthouse results
are diagnostic evidence; field data and external search tools own real-user
and indexing observations. Report which layer was actually checked.
