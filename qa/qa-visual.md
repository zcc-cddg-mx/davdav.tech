
# QA Visual — Checklist por página

## Navegación global

- [x] Logo## nombre en header clickeable → va a Home
- [x] Todos los nav links funcionan (About, Experience, Education, Certifications, Expertise, Blog, Contact)
    - añadir un estilo para marcar visualmente la seccion activa
- [x] Botón dark## light mode cambia tema correctamente
    - añadir un estilo :hover para el boton y que el cursos cambie a tipo link|hand | done
- [x] Footer: LinkedIn, GitHub, email visibles

## — Home

- [x] Layout 2 columnas en desktop: texto izquierda, foto A01 (glass office, cyan) derecha
- [x] Nombre, título y subtítulo visibles
- [x] 4 CTAs: View Resume (PDF), Contact Me, LinkedIn, GitHub
- [x] Sección Highlights debajo (4 pilares)
- [x] Featured Blog posts al final

## about — About

- [x] Layout 2 columnas en desktop: texto izquierda, foto A03 (team meeting) derecha
    - cambiar la imagen a la A07 (necesito mejorar la A03, se ve un poco falsa por IA) | done
- [x] Leadership Philosophy (3 tarjetas)
- [x] Technical Expertise grid (4 dominios con skills)
- [x] Career timeline (Zurich → Coppel → Entrepreneur → Sierra Meta

## experience — Experience

- [x] Zurich Insurance: 2 roles — Senior SWE (Nov 2025–Present) y J
- [x] Coppel, Entrepreneur, Sierra Metals visibles
- [x] Earlier Career grid: Seguro Popular, Contacto, Anúnciate, URP


## Education — Education
- Las dos master degree fueron terminadas en marzo del 2026, actualemte tramitando el titulo oficial | done
- creo que hay mas educacion que podemos añadir aqui ? | done

## certifications — Certifications

- [x] 13 certificaciones (no 5 — verificar que aparezcan todas)
    - podriamos agregar las url's publicas de las ceritificaciones terminadas para mayor credibilidad   | done
- [x] Fechas correctas (más reciente: May 2026, no "2023")
- [x] Categorías: Cloud, DevOps, Data & AI, Security, AI, Language
- [x] Roadmap: AZ-900, AZ-204, AZ-305, Oracle Java

## expertise — Expertise

- [x] Cloud & DevOps incluye Docker y Kubernetes (intermediate)
- [x] Leyenda Expert / Advanced / Intermediate visible
- [x] Architecture Trajectory: Now → Active → Target

## blog — Blog listing

- [x] Posts listados con categoría, fecha, excerpt
- [x] Filtro de categorías funciona (client-side, 5 categorías + All)

## blog — Post individual

- [x] Avatar circular de autor en el header del post
- [x] Nombre "Carlos David Duarte" y rol debajo del avatar
- [x] Botón "← Back to Blog" al final

## contact — Contact

- [x] Formulario con campos: Name, Email, Company, Message
- [x] Info directa: email y LinkedIn visibles
- [x] Badge de disponibilidad (punto verde pulsante, animate-pulse)

## Extra

- [ ] Posibilidad de incluir imágenes en modo Mobile (Hero A01, About A07 — actualmente `hidden lg:block`, pendiente para próxima sesión)
- [ ] Verificación envío de emails via PHP (contact.php + PHPMailer — requiere deploy en HostGator, pendiente Phase 13)