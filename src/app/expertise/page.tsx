import type { Metadata } from "next";
import { Code2, Cloud, Layers, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Technical expertise of Carlos David Duarte — enterprise Java engineering, Azure cloud, DevOps, solution architecture, and technical leadership.",
  alternates: { canonical: "/expertise" },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const DOMAINS = [
  {
    icon: Code2,
    title: "Software Engineering",
    summary:
      "Building resilient, maintainable enterprise systems with Java and Spring Boot. Focused on clean architecture, performance, and long-term ownership of business-critical applications.",
    skills: [
      { name: "Java", level: "expert" },
      { name: "Spring Boot", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "Microservices", level: "advanced" },
      { name: "Clean Architecture", level: "advanced" },
      { name: "Design Patterns", level: "advanced" },
      { name: "Performance Optimization", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Node.js", level: "intermediate" },
      { name: "Angular", level: "intermediate" },
      { name: "SQL", level: "advanced" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    summary:
      "Designing and operating cloud-native solutions on Azure. CI/CD pipeline ownership, infrastructure automation, and driving operational efficiency across engineering teams.",
    skills: [
      { name: "Azure", level: "advanced" },
      { name: "Azure DevOps", level: "expert" },
      { name: "CI/CD Pipelines", level: "expert" },
      { name: "Docker", level: "intermediate" },
      { name: "Kubernetes", level: "intermediate" },
      { name: "Cloud-Native Development", level: "advanced" },
      { name: "Infrastructure Automation", level: "advanced" },
      { name: "Cloud Migration", level: "advanced" },
      { name: "Release Management", level: "advanced" },
      { name: "Branching Strategies", level: "expert" },
    ],
  },
  {
    icon: Layers,
    title: "Architecture",
    summary:
      "Translating business requirements into scalable technical solutions. Application ownership, legacy modernization, and moving toward enterprise-level solution and cloud architecture.",
    skills: [
      { name: "Solution Architecture", level: "advanced" },
      { name: "Application Ownership", level: "expert" },
      { name: "Legacy Modernization", level: "expert" },
      { name: "Enterprise Integration", level: "advanced" },
      { name: "Cloud Architecture", level: "intermediate" },
      { name: "Technical Decision Making", level: "expert" },
      { name: "Security & Compliance", level: "advanced" },
      { name: "Technical Debt Management", level: "expert" },
    ],
  },
  {
    icon: Users,
    title: "Technical Leadership",
    summary:
      "Leading engineering teams and cross-functional initiatives. Creating clarity, aligning technical execution with business goals, and building engineering cultures that compound over time.",
    skills: [
      { name: "Team Leadership", level: "expert" },
      { name: "Mentoring", level: "expert" },
      { name: "Stakeholder Management", level: "advanced" },
      { name: "Engineering Culture", level: "advanced" },
      { name: "Delivery Excellence", level: "expert" },
      { name: "Cross-functional Collaboration", level: "advanced" },
      { name: "Technical Roadmapping", level: "advanced" },
      { name: "Hiring & Onboarding", level: "intermediate" },
    ],
  },
];

const LEVEL_STYLES: Record<string, string> = {
  expert:       "bg-[var(--color-primary)]/15 border-[var(--color-primary)]/30 text-[var(--color-primary)]",
  advanced:     "bg-[var(--card)] border-[var(--border)] text-[var(--foreground)]",
  intermediate: "bg-[var(--card)] border-[var(--border)] text-[var(--muted)]",
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Expertise() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
              Expertise
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
              Four domains, one coherent engineering profile
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Deep in Java and Azure DevOps, growing into solution architecture.
              Skills are organized by domain and depth — from daily practice to
              foundational knowledge.
            </p>
          </div>
          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--muted)]">
            {[
              { label: "Expert", style: LEVEL_STYLES.expert },
              { label: "Advanced", style: LEVEL_STYLES.advanced },
              { label: "Intermediate", style: LEVEL_STYLES.intermediate },
            ].map(({ label, style }) => (
              <span
                key={label}
                className={`inline-flex items-center px-2.5 py-0.5 rounded-md border font-medium ${style}`}
              >
                {label}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Domain grid ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DOMAINS.map(({ icon: Icon, title, summary, skills }) => (
              <div
                key={title}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
              >
                {/* Domain header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-[var(--background)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[var(--color-primary)]" />
                  </div>
                  <h2 className="text-base font-semibold text-[var(--foreground)]">
                    {title}
                  </h2>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {summary}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, level }) => (
                    <span
                      key={name}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${LEVEL_STYLES[level]}`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Architecture trajectory ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <SectionHeader
              title="Architecture trajectory"
              subtitle="Where the expertise is heading."
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  stage: "Now",
                  role: "Senior Software Engineer",
                  focus: "Deep Java, Azure DevOps ownership, application modernization.",
                },
                {
                  stage: "Active",
                  role: "Technical Lead",
                  focus: "Cross-team coordination, architecture decisions, engineering culture.",
                },
                {
                  stage: "Target",
                  role: "Solution Architect",
                  focus: "Enterprise integration, cloud architecture, business-aligned technical strategy.",
                },
              ].map(({ stage, role, focus }) => (
                <div
                  key={stage}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5"
                >
                  <p className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide mb-2">
                    {stage}
                  </p>
                  <p className="text-sm font-semibold text-[var(--foreground)] mb-2">
                    {role}
                  </p>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-3">
              Work together
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)] tracking-tight mb-4">
              Looking for a Senior Engineer or Solution Architect?
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-6">
              I&apos;m open to Senior Engineering and Solution Architecture
              opportunities where I can combine technical depth with strategic
              impact. Let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="md">
                Get in touch
              </Button>
              <Button
                href="/cv/cv-carlos-duarte.pdf"
                variant="secondary"
                size="md"
                external
              >
                Download Resume
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
