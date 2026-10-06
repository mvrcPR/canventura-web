// Adapted from Vento's repeated mobile/desktop reporting workflow.
// These are representative page types; seo:check covers every localized URL.
export const performanceReportConfig = {
  routes: ["/", "/carta/"],
  numberOfRuns: 3,
  profiles: ["mobile", "desktop"],
};
