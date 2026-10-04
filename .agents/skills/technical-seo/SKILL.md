---
name: technical-seo
description: Implement, audit, or diagnose technical SEO, including delivered HTML, crawlability, routes, metadata, localized URLs, sitemaps, structured data, images, and performance. Not for visible-copy-only work or standalone competitor research.
---

# Technical SEO

Protect the version of the website that crawlers and users actually receive. Search
systems can only discover, interpret, and index what the complete delivery
chain exposes consistently.

## Work with the owning surfaces

- Use [references/repository-surfaces.md](references/repository-surfaces.md)
  when a change touches routes, prerendering, metadata, localization, or
  deployment behavior.
- Read [references/platform-guidance.md](references/platform-guidance.md)
  before changing crawler policy, structured data, language annotations,
  sitemaps, redirects, mobile delivery, images, or making claims about search
  platforms and Core Web Vitals.
- Read [references/analytics-measurement.md](references/analytics-measurement.md)
  when changing analytics, consent, campaign attribution, or conversion-event
  delivery.
- `seo-geo-content` owns search intent and public copy quality. Use it too when
  technical work changes visible copy, titles, or meta descriptions.
- Use specialized FAQ or project skills only when the technical change also
  affects their material evidence, attribution or publication boundaries.

Repository evidence establishes what the implementation does. Search Console,
webmaster tools, analytics, field data, and live responses establish external
state; source code cannot substitute for them.

## Workflow

### 1. Define the search contract

Identify the affected public URLs, intended indexation state, canonical URL,
language behavior, primary content, discovery paths, and user outcome. Inventory
every owning surface before editing and preserve established URLs unless the
task includes a redirect or migration. Keep findings outside the requested
scope as findings instead of silently expanding the change.

### 2. Inspect the delivered result

Inspect both the owning source and a fresh production build. For each affected
page, verify the HTTP status and final URL, title and description, canonical,
document language, robots directives, primary content, crawlable links, media
alternatives, and any JSON-LD in the rendered HTML. JSX or an application shell
alone does not prove what a crawler receives.

Treat mobile as a first-class search surface. Keep primary content, metadata,
structured data, discovery links, and crawlable resources equivalent and
available without user interaction; responsive styling can otherwise hide
what mobile-first systems index.

Distinguish repository facts from external observations. Do not claim that a
page is indexed, selected as canonical, eligible for a search feature, fast for
real users, or visible in an AI answer without evidence from the system that
owns that state.

### 3. Change the narrowest owner

Keep the actual route owners, pages, generated documents, sitemap, canonical
URLs, navigation, and internal links synchronized when they apply.
Essential content and discovery links remain present in delivered HTML; never
edit generated `dist/` files.

Keep metadata and visible content aligned without enforcing exact character
counts or keyword placement. Canonicals identify a preferred URL among
duplicates; they do not replace redirects, and all signals should agree.
`hreflang` applies only when distinct localized URLs exist. Inspect the project's
actual URL-language model and preserve reciprocal alternates, self-references,
and matching localized canonicals for its existing language versions. A
different model is an architecture change, not an incidental metadata edit.

Structured data must represent visible, current content and use safe JSON
serialization. Schema validity can improve machine understanding or establish
eligibility, but it does not guarantee a rich result, ranking, citation, or
recommendation.

Treat crawling, indexing, training, search retrieval, user-triggered fetches,
and analytics as different controls. Verify current official documentation and
production WAF or CDN behavior before changing crawler access. Do not change
external search tools, analytics, crawler policy, redirects, or production
operations unless the task authorizes that state change.

### 4. Preserve semantics and performance

Use semantic HTML and native links for content relationships. Give meaningful
images useful alternatives and decorative images empty alternatives; preserve
essential information outside media. Maintain accessible names and stable
rendering because users, assistive technology, crawlers, and browser agents
consume overlapping structure.

Measure performance when the change can affect loading, responsiveness, or
layout stability. Use lab measurements to diagnose a build and field data to
describe real-user Core Web Vitals; bundle size or screenshots prove neither.
When performance is in scope, inspect the project's existing measurement tools
and compare mobile and desktop runs with equivalent profiles and repetition
counts. Treat every Lighthouse category as a diagnostic signal, not a
repository contract: its page sample complements but does not replace the
project's actual validation, external crawling evidence, manual accessibility
review, or field data. Do not assume a performance-report command exists.

### 5. Validate and report

For implementation and review work, discover the project's checks in its
instructions and package scripts, and run those relevant to the changed
surface. Build fresh output before inspecting generated HTML; use the actual
production-serving path on an unused port when status codes, redirects, or
headers matter. A build passing does not prove that an SEO audit passed.
Use feature-specific official validators when structured data or platform
behavior is in scope.

A request that only deploys, updates, restarts, or checks an existing revision
uses the repository's existing operational guidance instead. Rebuilding and
activating that revision plus focused live health checks prove the deployment;
repeating source validation, Lighthouse, security audits, screenshots, or a
broad review does not. Run those only when the user asks, the revision is
modified during the task, or a deployment failure makes diagnosis necessary.
Keep an unrelated live finding as a reported finding unless it prevents the
requested deployment from working.

Report the observed evidence, change, remaining uncertainty, and exact checks.
For audits, prioritize findings by user and discovery impact, confidence, and
effort; distinguish defects from recommendations and external states that need
separate access.

Translate tool output into the user's language and decision context instead of
returning raw logs or a JSON path. State the overall validation result and
summarize any failing contract. For performance measurements, report the
sampled pages, mobile and desktop medians, category scores out of
100, loading metrics with units, the main bottleneck, and a short explanation
of what the evidence means. Keep Lighthouse findings diagnostic and label them
as lab evidence rather than real-user Core Web Vitals.

## Boundaries

- Do not treat one H1, fixed title lengths, keyword placement, link counts, or
  click depth as universal requirements.
- Do not create pages, schema, crawler rules, or metadata solely because a
  tactic is presumed to improve SEO or AI visibility.
- Do not use `robots.txt` as a substitute for `noindex`, canonicalization,
  authentication, or removal of private content.
- Do not infer production behavior from Vite development rewrites or local
  source files.
- Do not promise rankings, indexation, rich results, citations, traffic, or
  Core Web Vitals improvements.

## Output

Return the requested audit or implementation. For non-trivial work, include a
concise private handoff with affected URLs and owners, evidence, material risks
or unknowns, and validation results.
