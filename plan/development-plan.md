# Development Plan — davdav.tech

**Version:** 1.0  
**Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · MDX  
**Deployment:** Static export → FTP → HostGator  

---

## Phase 0 — Foundation ✅

| Task | Status |
|---|---|
| Next.js scaffold (App Router, TypeScript, Tailwind) | Done |
| Static export config (`output: export`, `trailingSlash`) | Done |
| MDX dependencies installed | Done |
| Design system (colors, Inter font, dark mode CSS vars) | Done |
| App Router pages scaffolded (home, about, experience, expertise, blog, contact) | Done |
| Root layout with metadata, Open Graph, Twitter cards | Done |
| Project folder structure | Done |
| `.gitignore` updated | Done |
| README.md | Done |
| CLAUDE.md | Done |

---

## Phase 1 — Layout & Navigation

**Goal:** Shell del sitio funcional — header, footer, navegación responsiva.

| # | Task | Notes |
|---|---|---|
| 1.1 | `Header` component | Logo/nombre, nav links, dark mode toggle, mobile hamburger |
| 1.2 | `Footer` component | Links sociales (LinkedIn, GitHub), email, copyright |
| 1.3 | `Nav` mobile drawer | Slide-in menu para pantallas pequeñas |
| 1.4 | Conectar layout raíz | Header + Footer envuelven todas las páginas |
| 1.5 | Dark mode toggle | Persiste preferencia en `localStorage` |

---

## Phase 2 — Home Page

**Goal:** Primera impresión — hero, highlights, CTA.

| # | Task | Notes |
|---|---|---|
| 2.1 | `HeroSection` | Nombre, título, descripción, 4 CTAs (Resume, LinkedIn, GitHub, Contact) |
| 2.2 | `HighlightsSection` | 4 pilares: Enterprise Engineering, Technical Leadership, Cloud & DevOps, App Ownership |
| 2.3 | `FeaturedBlogSection` | Preview de últimos 3 artículos (vacío hasta Phase 6) |
| 2.4 | SEO de home | `metadata` con keywords, OG image placeholder |

---

## Phase 3 — About Page

**Goal:** Historia profesional y liderazgo.

| # | Task | Notes |
|---|---|---|
| 3.1 | Professional summary | Párrafos de narrative profesional |
| 3.2 | Leadership philosophy | Sección breve de filosofía |
| 3.3 | Technical expertise grid | Skills agrupadas por pilar |
| 3.4 | Career progression timeline | Línea de tiempo visual (simplificada) |
| 3.5 | Architecture aspirations | CTA hacia Architecture en roadmap |

---

## Phase 4 — Experience Page

**Goal:** Historia laboral como business stories.

| # | Task | Notes |
|---|---|---|
| 4.1 | `ExperienceCard` component | Empresa, rol, período, responsabilidades, tecnologías, logros |
| 4.2 | Zurich Insurance | Senior Software Engineer + Java Developer |
| 4.3 | Coppel | Senior Full Stack / SCM Lead |
| 4.4 | Entrepreneur | Independent ventures |
| 4.5 | Sierra Metals | Engineering Team Lead |
| 4.6 | Earlier roles | Seguro Popular, Contacto Comunicación, Anúnciate en Red, URPFCH |
| 4.7 | Education section | 3 títulos académicos |
| 4.8 | Certifications section | Lista de certificaciones actuales |

---

## Phase 5 — Expertise Page

**Goal:** Posicionamiento técnico por dominio.

| # | Task | Notes |
|---|---|---|
| 5.1 | `ExpertiseGrid` component | Cards por categoría |
| 5.2 | Software Engineering | Java, Spring Boot, REST APIs, Microservices |
| 5.3 | Cloud & DevOps | Azure, Azure DevOps, CI/CD, Automation |
| 5.4 | Architecture | Solution Architecture, Enterprise Systems, Modernization |
| 5.5 | Leadership | Technical Leadership, Mentoring, Stakeholder Management |

---

## Phase 6 — Blog Engine

**Goal:** Sistema de publicación MDX funcional.

| # | Task | Notes |
|---|---|---|
| 6.1 | Resolver plugins MDX con Turbopack | `remark-gfm` + `rehype-pretty-code` vía webpack config |
| 6.2 | `src/lib/mdx.ts` | Leer archivos `.mdx`, extraer frontmatter, listar posts |
| 6.3 | Blog listing page | Grid de posts con título, fecha, categoría, excerpt |
| 6.4 | `src/app/blog/[slug]/page.tsx` | Página individual de post con `generateStaticParams` |
| 6.5 | `BlogPostLayout` component | Tipografía, metadata del post, navegación prev/next |
| 6.6 | Primer post de prueba | `src/content/blog/hello-world.mdx` |
| 6.7 | Categorías | Filtro por: Java, Azure, DevOps, Technical Leadership, Solution Architecture |
| 6.8 | Conectar `FeaturedBlogSection` en Home | Mostrar 3 posts más recientes |

---

## Phase 7 — Contact Page + PHP Mailer

**Goal:** Canal de contacto profesional funcional.

| # | Task | Notes |
|---|---|---|
| 7.1 | `ContactForm` component | Campos: Name, Email, Company, Message; validación client-side |
| 7.2 | `contact.php` | PHPMailer + SMTP de HostGator → `david.duarte@davdav.tech` |
| 7.3 | Integrar fetch POST | Form envía a `/contact.php`, maneja success/error states |
| 7.4 | Protección básica anti-spam | Honeypot field en el form |
| 7.5 | Información de contacto directa | Email + LinkedIn como alternativas |

---

## Phase 8 — SEO & Performance

**Goal:** Lighthouse ≥ 90, visibilidad en buscadores.

| # | Task | Notes |
|---|---|---|
| 8.1 | `sitemap.ts` | `generateSitemaps` con todas las rutas estáticas + posts |
| 8.2 | `robots.ts` | Allow all, sitemap reference |
| 8.3 | Schema.org JSON-LD | `Person` schema en layout raíz |
| 8.4 | OG images | `opengraph-image.tsx` por página (Next.js ImageResponse) |
| 8.5 | Auditoría Lighthouse | Performance, Accessibility, Best Practices, SEO |
| 8.6 | `<link rel="canonical">` | En todas las páginas |

---

## Phase 9 — Polish & Deploy

**Goal:** Sitio production-ready subido a HostGator.

| # | Task | Notes |
|---|---|---|
| 9.1 | Favicon + app icons | `favicon.ico`, `apple-touch-icon` |
| 9.2 | 404 page | `not-found.tsx` con diseño de marca |
| 9.3 | Loading states | Skeleton screens donde aplique |
| 9.4 | Cross-browser testing | Chrome, Firefox, Safari, Edge |
| 9.5 | Mobile QA | iOS Safari, Android Chrome |
| 9.6 | `npm run build` final | Verificar `/out` sin errores |
| 9.7 | Primer deploy FTP | Subir `/out` + `contact.php` a HostGator |
| 9.8 | Verificación en producción | Recorrer todas las rutas en `davdav.tech` |

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

## Orden recomendado de implementación

```
Phase 1 (Layout) → Phase 2 (Home) → Phase 3 (About)
→ Phase 4 (Experience) → Phase 5 (Expertise)
→ Phase 6 (Blog) → Phase 7 (Contact)
→ Phase 8 (SEO) → Phase 9 (Deploy)
```

Shared components se construyen a medida que cada fase los requiere.
