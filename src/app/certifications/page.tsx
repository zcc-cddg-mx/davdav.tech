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
  // 2026
  {
    name: "Advanced Prompt Engineering Techniques",
    issuer: "LinkedIn Learning",
    date: "May 2026",
    category: "AI",
    credentialUrl: "https://www.linkedin.com/learning/certificates/3655889578ce476f3d1dcee8276ad5cdb268e92d8ba5dd099024c46bf8fe6826/",
  },
  {
    name: "Prompt Engineering: How to Talk to the AIs",
    issuer: "LinkedIn Learning",
    date: "May 2026",
    category: "AI",
    credentialUrl: "https://www.linkedin.com/learning/certificates/fd421c820edd2a6406ead5b18673c9def0757947a83d23dbdd1c7e082e4e3c4d/",
  },
  {
    name: "Machine Learning for Data Science Projects",
    issuer: "IBM",
    date: "Feb 2026",
    category: "Data & AI",
    credentialUrl: "https://www.credly.com/badges/a98ec2dc-0a6b-44fb-998e-b37cdf5cc5fa/public_url",
  },
  {
    name: "Diploma en Despliegue Automatizado de Infraestructura",
    issuer: "UNIR México",
    date: "Jan 2026",
    category: "DevOps",
    credentialUrl: "https://verifirma.unir.net/MX/CSV/a5ed6765-f13c-4957-87f9-4a0aad4a2199",
  },
  // 2025
  {
    name: "Enterprise Data Science in Practice",
    issuer: "IBM",
    date: "Nov 2025",
    category: "Data & AI",
    credentialUrl: "https://www.credly.com/badges/b06001a6-678c-41ed-ab6f-833eb24546f0/public_url",
  },
  {
    name: "Data Fundamentals",
    issuer: "IBM",
    date: "Sep 2025",
    category: "Data & AI",
    credentialUrl: "https://www.credly.com/badges/13619bf2-c5a8-4089-b540-e568c05caaee/public_url",
  },
  {
    name: "Getting Started with Cybersecurity",
    issuer: "IBM",
    date: "Jul 2025",
    category: "Security",
    credentialUrl: "https://www.credly.com/badges/bd37eb23-aa09-46ca-a696-c7af93517f9f/public_url",
  },
  {
    name: "Diploma en Administración, Automatización y Seguridad DevOps",
    issuer: "UNIR México",
    date: "Jun 2025",
    category: "DevOps",
    credentialUrl: "https://verifirma.unir.net/MX/CSV/afb32927-c9d0-49d2-9d91-eb574b0bbb95",
  },
  {
    name: "IBM Cloud Essentials V3",
    issuer: "IBM",
    date: "Feb 2025",
    category: "Cloud",
    credentialUrl: "https://courses.cognitiveclass.ai/certificates/9a80b812a3694360952f9c407e40b817",
  },
  {
    name: "IBM Cloud Essentials",
    issuer: "IBM",
    date: "Feb 2025",
    category: "Cloud",
    credentialUrl: "https://www.credly.com/badges/9beab377-4f8b-4d27-a925-04553445d2f7/public_url",
  },
  {
    name: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM",
    date: "Feb 2025",
    category: "Cloud",
    credentialUrl: "https://www.credly.com/badges/1e08d535-dcb6-449f-b49e-5cbe35f69ca1",
  },
  // 2024
  {
    name: "Getting Started with Data",
    issuer: "IBM",
    date: "Oct 2024",
    category: "Data & AI",
    credentialUrl: "https://www.credly.com/badges/e538bdde-1531-40e7-87cd-6943223774d2/linked_in_profile",
  },
  {
    name: "Voxy Proficiency Achievement Certificate",
    issuer: "Voxy",
    date: "Aug 2024",
    category: "Language",
    credentialUrl: "https://francplus.linguatec.com.mx/certificates/proficiency-test/66cf62b377817c62590ccbfe",
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
