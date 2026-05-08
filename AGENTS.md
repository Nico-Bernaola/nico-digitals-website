# AGENTS.md
## Purpose
This file documents how coding agents should operate in this repository so changes are consistent, safe, and easy to review.

## Project snapshot
- Framework: Next.js 16 (App Router) + React 19 + TypeScript (`strict: true`)
- Styling/tooling: Tailwind CSS 4, ESLint 9 (`eslint-config-next`)
- CMS: Sanity Studio mounted at `/studio`
- Key environment requirements (from `sanity/env.ts`):
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - Optional: `NEXT_PUBLIC_SANITY_API_VERSION`

## Repo areas
- `app/`: routes, layouts, metadata routes, API routes, Sanity Studio route
- `components/`: shared React components
- `sanity/`: schema types, queries, structure, and Sanity helpers
- `public/`: static assets
- Root config: `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`

## Standard agent workflow
1. Clarify task scope, acceptance criteria, and constraints before editing files.
2. Run preflight checks:
   - Confirm working tree state is understood (avoid mixing unrelated changes).
   - Confirm required environment context for the touched area is available.
3. Perform an impact scan of dependent areas before implementation (for example: schema → queries → UI consumers).
4. Implement the smallest viable change that solves the issue and stays aligned with existing patterns.
5. Validate with tiered checks before handoff:
   - Always run: `npm run lint`
   - Run `npm run build` for route/config/schema changes or when impact is broad.
   - Run targeted smoke checks for touched features (for example, verify `/studio` for Sanity-related work).
6. Handoff with a concise summary, validation results, and any assumptions, risks, or follow-ups.

## Implementation guardrails
- Prefer Server Components by default in `app/`; add `'use client'` only when needed.
- Preserve TypeScript strictness; avoid `any` unless unavoidable and justified.
- Do not introduce new dependencies unless required by the task.
- Keep edits scoped; avoid drive-by refactors unless requested.
- Never commit secrets or environment values; do not modify `.env.local` unless explicitly asked.

## Sanity-related changes
When changing CMS-driven features:
1. Update schema definitions in `sanity/schemaTypes/` as needed.
2. Update GROQ queries in `sanity/queries.ts` (or related helpers).
3. Confirm Studio behavior under `/studio` when relevant.
4. Ensure frontend consumers in `app/` and `components/` handle updated fields safely.

## SEO and metadata changes
If the task affects discoverability/indexing:
- Review route metadata usage in `app/layout.tsx` and route-level metadata.
- Check `app/robots.ts` and `app/sitemap.ts` if URL/indexing behavior changes.

## Handoff expectations
- Provide concise change summary.
- Include validation commands run and outcomes.
- Call out assumptions, risks, or missing context.
- Do not create commits or branches unless explicitly requested.
