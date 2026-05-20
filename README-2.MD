# Nico Digitals Website

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-strict-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com)
[![Sanity](https://img.shields.io/badge/Sanity-4-F03E2F)](https://www.sanity.io)

**Nico Digitals** es una plataforma de recursos para ayudar a creadores hispanohablantes a construir su libertad financiera digital. El sitio combina contenido educativo (blog), herramientas prácticas (calculadoras, checklists) y landing pages de afiliados para productos digitales.

---

## Tabla de Contenidos

- [Tech Stack](#tech-stack)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Routing & Route Groups](#routing--route-groups)
- [CMS: Sanity](#cms-sanity)
- [Design System](#design-system)
- [Componentes](#componentes)
- [API Routes](#api-routes)
- [Getting Started](#getting-started)
- [Comandos Útiles](#comandos-útiles)
- [Landing Pages (Afiliados)](#landing-pages-afiliados)
- [SEO & Metadatos](#seo--metadatos)
- [Variables de Entorno](#variables-de-entorno)

---

## Tech Stack

| Capa | Tecnología |
|------|------------|
| **Framework** | Next.js 16 (App Router), React 19 |
| **Lenguaje** | TypeScript 5 (`strict: true`) |
| **Estilos** | Tailwind CSS v4 + CSS personalizado con variables |
| **CMS** | Sanity v4 (`next-sanity`, `@sanity/vision`) |
| **Rich Text** | `@portabletext/react` |
| **Imágenes** | `@sanity/image-url` |
| **Linter** | ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript) |
| **PostCSS** | `@tailwindcss/postcss` + `@tailwindcss/typography` |

---

## Estructura del Proyecto

```
nico-digitals-website/
├── app/                          # Next.js App Router Pages
│   ├── (landing)/                # Landing pages (sin Navbar/Footer)
│   ├── (site)/                   # Páginas principales (con Navbar + Footer)
│   ├── api/                      # API routes
│   └── studio/                   # Sanity Studio CMS
├── components/                   # Componentes reutilizables
│   ├── blog/                     # PortableTextRenderer
│   ├── landing/                  # CountdownBar, SocialProof, SubscribeSection
│   ├── layout/                   # Navbar, Footer
│   └── recursos/                 # ResourceGrid
├── sanity/                       # Configuración de Sanity CMS
│   ├── schemaTypes/              # post, tag, resource schemas
│   ├── lib/                      # client, image, live helpers
│   ├── queries.ts                # GROQ queries
│   └── structure.ts              # Studio sidebar structure
├── public/                       # Assets estáticos
├── types/                        # TypeScript types (blog.ts)
├── .env.local                    # Variables de entorno (no versionado)
├── AGENTS.md                     # Instrucciones para agentes IA
├── next.config.ts                # Next.js config
├── eslint.config.mjs             # ESLint 9 flat config
├── tailwind.config.ts            # (Tailwind v4 usa CSS-first config)
└── tsconfig.json                 # TypeScript strict
```

---

## Routing & Route Groups

El proyecto usa **Route Groups** de Next.js App Router para separar layouts:

### `app/(landing)/` — Landing Pages

Sin Navbar ni Footer. Layout mínimo (`{children}`). Ideal para páginas de venta / afiliados.

| Ruta | Propósito |
|------|-----------|
| `/mi-pastorcito-feliz` | Landing page B2C — producto digital "Mi Pastorcito Feliz" |
| `/afiliados-mi-pastorcito` | Landing page B2B — programa de afiliados |

Cada landing usa un patrón **content/page split**: `content.ts` contiene los datos del producto (hero, features, precios, testimonios) y `page.tsx` contiene la plantilla de renderizado.

### `app/(site)/` — Páginas Principales

Layout compartido con **Navbar** (fijo, responsive) + **Footer** (3 columnas).

| Ruta | Propósito |
|------|-----------|
| `/` | Homepage: Hero + About + What You Find + Latest Posts + CTA |
| `/blog` | Blog index (lista de posts desde Sanity) |
| `/blog/[slug]` | Artículo individual (Portable Text) |
| `/recursos` | Catálogo de recursos filtrable |
| `/recursos/calculadora` | Calculadora interactiva "Costo de Inacción" |
| `/recursos/sistema-edicion` | Checklist "Sistema de Edición" |

### `app/api/` — API Routes

| Ruta | Propósito |
|------|-----------|
| `/api/revalidate` | Webhook para revalidación ISR desde Sanity |
| `/api/subscribe` | Suscripción a newsletter vía Mailchimp |

### `app/studio/` — Sanity Studio

Montado en `/studio`. Usa `sanity.config.ts` con `basePath: '/studio'`.

---

## CMS: Sanity

### Documentos

| Schema | Campos Principales |
|--------|-------------------|
| **post** | title, slug, description, publishedAt, tags (array reference), body (Portable Text) |
| **tag** | title, slug |
| **resource** | title, slug, description, image, category, url, external, pinned, publishedAt |

### GROQ Queries (`sanity/queries.ts`)

- `ALL_RESOURCES_QUERY` — Todos los recursos, ordenados por pinned + fecha
- `ALL_POSTS_QUERY` — Todos los posts con sus tags
- `POST_BY_SLUG_QUERY` — Post individual por slug (con body rich text)
- `ALL_POST_SLUGS_QUERY` — Slugs para generación de rutas estáticas
- `RESOURCES_BY_CATEGORY_QUERY` — Recursos filtrados por categoría

### Live Content

Usa `sanity/lib/live.ts` con `defineLive()` para actualizaciones en tiempo real en el frontend.

---

## Design System

### Colores (CSS Custom Properties)

| Variable | Valor | Uso |
|----------|-------|-----|
| `--bg-dark` | `#1b1b1b` | Fondos oscuros |
| `--bg-mid` | `#242424` | Fondos intermedios |
| `--bg-light` | `#f6f0eb` | Fondos claros |
| `--gold` | `#d4af37` | Principal dorado |
| `--gold-light` | `#d4b87a` | Dorado claro (hover) |
| `--text-light` | `#b2b2b2` | Texto secundario |
| `--text-dark` | `#1b1b1b` | Texto en fondos claros |
| `--text-white` | `#f0ece6` | Texto en fondos oscuros |

### Tipografía

- **Headings**: Plus Jakarta Sans (pesos 300–800)
- **Body**: Poppins (pesos 300–600)
- Importadas vía Google Fonts en `app/globals.css`

### Secciones

Las secciones alternan entre `bg-mid-section` (fondo oscuro) y `bg-light-section` (fondo claro) con colores de texto que se ajustan automáticamente.

### Botones

- `.btn-primary` — Fondo dorado con hover brillante
- `.btn-outline` — Borde dorado sobre fondo oscuro

### Animaciones

- `@keyframes fadeUp` con clases `.fade-up`, `.fade-up-1` a `.fade-up-4` para efectos escalonados

---

## Componentes

### Layout (`components/layout/`)

| Componente | Tipo | Descripción |
|------------|------|-------------|
| **Navbar** | Client | Barra fija con glassmorphism, logo "Nico Digitals", menú desktop/mobile, CTA button |
| **Footer** | Client | 3 columnas: descripción + navegación + redes sociales, affiliate disclaimer |

### Landing (`components/landing/`)

| Componente | Tipo | Descripción |
|------------|------|-------------|
| **CountdownBar** | Client | Barra de cuenta regresiva de 1 hora (usa sessionStorage para persistencia) |
| **SocialProof** | Server | Sección de testimonios con garantía |
| **SubscribeSection** | Client | Formulario de suscripción email (Mailchimp) |

### Blog (`components/blog/`)

| Componente | Tipo | Descripción |
|------------|------|-------------|
| **PortableTextRenderer** | Client | Renderiza блоки Portable Text de Sanity con estilos personalizados |

### Recursos (`components/recursos/`)

| Componente | Tipo | Descripción |
|------------|------|-------------|
| **ResourceGrid** | Client | Grid de tarjetas filtrable por categoría |

---

## API Routes

### `POST /api/revalidate`

Endpoint para webhooks de Sanity. Recibe un `slug` en el body y revalida la ruta correspondiente usando `revalidateTag` de Next.js.

### `POST /api/subscribe`

Endpoint para suscripción a newsletter. Recibe email y envía a Mailchimp vía su API. Retorna `{ success: boolean, message: string }`.

---

## Getting Started

### Prerrequisitos

- Node.js 18+ (recomendado 22+)
- Cuenta de Sanity.io (opcional para desarrollo local)

### Instalación

```bash
git clone <repo-url>
cd nico-digitals-website
npm install
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
MAILCHIMP_API_KEY=tu_api_key
MAILCHIMP_LIST_ID=tu_list_id
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para Sanity Studio, ve a [http://localhost:3000/studio](http://localhost:3000/studio) o ejecuta:

```bash
npx sanity start
```

---

## Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo (Next.js) |
| `npm run build` | Build de producción (TypeScript + Next.js) |
| `npm run lint` | ESLint con reglas de Tailwind |
| `npx sanity start` | Inicia Sanity Studio standalone |
| `npx sanity deploy` | Despliega Sanity Studio a Sanity host |

---

## Landing Pages (Afiliados)

Las landing pages siguen un patrón **content/template**:

1. **`content.ts`** — Exporta un objeto `product` con toda la data del producto:
   - `name`, `headline`, `subheadline`
   - `hero` (imágenes, video)
   - `features` (grid de beneficios)
   - `pricing` (planes, garantía)
   - `testimonials` (social proof)
   - `cta` (call to action)
   - `affiliate` (enlaces de afiliado)

2. **`page.tsx`** — Exporta el componente de página que renderiza secciones:
   - **Hero** — Imagen principal + headline + CTA
   - **Features** — Grid de beneficios con iconos
   - **Pricing** — Tarjetas de precios
   - **Social Proof** — Testimonios + garantía
   - **Countdown Bar** — Urgencia (opcional, client-side)
   - **CTA Final** — Call to action con subscribe form
   - **Footer Disclaimer** — Aviso de afiliado

Para crear una nueva landing, copia `app/(landing)/mi-pastorcito-feliz/` a `app/(landing)/nuevo-producto/` y edita `content.ts`.

---

## SEO & Metadatos

El proyecto usa la API de `Metadata` de Next.js para SEO.

| Archivo | Propósito |
|---------|-----------|
| `app/layout.tsx` | Metadata global (title template, description, keywords, OpenGraph, Twitter Card, robots) |
| `app/(site)/recursos/layout.tsx` | Metadata específica de Recursos |
| `app/sitemap.ts` | Sitemap dinámico con `/` y `/blog` |
| `app/robots.ts` | Configuración de robots.txt |
| `public/google6ea98e2beded6f36.html` | Verificación de Google Search Console |

---

## Variables de Entorno

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sí | ID del proyecto en Sanity.io |
| `NEXT_PUBLIC_SANITY_DATASET` | Sí | Nombre del dataset (ej: `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No | Versión de la API de Sanity |
| `MAILCHIMP_API_KEY` | Para `/api/subscribe` | API key de Mailchimp |
| `MAILCHIMP_LIST_ID` | Para `/api/subscribe` | ID de la audiencia en Mailchimp |

---

## Licencia

Apache 2.0. Este es un proyecto de Nico Digitals.