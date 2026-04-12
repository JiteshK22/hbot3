# MeWashkar — Premium Laundry Management & Logistics Platform

This repository now contains a **Phase-1 interactive prototype** for the MeWashkar platform described in the product brief.

## What's Included

- A Streamlit-based operations console prototype (`streamlit_app.py`) with:
  - Role switcher (Admin, Operations Manager, Rider, Workshop Staff, Customer)
  - KPI cards (orders, riders, revenue, delays)
  - Real-time operations table with status colors
  - Rider geo-tracking snapshot table
  - Customer intelligence panel (tiering + LTV)
  - Subscription plans overview
  - Item traceability timeline view
- A detailed implementation blueprint (`docs/solution_blueprint.md`) covering:
  - Architecture
  - Service boundaries
  - Data model
  - API design
  - Security
  - Delivery roadmap

## Run Locally

```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```

## Notes

This is a rapid prototype to align product, engineering, and operations before full NestJS/Next.js/Flutter production build-out.
