const ROUTES_EE = [
  ...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) ? [
    {
      async Component() {
        const { ProtectedListPage } = await import("./ListPage-mYq4GXDx.mjs");
        return ProtectedListPage;
      },
      to: "/settings/audit-logs",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) ? [
    {
      async Component() {
        const { ProtectedReviewWorkflowsPage } = await import("./ListPage-USWD7OAn.mjs");
        return ProtectedReviewWorkflowsPage;
      },
      to: "/settings/review-workflows",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsCreatePage } = await import("./CreatePage-x78bBThb.mjs");
        return ReviewWorkflowsCreatePage;
      },
      to: "/settings/review-workflows/create",
      exact: true
    },
    {
      async Component() {
        const { ReviewWorkflowsEditPage } = await import("./EditPage-lpcjU1iO.mjs");
        return ReviewWorkflowsEditPage;
      },
      to: "/settings/review-workflows/:workflowId",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
    {
      async Component() {
        const { ProtectedSSO } = await import("./SingleSignOnPage-hF18NC0F.mjs");
        return ProtectedSSO;
      },
      to: "/settings/single-sign-on",
      exact: true
    }
  ] : []
];
export {
  ROUTES_EE
};
//# sourceMappingURL=constants-6DC4IjBd.mjs.map
