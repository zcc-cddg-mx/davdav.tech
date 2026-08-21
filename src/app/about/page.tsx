import type { Metadata } from "next";
import Image from "next/image";
import { Target, Lightbulb, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Software Engineer and Technical Lead focused on enterprise applications, cloud technologies, and technical leadership.",
  alternates: { canonical: "/about" },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const EXPERTISE = [
  {
    pillar: "Software Engineering",
    skills: [
      "Java", "Spring Boot", "REST APIs", "Microservices",
      "Backend Systems", "Clean Architecture", "Design Patterns",
      "Performance Optimization",
    ],
  },
  {
    pillar: "Cloud & DevOps",
    skills: [
      "Azure", "Azure DevOps", "CI/CD", "Cloud Migration",
      "Infrastructure Automation", "Cloud-Native Development",
    ],
  },
  {
    pillar: "Architecture",
    skills: [
      "Solution Architecture", "Cloud Architecture",
      "Enterprise Integration", "Legacy Modernization",
      "Application Ownership", "Technical Decision Making",
    ],
  },
  {
    pillar: "Technical Leadership",
    skills: [
      "Team Leadership", "Mentoring", "Stakeholder Management",
      "Engineering Culture", "Delivery Excellence", "Cross-functional Collaboration",
    ],
  },
];

const TIMELINE = [
  {
    period: "Nov 2025 — Present",
    role: "Senior Software Engineer",
    company: "Zurich Insurance",
    description:
      "Leading development of enterprise-grade applications for critical insurance operations. Driving modernization of core business systems using Java and Spring Boot.",
  },
  {
    period: "Nov 2022 — Oct 2024",
    role: "Senior Full Stack Engineer / SCM Lead",
    company: "Coppel",
    description:
      "Led migration of critical legacy systems to modern stacks. Architected scalable internal platforms and managed Azure DevOps CI/CD processes.",
  },
  {
    period: "Aug 2020 — Aug 2023",
    role: "Independent Technology Ventures",
    company: "Entrepreneur",
    description:
      "Led end-to-end architecture and delivery of software projects. Directed and mentored engineering teams of 5+ collaborators.",
  },
  {
    period: "Aug 2018 — Aug 2020",
    role: "Engineering Team Lead",
    company: "Sierra Metals Inc.",
    description:
      "Led engineering teams of 20+ collaborators. Managed project lifecycles and acted as liaison between technical teams and management.",
  },
  {
    period: "2009 — 2016",
    role: "Earlier Career",
    company: "Various roles",
    description:
      "Software Developer, Web Developer, and Geo-Informatics Developer across government, media, and agency environments in Chihuahua, Mexico.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text content */}
            <div>
              <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
                About
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
                Engineering at the intersection of technology and business
              </h1>
              <div className="space-y-4 text-base text-[var(--muted)] leading-relaxed">
                <p>
                  I&apos;m a Senior Software Engineer and Technical Lead focused on
                  engineering, modernizing, and owning enterprise applications
                  where technology and business objectives converge.
                </p>
                <p>
                  Throughout my career, I&apos;ve taken end-to-end responsibility for
                  business-critical systems — from understanding requirements and
                  translating them into resilient technical solutions, to managing
                  technical debt, coordinating deployments, and aligning with
                  security and compliance standards.
                </p>
                <p>
                  My technical expertise is centered on Java, Spring Boot, Azure,
                  and DevOps. I excel in cloud-native architectures, CI/CD
                  optimization, legacy modernization, and operational workflows.
                  I hold dual Master&apos;s degrees in IT Management and DevOps, which
                  complement my hands-on engineering background with a broader,
                  strategic perspective on enterprise delivery.
                </p>
              </div>
            </div>

            {/* Right: executive profile image (A07) */}
            <div className="hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src="/brand/a07-executive-profile.jpg"
                  alt="Carlos David Duarte — Executive Profile"
                  fill
                  sizes="(max-width: 1280px) 384px, 448px"
                  className="rounded-2xl object-cover object-center"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-[var(--color-primary)] ring-opacity-30 pointer-events-none" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Leadership Philosophy ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SectionHeader
              title="Leadership Philosophy"
              subtitle="How I think about leading engineering teams and delivering results."
            />
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {[
                {
                  icon: Target,
                  title: "Ownership over delegation",
                  description:
                    "Effective technical leadership means taking full ownership of outcomes — not just tasks. I align technical decisions with business goals and stay accountable for the results.",
                },
                {
                  icon: Lightbulb,
                  title: "Clarity as a deliverable",
                  description:
                    "I believe creating clarity is as valuable as writing code. Breaking down complex problems, communicating tradeoffs clearly, and making sound decisions under uncertainty is leadership.",
                },
                {
                  icon: TrendingUp,
                  title: "Engineering culture matters",
                  description:
                    "I invest in team growth through mentoring, code review culture, and raising engineering standards. A strong team compounds over time.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-md bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
                      <Icon size={15} className="text-[var(--color-primary)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Technical Expertise ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Technical Expertise"
            subtitle="Skills organized by professional domain."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERTISE.map(({ pillar, skills }) => (
              <div key={pillar}>
                <h3 className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                  {pillar}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Career Progression ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <SectionHeader
            title="Career Progression"
            subtitle="Key roles that shaped my technical and leadership perspective."
          />
          <div className="mt-10 relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-[var(--border)] hidden sm:block" />

            <div className="space-y-8">
              {TIMELINE.map(({ period, role, company, description }, i) => (
                <div key={i} className="sm:pl-10 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[var(--color-primary)] bg-[var(--background)] hidden sm:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  </div>

                  <p className="text-xs font-medium text-[var(--muted)] mb-1">
                    {period}
                  </p>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {role}{" "}
                    <span className="font-normal text-[var(--muted)]">
                      · {company}
                    </span>
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Architecture Aspirations ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-3">
              Looking ahead
            </p>
            <h2 className="text-2xl font-bold text-[var(--foreground)] tracking-tight mb-4">
              Moving toward Solution Architecture
            </h2>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-6">
              I&apos;m expanding my focus toward Solution and Cloud Architecture roles
              where I can combine hands-on engineering, application ownership,
              and architectural thinking to drive meaningful technical
              transformation at the enterprise level.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/expertise" variant="primary" size="md">
                View my expertise
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                Let&apos;s connect
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
