# DERZ Storefront — AI Agent Workflow

## Purpose

This document defines how Gemini/Antigravity and GitHub Copilot are used together when developing the DERZ Storefront.

The goal is to use both tools effectively while avoiding unnecessary duplication and unnecessary consumption of AI allowances.

## Primary Agent — Gemini / Antigravity

Gemini/Antigravity is the primary development agent.

Use it for:

- Feature implementation
- Multi-file changes
- Repository-wide investigation
- Architecture-sensitive work
- Complex debugging
- Integration work
- Larger refactoring
- Tasks requiring substantial project context

Use the most cost-effective suitable Gemini model for routine work. Use stronger models when the task genuinely requires deeper reasoning.

## Secondary Agent — GitHub Copilot

Copilot is the secondary development agent.

Use it for:

- Focused coding tasks
- Small isolated fixes
- Targeted refactoring
- Code completion
- Test implementation
- Reviewing specific changes
- Quick investigations

Do not use Copilot simply to repeat work already completed by Gemini.

## Resource Strategy

Copilot has a monthly AI-credit allowance.

For planning purposes, budget approximately 1,500 credits across 15 planned development days:

**1,500 ÷ 15 = 100 credits per day**

The 100-credit figure is a soft planning ceiling, not a requirement to spend 100 credits every day.

Unused credits remain available for later work.

If Copilot reaches the planned daily usage level, continue development with Gemini/Antigravity.

If Gemini/Antigravity becomes constrained by its available allowance, suitable tasks can be moved to Copilot.

Always check the current usage information provided by each CLI rather than assuming the allowance has remained unchanged.

## Task Allocation

Use this default sequence:

1. Start substantial development work with Gemini/Antigravity.
2. Use Copilot when a task is better suited to focused coding or review.
3. Do not run both agents on the same task unnecessarily.
4. If one agent reaches its practical usage limit, move suitable work to the other agent.
5. Finish the current coherent task before switching agents whenever practical.

## Handoffs

When switching agents:

- Leave the repository in a coherent working state.
- Inspect the current Git status and diff.
- Identify files changed.
- Identify what has been completed.
- Identify any remaining issue or task.

The next agent must inspect the repository state before continuing.

Do not repeatedly make each agent rediscover the entire project architecture.

The repository documentation remains the shared source of truth.

## Quota Conservation

To avoid unnecessary AI usage:

- Keep prompts focused.
- Give the agent the specific task it needs to complete.
- Do not repeatedly ask agents to analyse the entire repository.
- Reuse existing session context where possible.
- Review targeted diffs instead of repeatedly reviewing the whole project.
- Avoid unnecessary duplicate implementations.
- Use stronger models only when the task requires them.
- Do not consume AI credits simply because credits are available.

## Verification

The agent performing the implementation is responsible for verifying its own changes.

Before handing work to another agent or closing a task:

- Inspect changed files.
- Run relevant checks, tests, type checking or builds.
- Inspect `git diff`.
- Confirm that only intended files changed.
- Report any remaining limitations.

Never claim verification that was not actually performed.

## Git and Task Completion

AI agents must not create commits unless explicitly instructed.

When a development task or checkpoint is complete:

1. Verify the implementation.
2. Review the final diff.
3. Commit the completed work when instructed.
4. Push the intended branch when instructed.
5. Start the next task from a clean, known repository state where practical.

Keep commits focused and cohesive.

## Shared Authority

Both Gemini/Antigravity and GitHub Copilot must follow:

`AGENTS.md`

They must also follow the relevant project documentation under:

`docs/architecture/`

`docs/brand/`

`docs/development/`

Tool-specific instruction files may provide additional behaviour, but they must not contradict the shared project architecture or rules.
