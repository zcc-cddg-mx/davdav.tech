# Development Plan — davdav.tech

**Version:** 1.2  
**Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · MDX  
**Deployment:** Static export → FTP → HostGator  
**Brand:** Ver `plan/personal-brand-contract.md` — email canónico: `david.duarte@davdav.tech`  

---

## Phase 0 — Foundation ✅

| Task | Status |
|---|---|
| Next.js scaffold (App Router, TypeScript, Tailwind) | Done |
| Static export config (`output: export`, `trailingSlash`) | Done |
| MDX dependencies installed | Done |
| Design system (colors, Inter font, dark mode CSS vars) | Done |
| App Router pages scaffolded (home, about, experience, education, certifications, expertise, blog, contact) | Done |
| Root layout with metadata, Open Graph, Twitter cards | Done |
| Project folder structure | Done |
| `.gitignore` updated | Done |
| README.md | Done |
| CLAUDE.md | Done |

---

## Phase 1 — Layout & Navigation ✅

**Goal:** Shell del sitio funcional — header, footer, navegación responsiva.

| # | Task | Notes |
|---|---|---|
| 1.1 | `Header` component | Logo/nombre, nav links, dark mode toggle, mobile hamburger |
| 1.2 | `Footer` component | Links sociales (LinkedIn, GitHub), email, copyright |
| 1.3 | `Nav` mobile drawer | Slide-in menu para pantallas pequeñas |
| 1.4 | Conectar layout raíz | Header + Footer envuelven todas las páginas |
| 1.5 | Dark mode toggle | Persiste preferencia en `localStorage` |

---

## Phase 2 — Home Page ✅

**Goal:** Primera impresión — hero, highlights, CTA.

| # | Task | Notes |
|---|---|---|
| 2.1 | `HeroSection` | Nombre, título, descripción, 4 CTAs: View Resume · LinkedIn · GitHub · Contact Me |
| 2.2 | `HighlightsSection` | 4 pilares exactos: Enterprise Software Engineering · Technical Leadership · Cloud & DevOps · Application Ownership |
| 2.3 | `FeaturedBlogSection` | Preview de últimos 3 artículos (placeholder hasta Phase 9) |
| 2.4 | SEO de home | `metadata` con keywords, OG image placeholder |

---

## Phase 3 — About Page ✅

**Goal:** Historia profesional y liderazgo.

| # | Task | Notes |
|---|---|---|
| 3.1 | Professional summary | Narrative profesional |
| 3.2 | Leadership philosophy | Filosofía de liderazgo técnico |
| 3.3 | Technical expertise grid | Skills agrupadas por pilar |
| 3.4 | Career progression timeline | Línea de tiempo visual (simplificada) |
| 3.5 | Architecture aspirations | CTA hacia posicionamiento futuro |

---

## Phase 4 — Experience Page ✅

**Goal:** Historia laboral como business stories.

| # | Task | Notes |
|---|---|---|
| 4.1 | `ExperienceCard` component | Empresa, rol, período, responsabilidades, tecnologías, logros |
| 4.2 | Zurich Insurance | Senior Software Engineer + Java Developer |
| 4.3 | Coppel | Senior Full Stack / SCM Lead |
| 4.4 | Entrepreneur | Independent Technology Ventures |
| 4.5 | Sierra Metals | Engineering Team Lead |
| 4.6 | Earlier roles | Seguro Popular, Contacto Comunicación, Anúnciate en Red, URPFCH |

---

## Phase 5 — Education Page ✅

**Goal:** Trayectoria académica.

| # | Task | Notes |
|---|---|---|
| 5.1 | `EducationCard` component | Institución, título, período |
| 5.2 | Master's — IT Management | Universidad Tecmilenio, Sep 2024 – Mar 2026 (**completed**, degree in processing) |
| 5.3 | Master's — DevOps | UNIR México, Jun 2024 – Mar 2026 (**completed**, degree in processing) |
| 5.4 | Bachelor of Engineering | Universidad Autónoma de Chihuahua, 2010 – 2014 |
| 5.5 | Engineer's Degree | Instituto Tecnológico de Chihuahua II, Systems Engineering, 2008–2010 |
| 5.6 | Complementary studies | CBTis 122 (Técnico Sistemas, 2004–2007), UACH English Diploma (2013–2014), Linguatec (2024–2025), SECyD Diploma (2015) |

---

## Phase 6 — Certifications Page ✅

**Goal:** Credenciales y certificaciones profesionales.

| # | Task | Notes |
|---|---|---|
| 6.1 | `CertificationCard` component | Nombre, emisor, fecha, `credentialUrl` → link "Verify →" |
| 6.2 | Listado completo | 13 certificaciones con URLs públicas (Credly, LinkedIn Learning, UNIR Verifirma, CognitiveClass, Voxy). Categorías: Cloud, DevOps, Data & AI, Security, AI, Language |
| 6.3 | Roadmap | AZ-900, AZ-204, AZ-305, Oracle Java OCP |

---

## Phase 7 — Expertise Page ✅

**Goal:** Posicionamiento técnico por dominio.

| # | Task | Notes |
|---|---|---|
| 7.1 | `ExpertiseGrid` component | Cards por categoría |
| 7.2 | Software Engineering | Java, Spring Boot, REST APIs, Microservices, Backend Systems |
| 7.3 | Cloud & DevOps | Azure, Azure DevOps, CI/CD, Automation, Cloud Modernization |
| 7.4 | Architecture | Solution Architecture, Enterprise Systems, Application Modernization |
| 7.5 | Leadership | Technical Leadership, Mentoring, Stakeholder Management, Team Leadership |

---

## Phase 8 — Blog Engine ✅

**Goal:** Sistema de publicación MDX funcional.

| # | Task | Notes |
|---|---|---|
| 8.1 | Resolver plugins MDX con Turbopack | `remark-gfm` + `rehype-pretty-code` vía webpack config |
| 8.2 | `src/lib/mdx.ts` | Leer archivos `.mdx`, extraer frontmatter, listar posts |
| 8.3 | Blog listing page | Grid de posts con título, fecha, categoría, excerpt |
| 8.4 | `src/app/blog/[slug]/page.tsx` | Página individual con `generateStaticParams` |
| 8.5 | `BlogPostLayout` component | Tipografía, metadata del post, navegación prev/next |
| 8.6 | Primer post de prueba | `src/content/blog/hello-world.mdx` |
| 8.7 | Categorías | Filtro por: Java, Azure, DevOps, Technical Leadership, Solution Architecture |
| 8.8 | Conectar `FeaturedBlogSection` en Home | Mostrar 3 posts más recientes |

---

## Phase 9 — Contact Page + PHP Mailer ✅

**Goal:** Canal de contacto profesional funcional.

| # | Task | Notes |
|---|---|---|
| 9.1 | `ContactForm` component | Campos: Name, Email, Company, Message; validación client-side |
| 9.2 | `contact.php` | PHPMailer + SMTP de HostGator → `david.duarte@davdav.tech` |
| 9.3 | Integrar fetch POST | Form envía a `/contact.php`, maneja success/error states |
| 9.4 | Protección básica anti-spam | Honeypot field en el form |
| 9.5 | Información de contacto directa | Email + LinkedIn como alternativas |

---

## Phase 10 — SEO & Performance ✅

**Goal:** Lighthouse ≥ 90, visibilidad en buscadores.

| # | Task | Notes |
|---|---|---|
| 10.1 | `sitemap.ts` | Todas las rutas estáticas + posts del blog |
| 10.2 | `robots.ts` | Allow all, referencia al sitemap |
| 10.3 | Schema.org JSON-LD | `Person` schema en layout raíz |
| 10.4 | OG images | `opengraph-image.tsx` por página (Next.js ImageResponse) |
| 10.5 | `<link rel="canonical">` | En todas las páginas |
| 10.6 | Auditoría Lighthouse | Performance, Accessibility, Best Practices, SEO |

---

## Phase 11 — Marca Personal ✅ (Phase 1 scope)

**Goal:** Integrar identidad visual y fotografías profesionales en el sitio.

Assets disponibles en `img/brand/` (8 imágenes) — desplegados a `public/brand/`.
Ver asset mapping completo en `plan/personal-brand-contract.md §7`.
Tasks 11.4–11.8 son Phase 2 scope (blog headers, articles, events, advisory).

| # | Task | Asset | Notes |
|---|---|---|---|
| 11.1 | ✅ Copiar imágenes a `public/brand/` | A01–A07 + profile-square | `public/brand/a01-hero.jpg` … `a07-executive-profile.jpg` |
| 11.2 | ✅ Hero section — A01 | `public/brand/a01-hero.jpg` | 2-col layout, imagen a la derecha (desktop) |
| 11.3 | ✅ About page — A07 | `public/brand/a07-executive-profile.jpg` | 2-col layout, imagen a la derecha (desktop). A03 descartada (aspecto IA demasiado visible) |
| 11.4 | Blog headers — A04 | `public/brand/a04-thought-leadership.jpg` | Phase 2 — blog header image |
| 11.5 | Engineering articles — A05 | `public/brand/a05-engineering-workspace.jpg` | Phase 2 — Java/engineering articles |
| 11.6 | Conference / Speaker — A06 | `public/brand/a06-conference-speaker.jpg` | Phase 2 — events section |
| 11.7 | Cloud & Architecture — A02 | `public/brand/a02-cloud-architecture.jpg` | Phase 2 — architecture/cloud articles |
| 11.8 | Executive Profile — A07 | `public/brand/a07-executive-profile.jpg` | Phase 2 — advisory/executive bio |

---

## Phase 12 — QA & Verificación

**Goal:** Asegurar consistencia de contenido, calidad visual y rendimiento antes del deploy.

| # | Task | Notes |
|---|---|---|
| 12.1 | ✅ Revisión CV/LinkedIn vs sitio | Certifications: 5→13, fechas corregidas, URLs públicas añadidas. Expertise: Docker+Kubernetes. CV actualizado. Education: ITC II, CBTis 122, UACH English Diploma añadidos desde LinkedIn. Zurich: Remote·Mexico. |
| 12.2 | ✅ QA visual — navegación | Nav active state con `.nav-active` (rgba), trailing slash normalizado, child routes con startsWith. DarkModeToggle cursor-pointer. |
| 12.3 | ✅ QA visual — consola errores | Fix React script tag warning (next/script), hydration mismatch DarkModeToggle, RSC prefetch 404 en PDF (Button external → `<a>` nativo). |
| 12.4 | ✅ QA visual — blog, contact, expertise | Todos los ítems verificados en código. Blog listing + filtro, post individual con avatar de autor, contact form + availability badge. |
| 12.5 | ⏳ Cross-browser testing | Chrome, Firefox, Safari, Edge — manual |
| 12.6 | ✅ Mobile QA + imágenes mobile | Hero (A01) y About (A07) visibles en mobile. Tamaños responsivos actualizados. |
| 12.7 | ⏳ Auditoría Lighthouse | Performance, Accessibility, Best Practices, SEO ≥ 90 |
| 12.8 | ⏳ Verificación envío email PHP | Requiere deploy en HostGator (Phase 13) |
| 12.9 | ✅ Contact — Google Maps link | Location card vinculada a maps.app.goo.gl/FwfpN9LZPx1Zn8ZX7 |

---

## Phase 13 — Polish & Deploy

**Goal:** Detalles finales y primer deploy a producción en HostGator.

| # | Task | Notes |
|---|---|---|
| 13.1 | Favicon + app icons | `favicon.ico`, `apple-touch-icon` |
| 13.2 | 404 page | `not-found.tsx` con diseño de marca |
| 13.3 | `npm run build` final | Verificar `/out` sin errores |
| 13.4 | PHPMailer setup en HostGator | `composer require phpmailer/phpmailer` en raíz del servidor |
| 13.5 | Primer deploy FTP | Subir `/out` + `contact.php` + `vendor/` a HostGator |
| 13.6 | Verificación en producción | Recorrer todas las rutas en `davdav.tech` |

---

## Recomendaciones — Acciones Pendientes

Derivadas del análisis de `plan/recommendations/development-recommendations-v1.md`.  
Última actualización: 2026-08-22.

| ID | Tarea | Prioridad | Estado |
|---|---|---|---|
| R1 | Security headers `.htaccess` | 🔴 Alta | ✅ Implementado |
| R2 | Google Analytics 4 | 🔴 Alta | ✅ Implementado — ⚠️ placeholder pendiente |
| R3 | Article + BreadcrumbList JSON-LD | 🟡 Media | ✅ Implementado |
| R4 | CAPTCHA / spam protection | 🟡 Media | ✅ Resuelto — honeypot suficiente |
| R5 | Imágenes mobile Hero + About | 🟡 Media | ✅ Implementado |
| R6 | Email canónico en doc de recomendaciones | 🟢 Baja | ✅ Corregido |
| R7 | Content strategy post-deploy | 🟢 Baja | ⏳ Operacional — post-deploy |

---

### R1 — Security Headers ✅

`public/.htaccess` creado con `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-XSS-Protection`. Incluye HTTPS redirect, gzip compression y browser caching para assets estáticos.

> Pendiente en producción: verificar headers con `curl -I https://davdav.tech` (Phase 13.6). Requiere SSL activo en HostGator.

---

### R2 — Google Analytics 4 ✅ ⚠️

Script integrado en `src/app/layout.tsx` vía `next/script strategy="afterInteractive"`. `anonymize_ip: true` habilitado.

> **⚠️ Acción requerida antes del deploy:** reemplazar `G-XXXXXXXXXX` (2 ocurrencias en `layout.tsx`) con el Measurement ID real — Google Analytics → Admin → Data Streams → Measurement ID.

---

### R3 — JSON-LD Schemas ✅

- `src/components/ui/JsonLd.tsx` — componentes `JsonLd` y `BreadcrumbJsonLd`
- `BreadcrumbList` añadido en las 8 páginas interiores (About, Experience, Education, Certifications, Expertise, Blog, Blog/[slug], Contact)
- `TechArticle` schema añadido en `blog/[slug]/page.tsx` (headline, datePublished, author, publisher, image, mainEntityOfPage)

---

### R4 — Spam Protection ✅

Decisión: **honeypot suficiente** para Phase 1. El `ContactForm` ya tiene campo honeypot implementado. Cloudflare Turnstile queda en backlog para Phase 2 si el tráfico lo justifica.

---

### R5 — Mobile Images ✅

- `HeroSection.tsx` — `hidden lg:flex` → `flex`. Tamaños: 224px (mobile) → 256px (sm) → 320px (lg) → 384px (xl)
- `about/page.tsx` — `hidden lg:block` → `block`. `max-w-xs` (mobile) → `max-w-sm` (sm) → `max-w-md` (lg)
- `sizes` actualizados en ambas imágenes para carga responsiva correcta
- Cierra Phase 12.6 ✅

---

### R6 — Email Canónico ✅

`plan/recommendations/development-recommendations-v1.md`: `carlos@davdav.tech` → `david.duarte@davdav.tech`.

---

### R7 — Content Strategy ⏳ Post-deploy

Objetivos año 1:

| Métrica | Target |
|---|---|
| Artículos de blog | 10+ en 12 meses |
| Posts LinkedIn | 1/semana |
| Artículos de arquitectura | 1/mes |

Primeros 5 temas priorizados (validados contra perfil real):
1. My Journey from Software Engineer to Technical Lead
2. Modernizing Enterprise Applications with Java and Spring Boot
3. Azure DevOps Best Practices for Enterprise Teams
4. Reducing Technical Debt Without Stopping Delivery
5. Why Solution Architecture Is More About Business Than Technology

> Content flywheel completo (davdav.tech → LinkedIn → newsletter) requiere newsletter de Phase 2. Para Phase 1: publicar en davdav.tech + compartir en LinkedIn.

---

## Shared Components (transversales)

Componentes reutilizables a construir durante las fases:

| Component | Usado en |
|---|---|
| `Button` | Home, Contact, nav CTAs |
| `SectionHeader` | Todas las páginas |
| `Badge` | Skills, categorías de blog |
| `Card` | Blog, Expertise, Experience |
| `Container` | Layout wrapper con max-width |
| `Divider` | Separadores de sección |

---

## Orden de implementación

```
Phase 1 (Layout & Nav)
→ Phase 2 (Home)
→ Phase 3 (About)
→ Phase 4 (Experience)
→ Phase 5 (Education)
→ Phase 6 (Certifications)
→ Phase 7 (Expertise)
→ Phase 8 (Blog)
→ Phase 9 (Contact)
→ Phase 10 (SEO)
→ Phase 11 (Marca Personal)
→ Phase 12 (QA & Verificación)
→ Phase 13 (Polish & Deploy)
```

Shared components se construyen a medida que cada fase los requiere.
