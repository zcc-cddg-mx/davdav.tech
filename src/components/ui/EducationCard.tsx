import Badge from "@/components/ui/Badge";

interface EducationCardProps {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location?: string;
  inProgress?: boolean;
  notes?: string;
  tags?: string[];
}

export default function EducationCard({
  institution,
  degree,
  field,
  period,
  location,
  inProgress = false,
  notes,
  tags,
}: EducationCardProps) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide mb-1">
            {degree}
          </p>
          <h3 className="text-base font-semibold text-[var(--foreground)] leading-snug">
            {field}
          </h3>
        </div>
        {inProgress && (
          <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            In progress
          </span>
        )}
      </div>

      <p className="text-sm font-medium text-[var(--foreground)] mb-1">
        {institution}
      </p>

      <p className="text-xs text-[var(--muted)]">
        {period}
        {location && ` · ${location}`}
      </p>

      {notes && (
        <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
          {notes}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
