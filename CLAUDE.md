# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**davdav.tech** is the personal professional platform for Carlos David Duarte. The goal is not a simple portfolio — it is a long-term professional brand ecosystem positioning him as a Senior Software Engineer, Technical Lead, and emerging Solution Architect.

Full requirements are documented in `plan/contracts/website-development-contract.md` and the strategic vision in `plan/strategy/architecture-masterplan-v2.md`. Brand identity and photography requirements are in `plan/contracts/personal-brand-contract-v2.md`. Read all three before making architectural or content decisions. See `plan/README.md` for the full directory index.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.3.1 | Framework (App Router, static export) |
| React | 19.2.8 | UI |
| TypeScript | 5.x | Language |
| Tailwind CSS | 4.x | Styling |
| `@next/mdx` | 16.3.1 | MDX config (kept minimal — no plugins, avoids Turbopack serialization issue) |
| `next-mdx-remote/rsc` | 5.x | MDX rendering in blog — plugins passed directly to component |
| `gray-matter` | 4.x | Frontmatter parsing for blog posts |
| `remark-gfm` | 4.x | GitHub Flavored Markdown — passed via `MDXRemote` options, not next.config.ts |
| Node.js (dev) | 24.13.0 | Required for build (use `nvm use 24`) |

## Commands

Use the scripts in `scripts/` — they handle `nvm use 24` automatically:

```bash
bash scripts/build.sh   # production build → /out (static export)
bash scripts/dev.sh     # development server (Turbopack, http://localhost:3000)
```

For one-off commands that require Node 24:

```bash
source ~/.nvm/nvm.sh && nvm use 24 && npm run lint
```

After `bash scripts/build.sh`, the `/out` directory contains the full static site ready to upload via FTP.

## Design System

**Typography:** Inter (primary), Segoe UI (fallback)

**Color Palette:**

| Token | Hex |
|---|---|
| Azure Blue (primary) | `#0078D4` |
| Dark Slate (background) | `#0F172A` |
| White | `#FFFFFF` |
| Light Gray | `#E2E8F0` |
| Accent Blue | `#38BDF8` |

**Design character:** Professional, modern, minimalist. Inspiration: Microsoft Learn, Azure Architecture Center, GitHub, Stripe, Linear.

Dark mode is required.

## Project Structure

```
src/
  app/                        # Next.js App Router pages
    layout.tsx                # Root layout — Inter font, metadata, JSON-LD Person, dark mode
    page.tsx                  # Home
    about/page.tsx
    experience/page.tsx
    education/page.tsx
    certifications/page.tsx
    expertise/page.tsx
    blog/page.tsx             # Blog listing with client-side category filter
    blog/[slug]/page.tsx      # Individual post — MDXRemote + remark-gfm
    contact/page.tsx
    sitemap.ts                # Dynamic sitemap (static routes + blog posts)
    robots.ts                 # robots.txt
    opengraph-image.tsx       # Global OG image 1200×630 (ImageResponse)
  components/
    ui/                       # Primitive components (Button, Card, BlogCard, ContactForm, etc.)
    layout/                   # Header, Footer, Nav
    sections/                 # Page-level sections (Hero, BlogFilter, etc.)
  content/
    blog/                     # .mdx files — one per post (frontmatter: title, date, category, excerpt, published)
  lib/
    mdx.ts                    # getAllPosts() / getPostBySlug() — gray-matter + fs
public/
  cv/cv-carlos-duarte.pdf     # Resume for download
  brand/                      # Brand image library (A01–A07) — Phase 11
    a01-hero.jpg              # Hero Portrait → Homepage Hero, LinkedIn, Resume
    a02-cloud-architecture.jpg # Cloud & Architecture → Architecture page
    a03-technical-leadership.jpg # Technical Leadership → About page
    a04-thought-leadership.jpg # Thought Leadership Portrait → Blog headers
    a05-engineering-workspace.jpg # Engineering Workspace → Java articles
    a06-conference-speaker.jpg # Conference Speaker → Events
    a07-executive-profile.jpg # Executive Profile → Advisory services
    profile-square.png        # Square profile photo (neutral gray background)
img/
  brand/                      # Source images (originals) — do not serve directly
  profile/                    # Source profile photos (400×400, 800×800)
cv/
  cv-carlos-duarte.md         # CV source (Markdown) — fuente de verdad
  cv-carlos-duarte.pdf        # CV source (PDF)
  linkedin/
    aptitudes.md              # LinkedIn skills snapshot
    certifications.md         # LinkedIn certifications snapshot
scripts/
  build.sh                    # build script (handles nvm use 24 + npm run build)
  dev.sh                      # dev server script (handles nvm use 24 + npm run dev)
contact.php                   # PHP mailer — deploy to server root alongside /out + vendor/
plan/
  README.md                   # Directory index
  strategy/
    digital-brand-blueprint-v1.1.md      # Consolidated strategic blueprint
    architecture-masterplan-v2.md        # Current masterplan ★
    architecture-masterplan-v1.md        # Original (superseded)
  contracts/
    website-development-contract.md      # SRS — requirements, scope, deliverables
    personal-brand-contract-v2.md        # Brand identity, photography, email ★
    personal-brand-contract-v1.md        # Original (superseded)
  recommendations/
    development-recommendations-v1.md    # Strategic & technical recommendations
  execution/
    development-plan.md                  # 13-phase plan (v1.2) — active
    progress-report-2026-08-22.md        # Pre-production status report
```

## Site Architecture

Pages (Phase 1 scope, per SRS §5):

```
Home → About → Experience → Education → Certifications → Expertise → Blog → Contact
```

Resume is a PDF download (`/cv/cv-carlos-duarte.pdf`), not a separate page.

Requirements per page: `plan/contracts/website-development-contract.md` §5–6.

**Blog** is the primary growth engine — MDX files in `src/content/blog/`, categories: Java, Azure, DevOps, Technical Leadership, Solution Architecture.

### Turbopack + MDX — resolved

`@next/mdx` remark/rehype plugins are not serializable under Turbopack. **Solution in use:** `next-mdx-remote/rsc` renders MDX as a React Server Component. Plugins (`remark-gfm`) are passed directly to the `<MDXRemote options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />` component — this runs at build time (Node.js, not Turbopack) so there is no serialization issue. `next.config.ts` keeps `createMDX({})` with no plugins.

## Performance & Quality Targets

- Lighthouse score ≥ 90 across all categories
- Fully responsive (mobile-first)
- Accessibility compliant

## Content & Confidentiality

- `cv/cv-carlos-duarte.pdf` is the current resume — link to it for the Resume download CTA
- All draft content, planning documents, and credentials are confidential — never expose them publicly
- All generated code and content is the exclusive property of Carlos David Duarte

## Infrastructure

| Componente | Detalle |
|---|---|
| Hosting | HostGator Mexico — shared hosting (cPanel/Apache) |
| Dominio | davdav.tech — ya registrado y activo |
| Email | david.duarte@davdav.tech |

### Implicación para el deployment

HostGator shared hosting no soporta Node.js nativo. Next.js debe configurarse con **`output: 'export'`** para generar un sitio completamente estático (HTML/CSS/JS) que se sube al hosting via FTP/cPanel.

Consecuencias directas:
- No hay API Routes de Next.js — el contact form se maneja con `contact.php` (PHPMailer + SMTP de HostGator) desplegado junto a los archivos estáticos; el form hace `fetch POST /contact.php`
- Cada actualización de contenido (nuevo post, edición) requiere rebuild local + re-upload via FTP
- Sin ISR — todo se genera en build time

### Deploy workflow

```bash
bash scripts/build.sh
# 1. Subir contenido de /out via FTP al directorio público del hosting
# 2. Subir contact.php a la raíz del servidor
# 3. En HostGator (primera vez): composer require phpmailer/phpmailer
```

## Current Phase Status

Phases 0–10 ✅ complete. Phase 11 in progress:
- **Phase 11** — Marca Personal ⏳ — images copied to `public/brand/`, A01 integrated in Hero, A03 integrated in About. Tasks 11.4–11.8 are Phase 2 scope.
- **Phase 12** — QA & Verificación (cv/linkedin vs site, cross-browser, Lighthouse ≥ 90)
- **Phase 13** — Polish & Deploy (favicon, 404, build final, FTP)

Brand images: `public/brand/a01-hero.jpg` through `a07-executive-profile.jpg`. Source originals in `img/brand/` (do not serve directly).

See `plan/execution/development-plan.md` for full task breakdown.

## Future Scope — Phase 2+ (do not build now)

Project portfolio, case studies, newsletter, RSS feed, i18n (EN/ES), GitHub activity integration, AI assistant.
