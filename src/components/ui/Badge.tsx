type BadgeVariant = "default" | "primary" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]",
  primary: "bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-[var(--color-primary)]",
  muted: "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)]",
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
