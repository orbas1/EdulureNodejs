# Feature Update Plan — Admin Analytics

## Feature: Admin Engagement Overview Dashboard

### Problem Statement
Administrators lack insight into user activation and community engagement trends, resulting in delayed interventions.

### User Stories & Acceptance Criteria
1. **As an admin**, I need to see key KPIs (total users, active users in last 30 days, communities, posts, retention) so that I can measure growth.
   - API returns aggregated metrics with `periods: { sevenDays, thirtyDays, lifetime }`.
   - Frontend displays KPIs with contextual trend indicators.
   - Data refresh triggered every 15 minutes or on manual refresh.
2. **As an admin**, I want to review sparkline trends for user signups and posts to understand velocity.
   - API exposes arrays with daily counts for past 14 days.
   - Frontend renders line charts with accessible colour contrast.
   - Flutter replicates the metrics with simplified charts (numeric change + bar representation).

### Technical Specifications
- **Backend**: `GET /api/admin/analytics/overview`
  - Requires admin JWT.
  - Response caches for 15 minutes (configurable via env `ANALYTICS_CACHE_TTL` default 900 seconds).
  - Includes counts for `totalUsers`, `newUsers`, `activeUsers`, `totalCommunities`, `activeCommunities`, `totalPosts`, `newPosts`, `retentionRate`.
  - `sparkline` arrays keyed by `userSignups` and `postPublishes`.
- **Database**: Add indexes on `users.createdAt`, `posts.createdAt`, `memberships.updatedAt` to keep queries performant.
- **Frontend**: New route `/admin/analytics` accessible from admin menu only. Use React Query for caching and skeleton states.
- **Mobile**: Add `AdminOverviewScreen` showing KPI list with period toggles.

### Dependencies & Integrations
- Utilise existing JWT middleware for admin role enforcement.
- Use `date-fns` on frontend for formatting (already dependency?). We'll add if missing.
- Flutter uses `intl` package for number formatting (already available?). Add if missing.

### QA Strategy
- Add backend unit tests for analytics service verifying SQL queries using SQLite in-memory DB.
- Add React testing library tests for KPI component to ensure accessibility.
- Add Flutter widget test for overview card verifying layout.

### Rollout Plan
- Deploy backend first, verifying with seeded DB.
- Deploy frontend and mobile simultaneously after verifying API compatibility.
- Update documentation and share release note in `Design_Change_Log.md` and global changelog.
