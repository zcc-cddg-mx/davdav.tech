import { Code2, Users, Cloud, Package } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Enterprise Software Engineering",
    description:
      "Designing and delivering resilient, maintainable backend systems using Java, Spring Boot, and modern software architecture patterns.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "Leading engineering teams, mentoring developers, and aligning technical execution with business objectives and stakeholder expectations.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Building cloud-native solutions on Azure, optimizing CI/CD pipelines with Azure DevOps, and driving automation and operational efficiency.",
  },
  {
    icon: Package,
    title: "Application Ownership",
    description:
      "Taking end-to-end responsibility for critical business applications — from architecture and technical debt to security, compliance, and delivery.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-[var(--border)]">
      <Container>
        <SectionHeader
          title="What I do"
          subtitle="Four pillars that define my professional focus and daily work."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--color-primary)] transition-colors"
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-md bg-[var(--background)] border border-[var(--border)] group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                <Icon size={20} className="text-[var(--muted)] group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
