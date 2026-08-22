# Technical Progress Report — davdav.tech

**Date:** 2026-08-22  
**Project:** davdav.tech — Personal Professional Brand Platform  
**Owner:** Carlos David Duarte  
**Evaluator:** Technical Review  
**Status:** Pre-production · Phase 12 QA in progress · Phase 13 pending

---

## 1. Executive Summary

**davdav.tech** is a personal professional brand platform positioned for a Senior Software Engineer / Technical Lead transitioning toward Solution Architecture roles. Built as a fully static Next.js site (App Router, static export) deployed to HostGator shared hosting via FTP.

**11 of 13 phases complete.** The remaining work (Phase 12: Lighthouse audit, mobile images, email verification; Phase 13: favicon, 404 page, FTP deploy) is cosmetic and operational — no architectural blockers.

| Metric | Value |
|---|---|
| Phases completed | 11 / 13 |
| Git commits | 46 |
| Source files (.tsx / .ts) | 33 |
| React components | 18 |
| Pages | 9 (8 routes + home) |
| Lines of source code | ~3,010 |
| Blog posts | 1 (engine fully functional) |
| Brand images deployed | 8 |
| Certifications on site | 13 (all with public verify URLs) |
| Development window | 2026-08-20 → 2026-08-22 |

---

## 2. Tech Stack

| Technology | Version | Role |
|---|---|---|
| Next.js | 16.3.1 | Framework — App Router, static export (`output: 'export'`) |
| React | 19.2.8 | UI |
| TypeScript | 5.x | Language |
| Tailwind CSS | 4.x | Utility-first styling |
| `@next/mdx` | 16.3.1 | MDX config — minimal, no plugins (Turbopack constraint) |
| `next-mdx-remote/rsc` | 5.x | MDX rendering as React Server Component at build time |
| `gray-matter` | 4.x | Frontmatter parsing for blog posts |
| `remark-gfm` | 4.x | GitHub Flavored Markdown — passed directly to `MDXRemote` |
| Node.js | 24.13.0 | Build environment (`nvm use 24`) |

**Deployment target:** HostGator Mexico — shared hosting (cPanel/Apache). No server-side Node.js. Contact form handled by `contact.php` (PHPMailer + HostGator SMTP). Full static HTML/CSS/JS output in `/out`.

---

## 3. Architecture

### 3.1 Site Structure

```
src/
  app/                        # Next.js App Router
    layout.tsx                # Root layout — Inter, metadata, JSON-LD Person, dark mode
    page.tsx                  # Home
    about/page.tsx
    experience/page.tsx
    education/page.tsx
    certifications/page.tsx
    expertise/page.tsx
    blog/page.tsx             # Listing + client-side category filter
    blog/[slug]/page.tsx      # Individual post — MDXRemote + remark-gfm
    contact/page.tsx
    sitemap.ts                # Dynamic — static routes + blog posts
    robots.ts
    opengraph-image.tsx       # Global OG 1200×630 (ImageResponse)
  components/
    ui/                       # Button, Card, BlogCard, Badge, CertificationCard,
                              # ContactForm, SectionHeader, Container, ExperienceCard,
                              # EducationCard, BlogPostLayout, DarkModeToggle
    layout/                   # Header, Footer, MobileDrawer
    sections/                 # HeroSection, HighlightsSection, FeaturedBlogSection,
                              # BlogFilter
  content/blog/               # .mdx files — frontmatter: title, date, category, excerpt, published
  lib/
    mdx.ts                    # getAllPosts() / getPostBySlug() — gray-matter + fs
```

### 3.2 Design System

| Token | Value |
|---|---|
| Primary (Azure Blue) | `#0078D4` |
| Background (Dark Slate) | `#0F172A` |
| White | `#FFFFFF` |
| Light Gray | `#E2E8F0` |
| Accent Blue | `#38BDF8` |

Typography: Inter (primary) via `next/font/google`. Dark mode required — implemented via CSS custom properties and `data-theme` attribute.

---

## 4. Phase-by-Phase Progress

### Phase 0 — Foundation ✅
Next.js scaffold with App Router, TypeScript, Tailwind CSS 4, static export config (`output: 'export'`, `trailingSlash: true`), MDX dependencies, design system tokens, global CSS, project structure, `.gitignore`, `README.md`, `CLAUDE.md`.

### Phase 1 — Layout & Navigation ✅
- `Header` — logo, nav links, dark mode toggle, mobile hamburger
- `Footer` — social links (LinkedIn, GitHub), email, copyright
- `MobileDrawer` — slide-in menu for small screens
- Dark mode toggle — persists to `localStorage`; React 19 hydration handled via `useState(false)` + `useEffect` (no lazy initializer)
- **Nav active state** — resolved with `.nav-active` CSS class (`rgba(0,120,212,0.10)`) due to Tailwind v4 limitation (cannot apply `/10` opacity modifier to `var()` values). `usePathname()` output normalized (`replace(/\/$/, "")`) to handle `trailingSlash: true`. `isActive()` uses `startsWith(href + "/")` for child route matching.

### Phase 2 — Home Page ✅
- `HeroSection` — name, title, description, 4 CTAs: View Resume (external PDF), LinkedIn, GitHub, Contact Me
- `HighlightsSection` — 4 pillars: Enterprise Software Engineering, Technical Leadership, Cloud & DevOps, Application Ownership
- `FeaturedBlogSection` — displays 3 most recent published posts from MDX engine
- Full SEO metadata, OG image

### Phase 3 — About Page ✅
- Professional summary (3 paragraphs)
- Leadership philosophy — 3 pillars with icons (Lucide)
- Technical expertise grid — 4 domains with `Badge` components
- Career progression timeline — 5 entries
- Architecture aspirations CTA section
- Brand image A07 (executive profile) integrated — desktop only (`hidden lg:block`)
- Physical location: Guadalajara, México (MapPin icon)

### Phase 4 — Experience Page ✅
- 9 professional roles — Zurich Insurance (2 positions), Coppel, Entrepreneur, Sierra Metals, and 4 earlier roles
- `ExperienceCard` — company, role, period, description, tech stack badges
- Zurich: Remote · México mode displayed
- Full career history from 2009 to present

### Phase 5 — Education Page ✅
- 5 formal degrees (2 Master's, 1 Bachelor, 1 Engineer's, 1 Technical High School)
- Both Master's completed March 2026, official degrees in processing
- 3 complementary programs (language courses)
- Grid layout `sm:grid-cols-2` — balanced for 4+ items
- React key conflict resolved: `key={\`${institution}-${period}\`}` (two UACH entries)
- ITC II and CBTis 122 added from LinkedIn source

### Phase 6 — Certifications Page ✅
- `CertificationCard` with `credentialUrl` prop → "Verify →" external link
- 13 EARNED certifications with public verification URLs:
  - Credly (IBM badges): 7 certs
  - LinkedIn Learning certificates: 2 certs
  - UNIR Verifirma: 2 diplomas
  - IBM CognitiveClass: 1 cert
  - Voxy/FrancPlus: 1 cert
- Organized by category: Cloud, DevOps, Data & AI, Security, AI/ML, Language
- Roadmap section: AZ-900, AZ-204, AZ-305, Oracle Java OCP

### Phase 7 — Expertise Page ✅
- 4 expertise domains with detailed skill breakdowns
- Software Engineering, Cloud & DevOps, Architecture, Technical Leadership
- `Badge` components for each skill
- Page-level SEO

### Phase 8 — Blog Engine ✅
- MDX pipeline: `next-mdx-remote/rsc` renders server-side; `remark-gfm` passed directly to `<MDXRemote options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />` — avoids Turbopack serialization error
- `getAllPosts()` / `getPostBySlug()` — `gray-matter` + `fs` (build-time only)
- `generateStaticParams` for all published posts
- Client-side category filter (`BlogFilter` client component) — hydration-safe
- Author byline with avatar (`profile-square.png`) in post header
- 1 functional post; engine ready for new MDX files

### Phase 9 — Contact Page + PHP Mailer ✅
- `ContactForm` — Name, Email, Company, Message; client-side validation; fetch POST to `/contact.php`
- Honeypot anti-spam field
- `contact.php` — PHPMailer + HostGator SMTP, credentials via `getenv('SMTP_PASSWORD')` (never hardcoded)
- Contact info panel — Email, LinkedIn, Location (Guadalajara, México); null-href location handled with `<div>` instead of `<a>`
- Availability badge with `animate-pulse` indicator

### Phase 10 — SEO & Performance ✅
- `sitemap.ts` — all static routes + blog posts dynamically generated
- `robots.ts` — allow all, sitemap reference
- `opengraph-image.tsx` — 1200×630 global OG image (Next.js `ImageResponse`)
- Schema.org JSON-LD `Person` schema in root layout via `next/script strategy="beforeInteractive"`
- `<link rel="canonical">` on all pages
- TypeScript strict mode throughout

### Phase 11 — Marca Personal ✅ (Phase 1 scope)
- 8 brand images deployed to `public/brand/` (A01–A07 + `profile-square.png`)
- A01 (`a01-hero.jpg`) integrated in Hero section — 2-column desktop layout, right column
- A07 (`a07-executive-profile.jpg`) integrated in About page — A03 discarded (AI artifact visible in image)
- A04–A06 deferred to Phase 2 (blog headers, speaker, advisory)

### Phase 12 — QA & Verificación (4/8 complete)

| Task | Status | Notes |
|---|---|---|
| 12.1 CV/LinkedIn vs site audit | ✅ Done | 5→13 certs, ITC II + CBTis 122 added, Zurich Remote·MX, all verify URLs |
| 12.2 Visual QA — navigation | ✅ Done | Nav active state, trailing slash, child routes, cursor-pointer |
| 12.3 Visual QA — console errors | ✅ Done | RSC prefetch 404, React hydration, JSON-LD script tag |
| 12.4 Visual QA — blog/contact/expertise | ✅ Done | All items verified in code |
| 12.5 Cross-browser testing | ⏳ Pending | Chrome, Firefox, Safari, Edge |
| 12.6 Mobile QA + images | ⏳ Pending | Hero/About images `hidden lg:block` — mobile decision pending |
| 12.7 Lighthouse audit | ⏳ Pending | Target ≥ 90 all categories |
| 12.8 PHP email verification | ⏳ Pending | Requires live HostGator deploy |

### Phase 13 — Polish & Deploy (0/6 complete)

| Task | Status |
|---|---|
| 13.1 Favicon + apple-touch-icon | ⏳ Pending |
| 13.2 `not-found.tsx` (404 page) | ⏳ Pending |
| 13.3 `npm run build` final + verify `/out` | ⏳ Pending |
| 13.4 PHPMailer Composer setup on HostGator | ⏳ Pending |
| 13.5 FTP deploy — `/out` + `contact.php` + `vendor/` | ⏳ Pending |
| 13.6 Production verification — all routes on davdav.tech | ⏳ Pending |

---

## 5. Key Technical Decisions & Resolved Issues

### 5.1 MDX + Turbopack Serialization
**Problem:** `@next/mdx` remark/rehype plugins are not serializable under Turbopack.  
**Solution:** `next-mdx-remote/rsc` renders MDX as a React Server Component at build time. `remark-gfm` is passed directly to the `<MDXRemote options>` prop — runs in the Node.js build process, not Turbopack's serialization pipeline. `next.config.ts` keeps `createMDX({})` with no plugins.

### 5.2 Tailwind v4 + CSS Custom Properties Opacity
**Problem:** `bg-[var(--color-primary)]/10` generates no background — Tailwind v4 cannot apply `/N` opacity modifiers to `var()` values at build time.  
**Solution:** Explicit `.nav-active` class in `globals.css` using `rgba(0, 120, 212, 0.10)` directly.

### 5.3 `trailingSlash: true` + Active Nav State
**Problem:** `usePathname()` returns `/about/` but nav hrefs are `/about` — comparison always fails.  
**Solution:** Normalize pathname before comparison: `rawPathname.length > 1 ? rawPathname.replace(/\/$/, "") : rawPathname`. Child routes handled with `startsWith(href + "/")`.

### 5.4 RSC Prefetch 404 on PDF Download
**Problem:** `Button` component used `<Link>` for all hrefs, causing Next.js to attempt RSC prefetch on `cv-carlos-duarte.pdf`, generating 404 errors in the console.  
**Solution:** `Button` checks `external` prop — uses native `<a>` tag (no prefetch) for external and file hrefs; `<Link>` only for internal routes.

### 5.5 React 19 Hydration — DarkModeToggle
**Problem:** `useState(() => localStorage.getItem(...))` lazy initializer runs server-side where `localStorage` is undefined → hydration mismatch.  
**Solution:** `useState(false)` + `useEffect` to read `localStorage` after mount.

### 5.6 React Key Conflict — Education
**Problem:** Two Universidad Autónoma de Chihuahua entries in the degrees array caused React key collision when using `key={d.institution}`.  
**Solution:** `key={\`${d.institution}-${d.period}\`}`.

### 5.7 Contact Location Card (null href)
**Problem:** `link.href.startsWith("http")` throws when `href: null` (location entry has no link).  
**Solution:** Conditional render — `link.href ? <a>...</a> : <div>...</div>`.

### 5.8 JSON-LD Person Schema
Implemented via `next/script strategy="beforeInteractive"` in root layout to avoid React hydration warnings from `<script>` tags rendered as direct children of `<head>`.

---

## 6. Content Status

### Pages

| Page | Content | SEO | OG Image |
|---|---|---|---|
| Home | ✅ | ✅ | ✅ |
| About | ✅ | ✅ | ✅ |
| Experience | ✅ (9 roles) | ✅ | ✅ |
| Education | ✅ (5 degrees + 3 complementary) | ✅ | ✅ |
| Certifications | ✅ (13 earned + roadmap) | ✅ | ✅ |
| Expertise | ✅ | ✅ | ✅ |
| Blog | ✅ (engine + 1 post) | ✅ | ✅ |
| Contact | ✅ | ✅ | ✅ |

### Source Documents

| File | Purpose | Status |
|---|---|---|
| `cv/cv-carlos-duarte.md` | Master CV | ✅ Current |
| `cv/profile.md` | Consolidated profile (all sources) | ✅ Generated 2026-08-22 |
| `cv/linkedin/header.md` | LinkedIn header snapshot | ✅ Aug 2026 |
| `cv/linkedin/about.md` | LinkedIn About snapshot | ✅ Aug 2026 |
| `cv/linkedin/experience.md` | LinkedIn experience snapshot | ✅ Aug 2026 (9 roles) |
| `cv/linkedin/education.md` | LinkedIn education snapshot | ✅ Aug 2026 |
| `cv/linkedin/certifications.md` | LinkedIn certifications snapshot | ✅ Aug 2026 (13 certs) |
| `cv/linkedin/aptitudes.md` | LinkedIn skills snapshot | ✅ Aug 2026 |
| `public/cv/cv-carlos-duarte.pdf` | PDF resume for download | ✅ |

---

## 7. Pending Items Before Production

### Blockers (must complete before launch)
1. **Favicon** — `favicon.ico` and `apple-touch-icon.png` not yet created (Phase 13.1)
2. **Final build** — `npm run build` → verify `/out` with no errors (Phase 13.3)
3. **FTP deploy** — `/out`, `contact.php`, `vendor/` to HostGator (Phase 13.5)
4. **PHPMailer Composer** — `composer require phpmailer/phpmailer` on server (Phase 13.4)
5. **Email test** — contact form end-to-end verification on live server (Phase 12.8)

### Non-blockers (can ship and iterate)
6. **404 page** — `not-found.tsx` — branded error page (Phase 13.2)
7. **Mobile images** — Hero/About images currently `hidden lg:block` — mobile layout decision pending
8. **Lighthouse audit** — target ≥ 90 all categories (Phase 12.7)
9. **Cross-browser testing** — Chrome, Firefox, Safari, Edge (Phase 12.5)

---

## 8. Repository Summary

| Item | Detail |
|---|---|
| Repo | `davdav/davdav.tech` |
| Branch | `main` |
| Total commits | 46 |
| Latest commit | `ab7c33a` — docs(cv): consolidated profile |
| Build command | `bash scripts/build.sh` (handles `nvm use 24`) |
| Dev command | `bash scripts/dev.sh` (Turbopack, port 3000) |
| Output | `/out` — fully static HTML/CSS/JS |

---

*Report generated: 2026-08-22 — davdav.tech pre-production state*
