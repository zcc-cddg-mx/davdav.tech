import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Carlos David Duarte — Senior Software Engineer and Technical Lead with a track record across enterprise software, cloud, and technical leadership.",
  alternates: { canonical: "/experience" },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURED = [
  {
    company: "Zurich Insurance",
    location: "Remote · Mexico",
    current: true,
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Nov 2025 – Present",
        highlights: [
          "Spearhead the development and maintenance of enterprise-grade applications supporting critical insurance operations across multiple business domains.",
          "Drive the continuous modernization of core business systems using Java and Spring Boot architectures.",
          "Align technical deliverables with compliance and security requirements.",
          "Collaborate across teams to reduce technical debt and improve deployment efficiency.",
        ],
        technologies: [
          "Java", "Spring Boot", "REST APIs", "Azure", "CI/CD",
          "Enterprise Architecture", "Compliance",
        ],
      },
      {
        title: "Java Developer",
        period: "Mar 2025 – Nov 2025",
        highlights: [
          "Delivered backend features for business-critical insurance systems within a globally distributed engineering team.",
          "Contributed to the modernization of legacy Java components toward cloud-ready architectures.",
        ],
        technologies: ["Java", "Spring Boot", "REST APIs"],
      },
    ],
  },
  {
    company: "Coppel",
    location: "Culiacán, Sinaloa, Mexico",
    current: false,
    roles: [
      {
        title: "Senior Full Stack Engineer / SCM Lead",
        period: "Nov 2022 – Oct 2024",
        highlights: [
          "Led migration of critical legacy systems to modern technology stacks, reducing operational risk.",
          "Architected scalable internal platforms used by thousands of internal users.",
          "Owned Azure DevOps SCM processes — branching strategies, release pipelines, and CI/CD workflows.",
          "Improved deployment frequency and reduced lead time through pipeline automation.",
        ],
        technologies: [
          "Java", "Node.js", "Angular", "TypeScript", "SQL",
          "Azure DevOps", "CI/CD", "Spring Boot",
        ],
      },
    ],
  },
  {
    company: "Entrepreneur",
    location: "Mexico",
    current: false,
    roles: [
      {
        title: "Independent Technology Ventures",
        period: "Aug 2020 – Aug 2023",
        highlights: [
          "Led end-to-end architecture and delivery of software projects for clients across multiple industries.",
          "Directed and mentored engineering teams of 5+ collaborators.",
          "Aligned technical execution with business objectives and stakeholder expectations.",
          "Managed client relationships and translated business requirements into actionable technical solutions.",
        ],
        technologies: [
          "Architecture", "Technical Leadership", "Full Stack", "Team Management",
        ],
      },
    ],
  },
  {
    company: "Sierra Metals Inc.",
    location: "Chihuahua, Mexico",
    current: false,
    roles: [
      {
        title: "Engineering Team Lead",
        period: "Aug 2018 – Aug 2020",
        highlights: [
          "Led engineering teams of more than 20 collaborators across multiple initiatives.",
          "Managed project lifecycles from planning to delivery, ensuring on-time and on-budget execution.",
          "Improved workflows and productivity through operational optimization and process improvement.",
          "Acted as liaison between technical teams and management, creating clarity across the organization.",
        ],
        technologies: [
          "Engineering Leadership", "Project Management", "Cross-functional Collaboration",
        ],
      },
    ],
  },
];

const EARLIER = [
  {
    company: "Seguro Popular – Gobierno de Chihuahua",
    title: "Software Developer",
    period: "Aug 2015 – Aug 2016",
    location: "Chihuahua, Mexico",
    description: "Developed and maintained customized IT systems and web applications for government health programs. Built geographic mapping solutions supporting program operations.",
    technologies: ["Web Development", "Geographic Systems"],
  },
  {
    company: "Contacto Comunicación",
    title: "Web Developer",
    period: "Aug 2014 – Aug 2015",
    location: "Chihuahua, Mexico",
    description: "Developed websites and operational software solutions for media and communications clients.",
    technologies: ["Web Development"],
  },
  {
    company: "Anúnciate en Red",
    title: "Founder / Web Design Agency",
    period: "Aug 2012 – Aug 2014",
    location: "Chihuahua, Mexico",
    description: "Founded and operated an independent web design agency. Delivered customized digital solutions for local businesses and managed client engagements end-to-end.",
    technologies: ["Web Design", "Agency Management", "Client Delivery"],
  },
  {
    company: "Unión de Regiones de Productores Forestales de Chihuahua",
    title: "Geo-Informatics Developer",
    period: "Aug 2009 – Aug 2011",
    location: "Chihuahua, Mexico",
    description: "Developed web mapping applications using MapServer and PostgreSQL. Supported geographic visualization, environmental monitoring, and disaster management initiatives.",
    technologies: ["MapServer", "PostgreSQL", "Geographic Information Systems"],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
              Experience
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
              15+ years building and leading engineering teams
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              From geo-informatics development and web agencies to enterprise
              software engineering at Zurich Insurance — a career built on
              ownership, technical depth, and continuous growth toward Solution
              Architecture.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Featured Experience ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Professional Experience"
            subtitle="Key roles and contributions across enterprise and technology environments."
          />
          <div className="mt-10 space-y-6">
            {FEATURED.map((exp) => (
              <ExperienceCard key={exp.company} {...exp} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Earlier Career ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Earlier Career"
            subtitle="Formative roles that shaped my foundation in software and systems."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EARLIER.map((role) => (
              <div
                key={role.company}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <div className="flex flex-col gap-1 mb-3">
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {role.title}
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium">
                    {role.company}
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    {role.period} · {role.location}
                  </p>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {role.technologies.map((t) => (
                    <Badge key={t} variant="muted">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-3">
              Next step
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)] tracking-tight mb-4">
              Interested in working together?
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-6">
              I&apos;m currently open to Senior Engineering and Solution
              Architecture opportunities. Download my resume or get in touch
              directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                href="/cv/cv-carlos-duarte.pdf"
                variant="primary"
                size="md"
                external
              >
                Download Resume
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
