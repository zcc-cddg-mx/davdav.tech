# Technical Progress Report — davdav.tech

**Date:** 2026-08-22 (updated end of session)
**Project:** davdav.tech — Personal Professional Brand Platform  
**Owner:** Carlos David Duarte  
**Evaluator:** Technical Review  
**Status:** Pre-production · Phase 12 QA 7/9 complete · Phase 13 pending

---

## 1. Executive Summary

**davdav.tech** is a personal professional brand platform positioned for a Senior Software Engineer / Technical Lead transitioning toward Solution Architecture roles. Built as a fully static Next.js site (App Router, static export) deployed to HostGator shared hosting via FTP.

**Phases 0–11 complete.** Phase 12 QA is 7/9 done — only cross-browser testing and Lighthouse audit remain before Phase 13 deploy. No architectural blockers.

| Metric | Value |
|---|---|
| Phases completed | 11 / 13 |
| Phase 12 QA tasks complete | 7 / 9 |
| Git commits | 53 |
| Source files (.tsx / .ts) | 34 |
| React components | 19 |
| Pages | 9 (8 routes + home) |
| Lines of source code | ~3,136 |
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
    layout.tsx                # Root layout — Inter, metadata, JSON-LD Person, GA4, dark mode
    page.tsx                  # Home
    about/page.tsx
    experience/page.tsx
    education/page.tsx
    certifications/page.tsx
    expertise/page.tsx
    blog/page.tsx             # Listing + client-side category filter
    blog/[slug]/page.tsx      # Individual post — MDXRemote + remark-gfm + TechArticle schema
    contact/page.tsx
    sitemap.ts                # Dynamic — static routes + blog posts
    robots.ts
    opengraph-image.tsx       # Global OG 1200×630 (ImageResponse)
  components/
    ui/                       # Button, Card, BlogCard, Badge, CertificationCard,
                              # ContactForm, SectionHeader, Container, ExperienceCard,
                              # EducationCard, BlogPostLayout, DarkModeToggle, JsonLd
    layout/                   # Header, Footer, MobileDrawer
    sections/                 # HeroSection, HighlightsSection, FeaturedBlogSection,
                              # BlogFilter
  content/blog/               # .mdx files — frontmatter: title, date, category, excerpt, published
  lib/
    mdx.ts                    # getAllPosts() / getPostBySlug() — gray-matter + fs
public/
  .htaccess                   # Security headers, HTTPS redirect, gzip, browser caching
  brand/                      # A01–A07 + profile-square.png
  cv/cv-carlos-duarte.pdf
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
- Dark mode toggle — persists to `localStorage`; React 19 hydration handled via `useState(false)` + `useEffect`
- **Nav active state** — `.nav-active` CSS class (`rgba(0,120,212,0.10)`) due to Tailwind v4 limitation. `usePathname()` normalized for `trailingSlash: true`. `isActive()` uses `startsWith(href + "/")` for child routes.

### Phase 2 — Home Page ✅
- `HeroSection` — name, title, description, 4 CTAs: View Resume (external PDF), LinkedIn, GitHub, Contact Me. Brand image A01 visible on all screen sizes.
- `HighlightsSection` — 4 pillars: Enterprise Software Engineering, Technical Leadership, Cloud & DevOps, Application Ownership
- `FeaturedBlogSection` — displays 3 most recent published posts from MDX engine
- Full SEO metadata, OG image

### Phase 3 — About Page ✅
- Professional summary, leadership philosophy, technical expertise grid, career progression timeline
- Brand image A07 (executive profile) — visible on all screen sizes (mobile: `max-w-xs`, desktop: `max-w-md`)
- Physical location: Guadalajara, México (MapPin icon)

### Phase 4 — Experience Page ✅
- 9 professional roles — Zurich Insurance (2 positions), Coppel, Entrepreneur, Sierra Metals, and 4 earlier roles
- `ExperienceCard` — company, role, period, description, tech stack badges
- Zurich: Remote · México displayed

### Phase 5 — Education Page ✅
- 5 formal degrees (2 Master's completed Mar 2026, 1 Bachelor, 1 Engineer's, 1 Technical High School)
- 3 complementary programs (language courses)
- React key conflict resolved with composite key `${institution}-${period}`

### Phase 6 — Certifications Page ✅
- `CertificationCard` with `credentialUrl` → "Verify →" external link
- 13 certifications with public verification URLs (Credly, LinkedIn Learning, UNIR Verifirma, CognitiveClass, Voxy)
- Roadmap: AZ-900, AZ-204, AZ-305, Oracle Java OCP

### Phase 7 — Expertise Page ✅
- 4 domains: Software Engineering, Cloud & DevOps, Architecture, Technical Leadership
- `Badge` components per skill, page-level SEO

### Phase 8 — Blog Engine ✅
- `next-mdx-remote/rsc` — MDX rendered as RSC at build time, avoids Turbopack serialization error
- `generateStaticParams`, client-side category filter, author byline with avatar
- 1 published post; engine ready for new MDX files

### Phase 9 — Contact Page + PHP Mailer ✅
- `ContactForm` — validation, fetch POST to `/contact.php`, honeypot anti-spam
- `contact.php` — PHPMailer + HostGator SMTP, `getenv('SMTP_PASSWORD')` (never hardcoded)
- Contact info panel — Email, LinkedIn, Location with Google Maps link (`maps.app.goo.gl/FwfpN9LZPx1Zn8ZX7`)

### Phase 10 — SEO & Performance ✅
- `sitemap.ts`, `robots.ts`, global OG image (1200×630)
- Schema.org `Person` JSON-LD in root layout via `next/script strategy="beforeInteractive"`
- `<link rel="canonical">` on all pages

### Phase 11 — Marca Personal ✅ (Phase 1 scope)
- 8 brand images in `public/brand/` — A01 in Hero, A07 in About
- A04–A06 deferred to Phase 2

### Phase 12 — QA & Verificación (7/9 complete)

| Task | Status | Notes |
|---|---|---|
| 12.1 CV/LinkedIn vs site audit | ✅ Done | 5→13 certs, ITC II + CBTis 122, Zurich Remote·MX, all verify URLs |
| 12.2 Visual QA — navigation | ✅ Done | Nav active state, trailing slash, child routes, cursor-pointer |
| 12.3 Visual QA — console errors | ✅ Done | RSC prefetch 404, React hydration, JSON-LD script tag |
| 12.4 Visual QA — blog/contact/expertise | ✅ Done | All items verified in code |
| 12.5 Cross-browser testing | ⏳ Pending | Chrome, Firefox, Safari, Edge — manual |
| 12.6 Mobile QA + images | ✅ Done | Hero A01 + About A07 visible on all screens, responsive sizes updated |
| 12.7 Lighthouse audit | ⏳ Pending | Target ≥ 90 — security headers + schemas now in place |
| 12.8 PHP email verification | ⏳ Pending | Requires live HostGator deploy |
| 12.9 Contact — Google Maps link | ✅ Done | Location card → maps.app.goo.gl/FwfpN9LZPx1Zn8ZX7 |

### Phase 13 — Polish & Deploy (0/6 complete)

| Task | Status |
|---|---|
| 13.1 Favicon + apple-touch-icon | ⏳ Pending |
| 13.2 `not-found.tsx` (404 page) | ⏳ Pending |
| 13.3 `npm run build` final + verify `/out` | ⏳ Pending |
| 13.4 PHPMailer Composer setup on HostGator | ⏳ Pending |
| 13.5 FTP deploy — `/out` + `contact.php` + `vendor/` + `.htaccess` | ⏳ Pending |
| 13.6 Production verification — all routes on davdav.tech | ⏳ Pending |

---

## 5. Key Technical Decisions & Resolved Issues

### 5.1 MDX + Turbopack Serialization
**Problem:** `@next/mdx` remark/rehype plugins are not serializable under Turbopack.  
**Solution:** `next-mdx-remote/rsc` renders MDX as an RSC at build time. `remark-gfm` passed directly to `<MDXRemote options>` prop — runs in Node.js process, not Turbopack.

### 5.2 Tailwind v4 + CSS Custom Properties Opacity
**Problem:** `bg-[var(--color-primary)]/10` generates no background — Tailwind v4 cannot resolve `/N` opacity on `var()` at build time.  
**Solution:** `.nav-active { background-color: rgba(0, 120, 212, 0.10); }` in `globals.css`.

### 5.3 `trailingSlash: true` + Active Nav State
**Problem:** `usePathname()` returns `/about/` but nav hrefs are `/about`.  
**Solution:** `rawPathname.replace(/\/$/, "")` normalization + `startsWith(href + "/")` for child routes.

### 5.4 RSC Prefetch 404 on PDF Download
**Problem:** `<Link>` triggers RSC prefetch on file hrefs → 404 errors.  
**Solution:** `Button` component uses native `<a>` when `external={true}`.

### 5.5 React 19 Hydration — DarkModeToggle
**Problem:** Lazy `useState` initializer reads `localStorage` on server → hydration mismatch.  
**Solution:** `useState(false)` + `useEffect` for DOM sync after mount.

### 5.6 React Key Conflict — Education
**Problem:** Two UACH entries caused React key collision with `key={d.institution}`.  
**Solution:** `key={\`${d.institution}-${d.period}\`}`.

### 5.7 Contact Location Card (null href)
**Problem:** `link.href.startsWith("http")` throws when `href: null`.  
**Solution:** Conditional render `link.href ? <a> : <div>`. Subsequently upgraded to Google Maps link — now always renders as `<a>`.

### 5.8 JSON-LD in Root Layout
`next/script strategy="beforeInteractive"` for `Person` schema and anti-FOUC dark mode script — avoids React 19 warning from raw `<script>` tags in component tree.

### 5.9 Security Headers via `.htaccess`
`public/.htaccess` deployed alongside `/out`. Covers `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-XSS-Protection`, HTTPS redirect, gzip compression, and browser caching. Impacts Lighthouse Best Practices score.

### 5.10 BreadcrumbList + TechArticle JSON-LD
`src/components/ui/JsonLd.tsx` — `JsonLd` and `BreadcrumbJsonLd` RSC components using `<script type="application/ld+json" dangerouslySetInnerHTML>`. `BreadcrumbList` on all 8 inner pages. `TechArticle` on `blog/[slug]/page.tsx` with `headline`, `datePublished`, `author`, `publisher`, `image`, `mainEntityOfPage`.

---

## 6. Content Status

### Pages

| Page | Content | SEO | Schema | OG Image | Mobile Image |
|---|---|---|---|---|---|
| Home | ✅ | ✅ | Person (layout) | ✅ | ✅ A01 |
| About | ✅ | ✅ | BreadcrumbList | ✅ | ✅ A07 |
| Experience | ✅ (9 roles) | ✅ | BreadcrumbList | ✅ | — |
| Education | ✅ (5 degrees + 3 comp.) | ✅ | BreadcrumbList | ✅ | — |
| Certifications | ✅ (13 + roadmap) | ✅ | BreadcrumbList | ✅ | — |
| Expertise | ✅ | ✅ | BreadcrumbList | ✅ | — |
| Blog | ✅ (engine + 1 post) | ✅ | BreadcrumbList | ✅ | — |
| Blog/[slug] | ✅ | ✅ | BreadcrumbList + TechArticle | ✅ | — |
| Contact | ✅ | ✅ | BreadcrumbList | ✅ | — |

### Source Documents

| File | Purpose | Status |
|---|---|---|
| `cv/profile.md` | Consolidated profile — all cv/linkedin sources | ✅ 2026-08-22 |
| `cv/cv-carlos-duarte.md` | Master CV | ✅ Current |
| `cv/linkedin/about.md` | LinkedIn About snapshot | ✅ Aug 2026 |
| `cv/linkedin/header.md` | LinkedIn header snapshot | ✅ Aug 2026 |
| `cv/linkedin/experience.md` | 9 roles with tech stacks | ✅ Aug 2026 |
| `cv/linkedin/education.md` | Full academic history | ✅ Aug 2026 |
| `cv/linkedin/certifications.md` | 13 certs with verify URLs | ✅ Aug 2026 |
| `cv/linkedin/aptitudes.md` | Skills by domain | ✅ Aug 2026 |
| `public/cv/cv-carlos-duarte.pdf` | PDF resume for download | ✅ |

---

## 7. Pending Items Before Production

### Blockers (must complete before launch)
1. **GA4 Measurement ID** — replace `G-XXXXXXXXXX` (2 occurrences in `src/app/layout.tsx`) with real ID from Google Analytics → Admin → Data Streams
2. **Favicon** — `favicon.ico` and `apple-touch-icon.png` (Phase 13.1)
3. **Final build** — `npm run build` → verify `/out` clean (Phase 13.3)
4. **FTP deploy** — `/out` + `contact.php` + `vendor/` + `public/.htaccess` to HostGator (Phase 13.5)
5. **PHPMailer Composer** — `composer require phpmailer/phpmailer` on server (Phase 13.4)
6. **Email test** — contact form end-to-end on live server (Phase 12.8)

### Non-blockers (can ship and iterate)
7. **404 page** — `not-found.tsx` branded error page (Phase 13.2)
8. **Lighthouse audit** — target ≥ 90 all categories; security headers and schemas now in place (Phase 12.7)
9. **Cross-browser testing** — Chrome, Firefox, Safari, Edge (Phase 12.5)

---

## 8. Repository Summary

| Item | Detail |
|---|---|
| Repo | `davdav/davdav.tech` |
| Branch | `main` |
| Total commits | 53 |
| Latest commit | `d0c14dd` — docs(plan): update execution plan |
| Build command | `bash scripts/build.sh` (handles `nvm use 24`) |
| Dev command | `bash scripts/dev.sh` (Turbopack, port 3000) |
| Output | `/out` — fully static HTML/CSS/JS |

---

*Report last updated: 2026-08-22 end-of-session — davdav.tech pre-production state*
