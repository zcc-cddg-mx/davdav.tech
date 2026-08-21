import Badge from "@/components/ui/Badge";

interface Role {
  title: string;
  period: string;
  location?: string;
  highlights: string[];
  technologies?: string[];
}

interface ExperienceCardProps {
  company: string;
  location: string;
  roles: Role[];
  current?: boolean;
}

export default function ExperienceCard({
  company,
  location,
  roles,
  current = false,
}: ExperienceCardProps) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] overflow-hidden">
      {/* Company header */}
      <div className="px-6 py-5 border-b border-[var(--border)] flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-[var(--foreground)]">
            {company}
          </h3>
          <p className="text-sm text-[var(--muted)] mt-0.5">{location}</p>
        </div>
        {current && (
          <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Current
          </span>
        )}
      </div>

      {/* Roles */}
      <div className="divide-y divide-[var(--border)]">
        {roles.map((role, i) => (
          <div key={i} className="px-6 py-5">
            {/* Role title + period */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <h4 className="text-sm font-semibold text-[var(--foreground)]">
                {role.title}
              </h4>
              <span className="text-xs text-[var(--muted)] shrink-0">
                {role.period}
                {role.location && ` · ${role.location}`}
              </span>
            </div>

            {/* Highlights */}
            {role.highlights.length > 0 && (
              <ul className="space-y-2 mb-4">
                {role.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-[var(--muted)] leading-relaxed">
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[var(--color-primary)]" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Technologies */}
            {role.technologies && role.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {role.technologies.map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
