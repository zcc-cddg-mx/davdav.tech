import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CertificationCard from "@/components/ui/CertificationCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications and credentials of Carlos David Duarte — IBM Cloud, Data Science, and industry programs, with Azure and Java certifications in progress.",
  alternates: { canonical: "/certifications" },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const EARNED = [
  {
    name: "IBM Cloud Essentials V3",
    issuer: "IBM",
    date: "2023",
    category: "Cloud",
  },
  {
    name: "Machine Learning for Data Science Projects",
    issuer: "IBM",
    date: "2023",
    category: "Data & AI",
  },
  {
    name: "Enterprise Data Science in Practice",
    issuer: "IBM",
    date: "2023",
    category: "Data & AI",
  },
  {
    name: "Getting Started with Data",
    issuer: "IBM",
    date: "2023",
    category: "Data & AI",
  },
  {
    name: "Voxy Proficiency Achievement Certificate",
    issuer: "Voxy",
    date: "2024",
    category: "Language",
  },
];

const PLANNED = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    category: "Cloud",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    category: "Cloud",
  },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
    issuer: "Microsoft",
    category: "Architecture",
  },
  {
    name: "Oracle Certified Professional: Java SE Developer",
    issuer: "Oracle",
    category: "Software Engineering",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Certifications() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
              Certifications
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
              Credentials and professional development
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              A growing set of formal credentials complementing hands-on
              engineering experience. Azure and Java certifications are actively
              in the roadmap as part of the path toward Solution Architecture.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Earned ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Earned Certifications"
            subtitle="Industry-recognized credentials obtained through formal assessment."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EARNED.map((c) => (
              <CertificationCard key={c.name} {...c} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Planned ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Certification Roadmap"
            subtitle="Planned credentials aligned with the Solution Architecture career path."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLANNED.map((c) => (
              <CertificationCard key={c.name} {...c} pending />
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">
            Azure certifications follow the AZ-900 → AZ-204 → AZ-305 progression
            toward Solutions Architect Expert. Java OCP supports the enterprise
            engineering positioning.
          </p>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-3">
              Full profile
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)] tracking-tight mb-4">
              See the complete technical picture
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-6">
              Certifications are one layer. Explore the full expertise breakdown
              or review the academic background behind the engineering work.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/expertise" variant="primary" size="md">
                View expertise
              </Button>
              <Button href="/education" variant="secondary" size="md">
                View education
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
