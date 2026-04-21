# MeWashkar — Laundry Management + Logistics Platform

This repository now includes a production-oriented **monorepo scaffold** for the BRD you provided:

- `backend/` — NestJS + Prisma API
- `frontend/` — Next.js admin/web dashboard
- `mobile_app/` — Flutter role-based app shell (Customer/Rider)
- `docker-compose.yml` — local dependency orchestration (Postgres, Redis, backend, frontend)

## Implemented Scope

### Backend APIs
- Auth: `POST /auth/register`, `POST /auth/login`
- Customers: `POST /customers`, `GET /customers`
- Orders: `POST /orders`, `GET /orders`, `PATCH /orders/:id/status`
- Tracking: `POST /tracking/update`, `GET /tracking/:orderId`
- Riders: `GET /riders`, `POST /riders/location`, `POST /riders/assign`
- Payments: `POST /payments`
- Subscriptions: `POST /subscriptions`
- Dashboard: `GET /dashboard/summary`, `GET /dashboard/live-orders`

### Data Model
Prisma schema includes:
- Users + role enum
- Customers + tier/lifetime fields
- Orders + status enum + items + tracking
- Riders + live geo fields
- Payments
- Subscriptions

### Frontend
- Premium-style dashboard page with KPI cards
- Status tag component with BRD color mapping
- Module stubs for orders/customers pages
- API service preconfigured to backend base URL

### Mobile
- Role-based login routing
- Customer home shell
- Rider dashboard shell
- API service placeholder

## Run Locally

1. Copy environment values if needed:
   ```bash
   cp .env.example .env
   ```
2. Start core services:
   ```bash
   docker-compose up --build
   ```
3. Backend migration (after backend container is ready):
   ```bash
   cd backend
   npx prisma migrate dev
   npm run start:dev
   ```
4. Frontend dev server:
   ```bash
   cd frontend
   npm run dev
   ```

## Notes
- This is a strong execution-ready base with your required module boundaries and API contracts.
- Next buildout steps: JWT guard middleware, RBAC decorators, BullMQ workflows, WhatsApp/Twilio adapters, map SDK integration, websocket gateway, and full analytics services.
