# Version 1.50 Update Plan

## Milestone 1 — Admin Analytics Foundations (Week 1-2)
- Create aggregated metrics endpoint on the backend with caching and index migrations.
- Build React admin analytics dashboard referencing new UI kit components.
- Ship Flutter admin overview tab replicating the KPI cards.
- Update documentation: changelog, trackers, design artefacts.

## Milestone 2 — Automation & Alerting (Week 3)
- Extend backend to expose anomaly detection hooks.
- Integrate admin email summaries (out of scope for current task set).

## Implementation Strategy
1. **Backend First:** Introduce analytics service under `backend/src/services/analyticsService.js` with caching, SQL queries, and unit tests. Expose via `/api/admin/analytics/overview` route. Add indexes migrations.
2. **Frontend React:** Create dedicated `AdminAnalyticsPage` with reusable KPI and trend components. Source data from new API, implement skeleton states, and add route protection.
3. **Flutter:** Add `admin_overview` screen under `mobile/edulure_app/lib/admin/` using Riverpod for state management (existing provider). Display metrics and update navigation to surface the screen for admin users.
4. **Design Alignment:** Document new typography scale, card layout spacing, and state references in design directories. Provide ASCII drawings for quick reference.
5. **Documentation Discipline:** After every code change update trackers and changelogs to maintain audit history.

## Dependencies
- Sequelize migrations applied (requires `npm run migrate`).
- Flutter Riverpod provider already configured.
- Admin authentication in place (JWT) - we will reuse existing middleware.

## Release Checklist
- [ ] Backend tests & linting pass.
- [ ] Frontend lint/test pass.
- [ ] Flutter analyzer passes.
- [ ] Documentation updated.
- [ ] Progress tracker reflects 100% completion for Milestone 1 Task 1 before moving forward.
