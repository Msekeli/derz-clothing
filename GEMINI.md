# DERZ Storefront — Gemini / Antigravity Instructions

## Purpose

These instructions apply specifically to Gemini CLI and Antigravity CLI when working in the DERZ Storefront repository.

The shared project rules are defined in:

`AGENTS.md`

Always follow `AGENTS.md`.

Do not duplicate or contradict the project architecture, development rules, design system or security requirements defined there.

## Workspace Context

Before making changes:

1. Read `AGENTS.md`.
2. Inspect the repository.
3. Read the project documentation relevant to the requested task.
4. Inspect the existing implementation before modifying it.

Do not rely on assumptions about the DERZ project.

## Model Usage

Use the selected model according to the task.

Prefer cost-effective models for straightforward implementation, investigation, documentation and routine fixes.

Use stronger reasoning models when the task genuinely requires deeper reasoning, complex debugging, architectural analysis or difficult refactoring.

Do not switch models unnecessarily during a single task.

Do not repeat repository analysis when the required context is already available in the current session.

## Implementation Behaviour

Preserve existing working code and project conventions.

Make focused changes that directly address the requested task.

Do not perform unrelated refactoring.

Do not introduce architectural changes without justification.

Ask for clarification when a requested change conflicts with the established project architecture.

## Verification

After implementation:

- inspect the changed files
- run relevant checks, tests, type checking or builds
- inspect the resulting Git diff
- report what was actually verified

Never claim that a command, test or build succeeded unless it was actually run.

## Git

Do not create commits unless explicitly requested.

Before recommending a commit, inspect the actual repository state and diff.

## Tool-Specific Behaviour

Antigravity may use terminal commands and repository tools to inspect and modify the project.

Use those capabilities deliberately.

Do not execute destructive commands without explicit justification.

Do not modify files outside the requested scope.

`AGENTS.md` remains the authoritative project instruction file.
