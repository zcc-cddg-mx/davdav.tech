import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/ui/BlogCard";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";

export default function FeaturedBlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-16 sm:py-20 border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeader
            title="Latest Articles"
            subtitle="Insights on Java, Azure, DevOps, and software architecture."
          />
          <Button href="/blog" variant="ghost" size="sm">
            View all
            <ArrowRight size={14} />
          </Button>
        </div>

        {posts.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 h-44 flex flex-col justify-between animate-pulse"
              >
                <div className="space-y-2">
                  <div className="h-3 w-16 rounded bg-[var(--border)]" />
                  <div className="h-4 w-full rounded bg-[var(--border)]" />
                  <div className="h-4 w-4/5 rounded bg-[var(--border)]" />
                </div>
                <div className="h-3 w-24 rounded bg-[var(--border)]" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
