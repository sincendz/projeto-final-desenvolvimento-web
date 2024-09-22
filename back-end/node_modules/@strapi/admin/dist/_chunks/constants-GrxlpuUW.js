"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ROUTES_EE = [
  ...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) ? [
    {
      async Component() {
        const { ProtectedListPage } = await Promise.resolve().then(() => require("./ListPage-cf0xg9Vl.js"));
        return ProtectedListPage;
      },
      to: "/settings/audit-logs",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) ? [
    {
      async Component() {
        const { ProtectedReviewWorkflowsPage } = await Promise.resolve().then(() => require("./ListPage-iMHN5Q_L.js"));
        return ProtectedReviewWorkflowsPage;
      },
      to: "/settings/review-workflows",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsCreatePage } = await Promise.resolve().then(() => require("./CreatePage-GlDbH1lS.js"));
        return ReviewWorkflowsCreatePage;
      },
      to: "/settings/review-workflows/create",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsEditPage } = await Promise.resolve().then(() => require("./EditPage-4DJ3Tjlb.js"));
        return ReviewWorkflowsEditPage;
      },
      to: "/settings/review-workflows/:workflowId",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
    {
      async Component() {
        const { ProtectedSSO } = await Promise.resolve().then(() => require("./SingleSignOnPage-0PwZElsW.js"));
        return ProtectedSSO;
      },
      to: "/settings/single-sign-on",
      exact: true
    }
  ] : []
];
exports.ROUTES_EE = ROUTES_EE;
//# sourceMappingURL=constants-GrxlpuUW.js.map
