interface CertificationCardProps {
  name: string;
  issuer: string;
  date?: string;
  category: string;
  pending?: boolean;
}

export default function CertificationCard({
  name,
  issuer,
  date,
  category,
  pending = false,
}: CertificationCardProps) {
  return (
    <div className={`rounded-lg border bg-[var(--card)] p-5 flex flex-col gap-3 ${pending ? "border-dashed border-[var(--border)] opacity-70" : "border-[var(--border)]"}`}>
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wide">
          {category}
        </span>
        {pending ? (
          <span className="shrink-0 text-xs text-[var(--muted)] border border-dashed border-[var(--border)] rounded-full px-2 py-0.5">
            Planned
          </span>
        ) : (
          date && (
            <span className="shrink-0 text-xs text-[var(--muted)]">{date}</span>
          )
        )}
      </div>
      <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug">
        {name}
      </h3>
      <p className="text-xs text-[var(--muted)]">{issuer}</p>
    </div>
  );
}
