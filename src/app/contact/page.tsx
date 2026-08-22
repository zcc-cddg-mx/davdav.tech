import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Carlos David Duarte — open to engineering leadership opportunities, architecture consulting, and technical collaborations.",
  alternates: { canonical: "/contact" },
};

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "david.duarte@davdav.tech",
    href: "mailto:david.duarte@davdav.tech",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dav-gill",
    href: "https://www.linkedin.com/in/dav-gill",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Guadalajara, Mexico",
    href: null,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
              Contact
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
              Let&apos;s work together
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Open to engineering leadership roles, solution architecture
              opportunities, and technical collaborations. Whether you&apos;re a
              recruiter, a fellow engineer, or a potential partner — I&apos;d
              love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">
                Send a message
              </h2>
              <ContactForm />
            </div>

            {/* Direct contact info */}
            <div>
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-6">
                Direct contact
              </h2>
              <div className="space-y-4">
                {CONTACT_LINKS.map((link) => {
                  const inner = (
                    <>
                      <span className="mt-0.5 text-[var(--muted)] group-hover:text-[var(--color-primary)] transition-colors flex-shrink-0">
                        {link.icon}
                      </span>
                      <div>
                        <p className="text-xs font-medium text-[var(--muted)] mb-0.5">
                          {link.label}
                        </p>
                        <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--color-primary)] transition-colors break-all">
                          {link.value}
                        </p>
                      </div>
                    </>
                  );
                  const cls = "flex items-start gap-3 group rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--color-primary)]/50";
                  return link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={cls}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={link.label} className={cls}>{inner}</div>
                  );
                })}
              </div>

              {/* Availability note */}
              <div className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-medium text-[var(--foreground)]">
                    Available for new opportunities
                  </p>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Typically respond within 1–2 business days.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
