import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import EducationCard from "@/components/ui/EducationCard";
import Button from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background of Carlos David Duarte — dual Master's degrees in IT Management and DevOps, Bachelor of Engineering, and complementary studies.",
  alternates: { canonical: "/education" },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const DEGREES = [
  {
    institution: "Universidad Tecmilenio",
    degree: "Master's Degree",
    field: "Information Technology (IT) Management",
    period: "Sep 2024 – Mar 2026",
    location: "Mexico",
    inProgress: false,
    notes:
      "Focused on IT strategy, enterprise governance, and the management of technology-driven organizations. Complements hands-on engineering with a broader executive and organizational perspective. Degree in official processing.",
    tags: ["IT Strategy", "Enterprise Governance", "Technology Management", "Digital Transformation"],
  },
  {
    institution: "UNIR México",
    degree: "Master's Degree",
    field: "Software Development and Operations (DevOps)",
    period: "Jun 2024 – Mar 2026",
    location: "Mexico",
    inProgress: false,
    notes:
      "Deepening expertise in DevOps culture, CI/CD pipelines, cloud infrastructure, and software delivery optimization at enterprise scale. Degree in official processing.",
    tags: ["DevOps", "CI/CD", "Cloud Infrastructure", "Software Delivery", "Agile"],
  },
  {
    institution: "Universidad Autónoma de Chihuahua",
    degree: "Bachelor of Engineering",
    field: "Engineering",
    period: "2010 – 2014",
    location: "Chihuahua, Mexico",
    inProgress: false,
    notes:
      "Foundational engineering education providing analytical thinking, systems design, and problem-solving frameworks applied throughout my software career.",
    tags: ["Systems Design", "Engineering Fundamentals", "Problem Solving"],
  },
  {
    institution: "Instituto Tecnológico de Chihuahua II",
    degree: "Engineer's Degree",
    field: "Systems Engineering",
    period: "2008 – 2010",
    location: "Chihuahua, Mexico",
    inProgress: false,
    notes:
      "Systems engineering studies with focus on programming, databases, and the Java Virtual Machine. Provided the technical foundation that launched a career in software development.",
    tags: ["Systems Engineering", "Java", "Databases"],
  },
];

const OTHER = [
  {
    institution: "Centro de Bachillerato Industrial y de Servicios No. 122 (CBTis 122)",
    degree: "High School Diploma",
    field: "Técnico en Sistemas Computacionales",
    period: "2004 – 2007",
    inProgress: false,
    notes: "Technical high school specializing in computing systems — early introduction to programming, databases, and systems development.",
    tags: ["Computing Systems", "Programming", "Databases"],
  },
  {
    institution: "Linguatec Language Center",
    degree: "Language Program",
    field: "English Language Program",
    period: "Feb 2024 – Jun 2025",
    inProgress: false,
    notes: "Professional working proficiency in English for technical and business communication.",
  },
  {
    institution: "Universidad Autónoma de Chihuahua",
    degree: "Diploma",
    field: "English Language Program · Facultad de Filosofía y Letras",
    period: "2013 – 2014",
    inProgress: false,
  },
  {
    institution: "Secretaría de Educación, Cultura y Deporte",
    degree: "Diploma",
    field: "English Language Program",
    period: "2015",
    inProgress: false,
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Education() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Education", path: "/education" },
        ]}
      />
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
              Education
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
              Academic foundation for engineering and leadership
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Dual Master&apos;s degrees in IT Management and DevOps — completed
              March 2026, official degrees in processing — complement a
              Bachelor&apos;s in Engineering and 15+ years of hands-on practice.
              Theory and experience reinforce each other.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Degrees ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Academic Degrees"
            subtitle="Formal university education spanning engineering, technology management, and DevOps."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DEGREES.map((d) => (
              <EducationCard key={`${d.institution}-${d.period}`} {...d} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Complementary ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Complementary Studies"
            subtitle="Language programs and professional diplomas."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            {OTHER.map((d) => (
              <EducationCard key={`${d.institution}-${d.period}`} {...d} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-3">
              Continuous learning
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)] tracking-tight mb-4">
              Certifications and professional credentials
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-6">
              Beyond formal degrees, I hold IBM and industry certifications and
              pursue ongoing professional development in cloud, architecture, and
              enterprise software.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/certifications" variant="primary" size="md">
                View certifications
              </Button>
              <Button href="/expertise" variant="secondary" size="md">
                View expertise
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
