# Pre-Update Evaluations — Version 1.50

| Area | Current State | Issues Identified | Impact |
| --- | --- | --- | --- |
| Admin visibility | No dedicated analytics dashboard. Admins rely on database exports. | Lack of consolidated metrics, no trend visualisation, high manual workload. | Strategic decisions delayed, low adoption of admin portal. |
| API support | No aggregated analytics endpoints. | Data must be aggregated client-side, leading to slow dashboards and inconsistent numbers. | Performance bottlenecks and data drift. |
| Design system | Admin screens reuse learner components with insufficient information density. | Layouts do not scale beyond 3 KPIs, inconsistent typography. | Poor readability on desktop, weak stakeholder confidence. |
| Mobile parity | Flutter app lacks admin analytics view. | Admins must use web on desktop; mobile push notifications cannot link to analytics. | Missed on-call triage capability. |
| Documentation | Previous release lacked detailed task progress reporting. | Teams cannot audit history of changes or responsibilities. | Compliance risk for ISO 27001 audits. |

## Technical Debt Inventory
1. **Backend caching:** No reusable cache layer. For analytics we will introduce an in-memory cache with TTL and invalidation hooks.
2. **Data timestamps:** While Sequelize adds timestamps, there is no migration to index `createdAt` columns. We must add indexes to ensure query performance.
3. **Flutter theming:** The admin colour palette is not defined; we will extend the theme with tokens derived from the web design spec.

## Risk Mitigation
- Implement request-level caching with cache busting triggered by writes to `users`, `posts`, and `communities` tables.
- Provide seed data to validate analytics accuracy across environments.
- Document fallback behaviour when analytics endpoint is unavailable.
