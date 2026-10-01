`docs/architecture/storefront.md`

````md
# DERZ Storefront

## Master Architecture & Development Documentation

**Status:** Locked Foundation

## 1. Document Purpose

This document is the source of truth for the DERZ Storefront application.

It defines the Storefront's purpose, repository boundary, existing frontend architecture, backend architecture, integrations, security boundaries, and relationship with the wider DERZ ecosystem.

The Storefront frontend is already substantially implemented. This document therefore preserves the existing frontend architecture rather than redesigning it.

Ecosystem-level relationships are governed by:

`docs/architecture/ecosystem.md`

## 2. Project Identity

**Project:** DERZ Storefront

**GitHub Repository:** `derz-clothing`

**Repository Role:** Complete customer-facing DERZ commerce application

**Repository Model:** Single repository containing Storefront frontend and backend

**Frontend:** Next.js

**Backend:** ASP.NET Core Web API (.NET 10)

**Database:** `derz commerce db`

**Database Technology:** Microsoft SQL Server

**Authentication:** Existing reusable AuthService

**Local AI Development:** Ollama

**Potential Production AI Providers:** Gemini, Anthropic, OpenAI, or another suitable provider

## 3. Ecosystem Position

DERZ Storefront is one of three independent DERZ applications:

```text
DERZ Ecosystem
├── AuthService
├── DERZ Storefront
└── DERZ Admin
```
````
