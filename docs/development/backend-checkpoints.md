# DERZ Storefront Backend Implementation Checkpoints

**Status:** Locked Implementation Roadmap

## Purpose

This document defines the meaningful implementation checkpoints for the Storefront backend.

**Repository:** `derz-clothing`  
**Backend:** `backend/`  
**Framework:** ASP.NET Core Web API  
**Runtime:** .NET 10  
**Architecture:** Pragmatic Clean Architecture  
**ORM:** Entity Framework Core  
**Database:** Microsoft SQL Server  
**Local database:** Docker  
**Authentication:** AuthService  
**AI development:** Ollama  
**Payments:** Stripe  
**Media:** Cloudinary

## Commit Rules

- Every completed checkpoint should result in a meaningful Git commit.
- Use `feat`, `fix`, `refactor`, `chore`, `docs`, or `test` according to the actual work.
- Inspect the real Git diff/status after implementation.
- Do not guess changed files.
- Keep checkpoints cohesive.
- Verify each checkpoint before marking it complete.
- Avoid abstractions, patterns or services without a concrete requirement.

## Checkpoints

### CP1 — Backend Solution Foundation

Create the initial ASP.NET Core backend structure and .NET 10 solution.

### CP2 — Clean Architecture & Dependency Direction

Establish Domain, Application, Infrastructure and API responsibilities and dependency direction.

### CP3 — SQL Server & EF Core Infrastructure

Configure EF Core, SQL Server, Docker-based local infrastructure and migration support.

### CP4 — Core Commerce Domain Model

Define foundational products, categories, departments, variants, styles, sizes, imagery, pricing, inventory, customers, carts and orders as justified.

### CP5 — Database Schema & Migrations

Configure EF Core mappings, relationships, constraints, indexes and initial migrations.

### CP6 — API Foundation & Cross-Cutting Infrastructure

Establish routing, dependency injection, configuration, exception handling, API errors, validation, logging, CORS, health checks and OpenAPI.

### CP7 — Catalogue API

Implement catalogue, product, category, department, variant, style, size, filtering, sorting and pagination endpoints.

### CP8 — Search & Product Discovery API

Implement search, filtering, price filtering, sorting, pagination, no-result handling and appropriate database indexes.

### CP9 — Inventory & Availability API

Expose authoritative product, variant and size availability.

### CP10 — AuthService Integration

Integrate the existing AuthService without creating another identity system.

### CP11 — Customer Account API

Implement authenticated customer profile retrieval, updates and ownership validation.

### CP12 — Cart API

Implement trusted cart creation, retrieval, item management, availability validation and authoritative pricing.

### CP13 — Wishlist API

Implement persistent customer wishlist operations and ownership validation.

### CP14 — Order Domain & Order API

Implement order creation, authoritative totals, order history, details and order state.

### CP15 — Checkout & Stripe Integration

Implement secure checkout orchestration and Stripe integration. Payment authority remains server-side.

### CP16 — Cloudinary Media Integration

Establish the backend boundary for product and campaign media.

### CP17 — Promotions API

Implement promotional concepts, validation and server-side eligibility/outcome rules.

### CP18 — AI Provider Abstraction

Create a provider-independent AI boundary and implement Ollama for local development.

### CP19 — AI Style Assistant Backend

Implement grounded outfit recommendations using real DERZ catalogue data. AI must not become authoritative for products, prices, stock, payments or orders.

### CP20 — API Validation, Security & Hardening

Review authentication, authorization, validation, ownership, configuration, CORS, errors, logging, providers and AI handling.

### CP21 — Backend Automated Testing

Add meaningful unit, application, integration and security-focused tests.

### CP22 — Frontend/API Contract Integration

Connect the frontend to real backend contracts and remove obsolete mocks after verification.

### CP23 — Backend Performance & Production Readiness

Review database performance, queries, indexes, caching, external-provider handling, health checks, logging, configuration and deployment.

### CP24 — Storefront Full-System Verification

Verify frontend, backend, SQL Server, authentication, catalogue, search, products, cart, wishlist, checkout, orders, promotions and AI together.

## Completion Record

For every checkpoint record:

- Checkpoint number and title
- Status
- Implementation summary
- Verification performed
- Exact files/directories changed
- Commit type
- Final commit message
- Deliberate deviations
- Known limitations

## Scope Control

The Storefront backend remains one ASP.NET Core application.

Do not introduce additional microservices merely because a capability could theoretically be separated.

AuthService remains a separate reusable service.

The Storefront backend is the trusted server-side commerce boundary. The browser never connects directly to SQL Server.
