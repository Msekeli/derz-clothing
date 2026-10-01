# DERZ Storefront — AI Agent Instructions

## 1. Purpose

You are working inside the DERZ Storefront repository.

You are an implementation agent, not the owner of the architecture.

Your job is to implement requested changes while preserving the established architecture, product decisions, design system, boundaries and existing working behaviour.

---

## 2. Shared Agent Instructions

This file is the shared instruction source for AI coding agents working on DERZ.

The repository may be worked on by:

- Gemini CLI
- Antigravity CLI
- GitHub Copilot CLI
- Claude Code
- Codex

All agents must follow this file.

Tool-specific instruction files may exist for agents that support their own instruction mechanism:

- `GEMINI.md` — Gemini / Antigravity
- `CLAUDE.md` — Claude Code

These files must complement this document, not replace or contradict it.

`AGENTS.md` remains the shared project authority.

---

## 3. Required Context

Before making meaningful changes, inspect the repository and read the documentation relevant to the task.

At minimum, understand:

- `README.md`
- `AGENTS.md`
- `docs/architecture/ecosystem.md`
- `docs/architecture/storefront.md`
- `docs/development/ai-agent-workflow.md`

For frontend work, also read:

- `docs/brand/ui-and-brand.md`
- `docs/development/frontend-checkpoints.md`

For backend work, also read:

- `docs/development/backend-checkpoints.md`

Do not assume that your pretrained knowledge of DERZ is authoritative.

The repository documentation is the source of truth for this project.

---

## 4. AI Agent Workflow

The project uses Gemini/Antigravity and GitHub Copilot as its active AI development tools.

Read:

`docs/development/ai-agent-workflow.md`

This document defines:

- which agent should normally handle different types of work
- how Gemini/Antigravity and Copilot are used together
- how AI usage is managed
- how work is handed between agents
- how unnecessary duplication is avoided
- how tasks are verified before completion

The workflow document defines operational usage of the AI tools.

It does not override the architecture or development rules in this file.

---

## 5. Authority Order

When information conflicts, use this order:

1. Explicit user instruction in the current task
2. Locked project architecture and design documentation
3. Existing implementation that is consistent with that documentation
4. Relevant implementation checkpoints
5. AI agent workflow guidance
6. General engineering knowledge
7. Your own assumptions

Never silently override project decisions with general best practices.

If the repository documentation does not answer an architectural question, identify the gap instead of inventing a permanent architectural decision.

---

## 6. Before Changing Code

Inspect the existing implementation first.

Determine:

- what already exists
- how the existing code works
- which files are involved
- whether the requested behaviour is already partially implemented
- whether another part of the application depends on the code being changed

Do not rewrite working code merely because you would structure it differently.

Prefer the smallest coherent change that satisfies the requirement.

Do not make unrelated refactors.

Do not replace existing implementations with mock implementations unless explicitly requested.

---

## 7. Architecture Rules

DERZ is an ecosystem containing:

- AuthService
- DERZ Storefront
- DERZ Admin

These are separate applications with deliberate boundaries.

The Storefront consists of:

- Next.js frontend
- ASP.NET Core .NET 10 backend
- shared `derz commerce db`

The browser must never connect directly to SQL Server.

The Storefront backend is the authoritative server-side commerce boundary.

Do not create new services, authentication systems, databases or architectural patterns unless explicitly required by the project architecture.

Do not create another authentication system inside the Storefront.

Do not make the Storefront depend on internal implementation details of AuthService or DERZ Admin.

---

## 8. Backend Authority

Never trust the client for authoritative commerce decisions.

The backend must remain authoritative for:

- prices
- inventory
- availability
- cart validation
- order totals
- checkout
- payment state
- promotions
- customer ownership
- authorization
- other server-controlled commerce rules

Client-provided values must be treated as untrusted input.

AI output is also untrusted input.

---

## 9. Frontend Rules

The existing Storefront frontend is an established implementation.

Preserve existing behaviour unless the requested change explicitly requires changing it.

Use the existing:

- Next.js structure
- TypeScript conventions
- Tailwind CSS
- shadcn/ui
- design tokens
- component patterns
- responsive patterns
- accessibility patterns
- state-management approach
- API contracts

Do not introduce another UI framework or state-management system without an explicit requirement.

Do not redesign existing screens simply because you prefer another design.

Follow `docs/brand/ui-and-brand.md` for visual decisions.

---

## 10. Design System

DERZ has an established visual identity.

Use existing semantic design tokens and components.

Do not introduce arbitrary colours, typography, spacing or visual styles when an existing design-system value can be used.

Do not turn DERZ into a generic technology, luxury-fashion or stereotypical African visual design.

The brand is DERZ.

---

## 11. API and Contracts

The frontend and backend communicate through explicit API contracts.

Do not allow frontend assumptions to become the backend contract.

When changing an API:

- inspect existing consumers
- preserve compatibility where appropriate
- update the relevant types/contracts
- update affected consumers
- verify the complete flow

Mocks and fixtures may be used during development, but they must represent the intended real API contract.

---

## 12. AI-Assisted Development

You are one of several possible AI agents working on the same repository.

Do not assume you are the only agent.

Do not assume that another agent's previous implementation is automatically correct.

Inspect the actual repository state.

All agents must use the same project architecture and documentation.

Different AI tools may have different capabilities and preferences, but those differences must not create conflicting project architecture.

Before beginning substantial work, follow the workflow defined in:

`docs/development/ai-agent-workflow.md`

When another agent has already worked on the task, inspect the current Git status and diff before modifying the implementation.

---

## 13. Handling Uncertainty

If a requirement is unclear but the existing architecture answers it, follow the architecture.

If the architecture does not answer it and the decision would have architectural consequences, identify the decision that needs to be made.

Do not silently establish a new permanent architectural rule.

For small implementation details, use reasonable engineering judgement while preserving existing project conventions.

---

## 14. Verification

After making changes:

1. Inspect the changed files.
2. Run the relevant formatter, type checker, build or tests available for the affected application.
3. Check for regressions.
4. Inspect the final Git diff.
5. Confirm that only intended files changed.

Do not claim something was tested if it was not actually tested.

Do not claim a build passed without running it.

Do not claim a feature is complete when only part of its required flow has been implemented.

---

## 15. Git Discipline

Do not create commits unless explicitly instructed.

Before reporting completion, inspect:

```bash
git status
git diff
```
