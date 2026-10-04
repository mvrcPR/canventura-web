# Analytics measurement

Use this reference when the request includes analytics, consent, attribution,
or conversion events. It does not require installing analytics for other SEO
work or assume that a provider or event adapter already exists.

## Measure a decision

Define the business question and the user action that helps answer it. Reuse
an established event when it expresses the same meaning. Page visits,
successful form submissions, reservation exits, or deliberate content
selections may be useful depending on the project; tracking every hover,
carousel change, or scroll position is not a default.

Distinguish intent from completion. Clicking an external booking or checkout
link does not prove that a reservation or purchase succeeded.

## Find the actual owners

Inspect the existing event vocabulary, adapter, consent flow, environment
configuration, and reporting setup. Reuse their ownership rather than creating
page-local event names or assuming a particular source-file layout.

Use stable identifiers that survive translation and copy changes. Avoid names,
emails, form contents, account identifiers, arbitrary free text, or URLs that
contain personal values. If new vocabulary is needed, document its question
and meaning at the existing owner and update the adapter and affected consumers.

For a named analytics provider, check its current official documentation before
choosing reserved event names, parameter semantics, or custom dimensions.
Browser or device language and delivered content language are different
observations; preserve that distinction when the question requires it.

## Consent and navigation

Follow the project's actual consent and privacy requirements. Check rejection
and withdrawal behavior where consent is required. Navigation and forms should
continue to work when analytics is denied, blocked, or unavailable. Keep local
and preproduction activity separate from live reporting when the provider
supports that distinction.

Preserve the project's external campaign convention. Internal navigation
should not overwrite acquisition context with campaign tags.

## Implement and verify

1. Identify the question, action, vocabulary, and relevant consent behavior.
2. Change the narrowest owning adapter and component within the authorized scope.
3. Use the repository's available checks and observe one representative action
   when runtime behavior changes.
4. Verify live receipt through the provider's debugger or property when the
   request includes that access and deployment.

Report the action, business question, emitted event and dimensions, consent
behavior, and checks. Local validation can prove local emission; it cannot prove
provider configuration, successful external receipt, or a completed transaction.
