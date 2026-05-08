# AGENTS.md
## Purpose
This file records concise, actionable advice for agents working in this repository. Only include statements that a competent agent would otherwise miss without guidance.

## Project Snapshot
- Framework: Next.js 16 (App Router) + React 19 + TypeScript `strict: true`
- Styling: Tailwind CSS 4, ESLint 9 (`eslint-config-next`)
- CMS: Sanity Studio mounted at `/studio`
- Key env vars (defined in `.env.local`):
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - Optional: `NEXT_PUBLIC_SANITY_API_VERSION`

## Core Directories
- `app/`: All page, layout, metadata, API, and Studio routes.
- `components/`: Shared React components.
- `sanity/`: Schema types, queries, structure and helpers.
- `public/`: Static assets.
- Root configs: `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`.

## Typical Development Workflow
1. Clone and install dependencies with `npm install`.
2. Use `npm run dev` to start the Next.js dev server on `localhost:3000`.
3. For Sanity Studio, run `npx sanity start` (provided the env vars are set).
4. Make changes. Commit only what you added or modified.
5. Before pushing, lint: `npm run lint`.
6. If the change touches routes, config, or Sanity schemas, run `npm run build` to ensure everything types‑checks and compiles.

## Sanity‑Specific Notes
- Schema changes live in `sanity/schemaTypes/`.
- GROQ queries are defined in `sanity/queries.ts`.
- After updating a schema or query, test Studio under `/studio`.
- Front‑end components that consume Sanity data may need to update to match new fields.

## Build / Lint
- `npm run lint` → ESLint with Tailwind rules.
- `npm run build` → Full Next.js build; checks TypeScript via Next.
- No separate `test` script; run scenario checks manually or via browser.

## Other Reminders
- Environment variables reside in `.env.local` and should never be committed.
- The project does not use a monorepo‑style package boundary.
- No automatic formatting is required; all files already follow the repository style.
- When creating new components, default to server‑components unless user explicitly requests client logic.

## Design System Checklist
- **Global CSS**: Replace `app/globals.css` entirely with the provided file. It must contain brand tokens, fonts, base classes, and animations.
- **Root Layout** (`app/layout.tsx`): Should only hold global styles and metadata.
  ```tsx
  import type { Metadata } from 'next';
  import './globals.css';
  export const metadata: Metadata = {
    title: { default: 'Nico Digitals', template: '%s — Nico Digitals' },
    description: 'Recursos para construir tu libertad financiera digital.',
  };
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (<html lang="es"><body>{children}</body></html>);
  }
  ```
- **Route Group Structure**
  - `app/(site)/` contains shared layout (Navbar + Footer) and app pages.
  - `app/(landing)/` contains landing pages without Navbar/Footer.
  - Move existing `app/blog` into `app/(site)/blog` and keep `app/api` at the root.
- **New Components**: Add `components/layout/Navbar.tsx` and `Footer.tsx` from the supplied templates.
- **Landing Pages**: For each new affiliate landing, copy `TEMPLATE-landing.tsx` to `app/(landing)/product-name/page.tsx` and edit the `product` object at the top.
- **Color Palette**: Use CSS variables in `globals.css`:
  - `--bg-dark: #1b1b1b`
  - `--bg-light: #f6f0eb`
  - `--gold: #bfa159`
  - `--gold-light: #d4b87a`
  - `--text-light: #b2b2b2`
  - `--text-dark: #1b1b1b`
  - `--text-white: #f0ece6`
- **Typography**: Import Plus Jakarta Sans (Headings 600–800, Logo 800) and Poppins (Body 300–500). If CY Grotesk Grand is licensed, replace the import in `globals.css` with an `@font-face`.
- **Section Pattern**: Alternate `--bg-dark` and `--bg-light` (`.bg-light-section` for the light sections) across Hero, Features, CTA, etc.
