# Edulure Platform Monorepo

A unified workspace for the Edulure learning ecosystem. This repository contains:

- **frontend/** – Vite + React + Tailwind web experience for landing, authentication, feed, search, profile, and admin access.
- **backend/** – Node.js (Express + Sequelize) API with MySQL schema, migrations, seeders, and Meilisearch hooks.
- **mobile/edulure_app/** – Flutter companion app aligned with the web experience.
- **assets/** – Shared static assets (logo & favicon hosted remotely).

## Getting started

### Prerequisites
- Node.js 20+
- npm 10+
- MySQL 8+
- Flutter 3.19+
- (Optional) Meilisearch 1.8+ for global search

### Frontend
```bash
cd frontend
npm install
npm run dev
```
The dev server runs on http://localhost:5173. Tailwind and Inter font are preconfigured.

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your secrets
npm run dev
```
- Run `mysql -u root -p < install.sql` to bootstrap the database quickly.
- For iterative development use Sequelize migrations located in `src/database/migrations` and seed data in `src/database/seeders`.
- API available on http://localhost:4000 with routes under `/api`.

### Flutter mobile app
```bash
cd mobile/edulure_app
flutter pub get
flutter run
```
The Flutter app mirrors the core flows (home, login, register, feed, profile, admin login) with the same branding system.

## Project structure
```
frontend/
  src/
    components/     # Shared UI elements (header, footer)
    pages/          # Route-level screens
    data/           # Mock feed + community data
backend/
  src/
    config/         # Database, mailer, Meilisearch clients
    controllers/    # Route handlers
    services/       # Business logic
    routes/         # Express routers
    middleware/     # Auth + error handling
    models/         # Sequelize models & associations
    database/
      migrations/   # Schema definitions
      seeders/      # Initial content
mobile/edulure_app/
  lib/              # Flutter entrypoint and screens
```

## Admin & user roles
- Base user roles: `user`, `instructor`, and `admin`.
- Admin-only APIs live under `/api/admin` and require a valid JWT with `role = admin`.

## Search integration
`services/meiliService.js` sets up baseline indexes for communities, posts, and users. Run `ensureIndexes()` where appropriate after deploying Meilisearch.

## Assets
Logos and favicons are referenced via hosted URLs as binaries are excluded from the repository.
