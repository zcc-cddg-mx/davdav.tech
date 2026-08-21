"use client";

import { useState } from "react";
import BlogCard from "@/components/ui/BlogCard";
import type { PostMeta, Category } from "@/lib/mdx";

const CATEGORIES: (Category | "All")[] = [
  "All",
  "Java",
  "Azure",
  "DevOps",
  "Technical Leadership",
  "Solution Architecture",
];

export default function BlogFilter({ posts }: { posts: PostMeta[] }) {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              active === cat
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-[var(--card)] text-[var(--muted)] border-[var(--border)] hover:border-[var(--color-primary)] hover:text-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[var(--muted)]">No posts in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </>
  );
}
