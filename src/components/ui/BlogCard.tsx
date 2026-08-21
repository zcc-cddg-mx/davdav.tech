import Link from "next/link";
import type { PostMeta } from "@/lib/mdx";

const CATEGORY_STYLES: Record<string, string> = {
  "Java":                 "bg-orange-500/10 text-orange-500 border-orange-500/20",
  "Azure":                "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20",
  "DevOps":               "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  "Technical Leadership": "bg-violet-500/10 text-violet-500 border-violet-500/20",
  "Solution Architecture":"bg-amber-500/10 text-amber-500 border-amber-500/20",
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogCard({ slug, title, date, category, excerpt }: PostMeta) {
  return (
    <Link
      href={`/blog/${slug}/`}
      className="group rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col gap-4 hover:border-[var(--color-primary)] transition-colors"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${CATEGORY_STYLES[category] ?? CATEGORY_STYLES["Azure"]}`}
        >
          {category}
        </span>
        <span className="text-xs text-[var(--muted)] shrink-0">{formatDate(date)}</span>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--color-primary)] transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>

      <span className="mt-auto text-xs font-medium text-[var(--color-primary)] group-hover:underline">
        Read article →
      </span>
    </Link>
  );
}
