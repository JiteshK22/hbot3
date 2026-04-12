# MeWashkar Solution Blueprint

## 1) Objective
Build a premium laundry management and logistics system with end-to-end order lifecycle, pickup/delivery tracking, customer intelligence, subscription engine, and real-time operations visibility.

## 2) User Roles
- **Admin**: pricing, analytics, users, governance
- **Operations Manager**: order orchestration, rider assignment, SLA monitoring
- **Driver/Rider**: pickup, proof upload, delivery execution, location updates
- **Workshop Staff**: processing-stage updates
- **Customer**: booking, tracking, payments, subscriptions

## 3) Core Capability Map

### Existing capabilities
- Customer summary
- Product report
- Invoice search
- Workshop history
- Discounts
- Online payment
- Unpaid invoices
- WhatsApp history

### New/Enhanced capabilities
1. **Real-time operations dashboard**
2. **Geo tracking + routing**
3. **Customer intelligence (RFM, tiering, LTV)**
4. **Subscription & credit engine**
5. **Campaign targeting engine**
6. **Traceability engine per garment stage**

## 4) Status Model
- `PENDING` (grey)
- `PICKUP_ASSIGNED` (blue)
- `PICKED` (orange)
- `PROCESSING` (purple)
- `READY` (teal)
- `OUT_FOR_DELIVERY` (yellow)
- `DELIVERED` (green)
- `ISSUE` (red)

## 5) Recommended Production Architecture
- Frontend: Next.js + Tailwind + shadcn/ui
- Mobile: Flutter (single app, role-based)
- Backend: NestJS (modular monolith → microservices)
- DB: PostgreSQL + Prisma
- Cache/Queue: Redis + BullMQ
- Event bus: Kafka
- Integrations: Payment gateway, WhatsApp API, Maps API

## 6) Service Boundaries
- Auth Service
- User/Customer Service
- Orders Service
- Tracking Service
- Logistics Service
- Pricing & Discount Service
- Payment Service
- Subscription Service
- Notification Service
- Analytics Service

## 7) Data Model (Core)
- `users`
- `customers`
- `orders`
- `order_items`
- `order_tracking`
- `riders`
- `payments`
- `subscriptions`
- `campaigns`

## 8) API Surface (v1)
- `POST /auth/login`
- `POST /auth/register`
- `POST /orders`
- `GET /orders`
- `GET /orders/:id`
- `PATCH /orders/:id/status`
- `POST /tracking/update`
- `GET /tracking/:orderId`
- `GET /dashboard/summary`
- `GET /dashboard/live-orders`
- `GET /riders`
- `POST /riders/location`
- `POST /subscriptions`
- `POST /campaigns/execute`

## 9) Intelligence Rules (Initial)
- Tiering:
  - `orders > 50` → `PLATINUM`
  - `orders > 20` → `GOLD`
  - otherwise `SILVER`
- Demand pricing:
  - `peak_hours = true` → multiply by configurable surge factor
- Smart assignment:
  - nearest rider + capacity + SLA risk score

## 10) Security & Compliance
- JWT auth
- Role-based authorization guards
- API rate limiting
- Payment tokenization/encryption
- Audit logs
- PII masking for support views

## 11) Delivery Roadmap

### Phase A (2–4 weeks)
- Complete schema + auth + order flow + status transitions
- Build ops dashboard and rider location updates

### Phase B (4–6 weeks)
- Subscription plans, campaign engine, customer tiering dashboards
- SLA monitoring and alerting workflows

### Phase C (6–10 weeks)
- Multi-tenant readiness, forecasting, route optimization, auto-assignment refinement

## 12) KPI Targets
- On-time delivery %
- Pickup SLA compliance %
- Avg processing TAT
- Customer repeat rate
- Subscription conversion and churn
- Rider utilization
