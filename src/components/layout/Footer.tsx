import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/dav-gill",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "https://github.com/RamRider89",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "mailto:david.duarte@davdav.tech",
    label: "Email",
    icon: Mail,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-[var(--muted)]">
            © {year} Carlos David Duarte. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
