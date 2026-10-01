# DERZ Storefront Frontend Implementation Checkpoints

**Status:** Locked Implementation Roadmap

## Purpose

This document defines meaningful frontend implementation checkpoints. Each checkpoint represents a coherent piece of work that can be verified and committed independently.

The existing frontend is being restructured rather than replaced.

## Commit Rules

- Every completed checkpoint should result in a meaningful Git commit.
- Use the commit type that matches the work: `feat`, `fix`, `refactor`, `chore`, `docs`, or `test`.
- Inspect the real Git diff/status after implementation.
- Do not invent changed files before implementation.
- Keep checkpoints cohesive.
- Verify each checkpoint before marking it complete.
- Git history should communicate meaningful development progress.

## Checkpoints

### CP1 — Repository Restructure & Frontend Foundation

Establish the Storefront repository structure without losing existing frontend work.

### CP2 — Frontend Dependency & Tooling Baseline

Establish the locked Next.js, React, TypeScript, Tailwind, shadcn/ui, Zustand, TanStack Query, React Hook Form, Zod, Lucide and Motion baseline.

### CP3 — Application Shell & Global Design System

Establish the global layout, DERZ design tokens, responsive rules, reusable UI primitives, header, footer and shared feedback states.

### CP4 — Homepage & Brand Discovery

Implement the Storefront homepage, hero, featured products/collections, campaigns and navigation into catalogue experiences.

### CP5 — Catalogue & Category Experience

Implement catalogue structure, Men/Women/Kids navigation, category navigation, product cards, responsive product grids, sorting, filtering structure and the selected pagination/loading strategy.

### CP6 — Search, Filtering & Discovery

Implement search, query handling, agreed filters, sorting, clear/reset behaviour, no-results/error states and URL synchronization where appropriate.

### CP7 — Product Details & Variant Selection

Implement product details, imagery, pricing, variants, sizes, availability, quantity and add-to-bag interactions.

### CP8 — Shopping Bag & Client State

Implement bag/cart UI, item management, appropriate Zustand client state, empty state and bag summary while keeping server-authoritative pricing/inventory separate.

### CP9 — Customer Authentication & Account UI

Build the customer account experience around the existing AuthService. Do not create a second identity system.

### CP10 — Wishlist

Implement wishlist UI, save/remove interactions, authentication states and typed API contracts.

### CP11 — Checkout Frontend

Implement checkout, customer information, delivery information, order summary, payment boundary and validation. Backend remains authoritative for totals and payment confirmation.

### CP12 — Order Confirmation & Customer Orders

Implement confirmation, order history, order details and backend-provided order status.

### CP13 — Collections, Drops & Promotions UI

Implement collection pages/sections, limited drops, promotional banners and campaign components.

### CP14 — AI Style Assistant UI

Implement the Style Assistant entry point, preference input, recommendation states, real product presentation and interactions such as changing or constraining a look.

AI recommendations must remain grounded in trusted backend product data.

### CP15 — API Integration & Server State

Establish the typed API boundary and connect catalogue, product, availability, cart, account, wishlist, order, promotion and AI APIs.

Use TanStack Query for appropriate server state.

### CP16 — Responsive, Accessibility & UX Hardening

Test and improve mobile/tablet/desktop layouts, keyboard navigation, focus states, semantic HTML, image behaviour, feedback states and motion.

### CP17 — Frontend Testing

Add meaningful automated coverage for important components, catalogue/search/filter behaviour, product/bag interactions, forms, authentication states, checkout and important AI states.

### CP18 — Production Frontend Readiness

Verify environment configuration, secret boundaries, production build, API configuration, media configuration, error handling, metadata, SEO basics, performance-sensitive pages and deployment configuration.

## Completion Record

For each checkpoint record:

- Checkpoint number and title
- Status
- Implementation summary
- Verification performed
- Exact files/directories changed
- Commit type
- Final commit message
- Deliberate deviations from master documentation

## Scope Rule

These checkpoints define the frontend roadmap. Frontend work may initially use typed contracts and controlled mock data; the final Storefront must connect to the ASP.NET Core backend.

The frontend remains the customer-facing DERZ Storefront. It is not an admin application, inventory system, supplier system, staff dashboard or direct database client.
