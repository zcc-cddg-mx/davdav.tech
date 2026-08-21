import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import BlogFilter from "@/components/sections/BlogFilter";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Carlos David Duarte on Java, Azure, DevOps, Technical Leadership, and Solution Architecture.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[var(--color-primary)] tracking-wide uppercase mb-4">
              Blog
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
              Writing on engineering, cloud, and leadership
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              Practical articles from the trenches — Java, Azure, DevOps, and
              the engineering craft of building and leading teams.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <BlogFilter posts={posts} />
        </Container>
      </section>
    </>
  );
}
