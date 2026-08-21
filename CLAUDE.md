# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**davdav.tech** is the personal professional platform for Carlos David Duarte. The goal is not a simple portfolio — it is a long-term professional brand ecosystem positioning him as a Senior Software Engineer, Technical Lead, and emerging Solution Architect.

Full requirements are documented in `plan/website-development-contract.md` and the strategic vision in `plan/website-architecture-masterplan.md`. Read both before making architectural decisions.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.3.1 | Framework (App Router, static export) |
| React | 19.2.8 | UI |
| TypeScript | 5.x | Language |
| Tailwind CSS | 4.x | Styling |
| `@next/mdx` | 16.3.1 | MDX support for blog |
| `remark-gfm` | 4.x | GitHub Flavored Markdown in MDX |
| `rehype-pretty-code` | 0.14.x | Code syntax highlighting (blog — pending Turbopack integration) |
| Node.js (dev) | 24.13.0 | Required for build (use `nvm use 24`) |

> Note: the `.gitignore` contains Angular-specific entries from its template origin — they are harmless but unrelated to this project's stack.

## Commands

```bash
nvm use 24          # required — project uses Node 24
npm run dev         # development server (Turbopack)
npm run build       # static export → /out
npm run lint        # ESLint
```

After `npm run build`, the `/out` directory contains the full static site ready to upload via FTP.

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
    layout.tsx                # Root layout — Inter font, metadata, dark mode
    page.tsx                  # Home
    about/page.tsx
    experience/page.tsx
    expertise/page.tsx
    blog/page.tsx             # Blog listing (+ [slug]/page.tsx when built)
    contact/page.tsx
  components/
    ui/                       # Primitive components (Button, Card, etc.)
    layout/                   # Header, Footer, Nav
    sections/                 # Page-level sections (Hero, etc.)
  content/
    blog/                     # .mdx files — one per post
  lib/                        # Utilities (MDX helpers, metadata helpers)
public/
  cv/cv-carlos-duarte.pdf     # Resume for download
contact.php                   # PHP mailer — deployed to server root alongside /out
```

## Site Architecture

Pages (Phase 1):

```
Home → About → Experience → Expertise → Blog → Contact → Resume (download)
```

Requirements per page: `plan/website-development-contract.md` §5–6.

**Blog** is the primary growth engine — MDX files in `src/content/blog/`, categories: Java, Azure, DevOps, Technical Leadership, Solution Architecture.

### Known Turbopack limitation

`@next/mdx` remark/rehype plugins (functions) are not serializable under Turbopack. Current `next.config.ts` has MDX configured without plugins. When building the blog, plugins (`remark-gfm`, `rehype-pretty-code`) must be integrated via webpack config or a Turbopack-compatible alternative.

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
npm run build        # genera /out con el sitio estático
# subir contenido de /out via FTP al directorio público del hosting
```

## Phase 2 / Future Scope (do not build now)

Project portfolio, case studies, newsletter, RSS feed, i18n (EN/ES), GitHub activity integration, AI assistant.
