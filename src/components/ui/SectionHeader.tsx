interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[var(--muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
