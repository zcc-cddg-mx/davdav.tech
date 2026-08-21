import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

const CATEGORY_STYLES: Record<string, string> = {
  "Java":                  "bg-orange-500/10 text-orange-500 border-orange-500/20",
  "Azure":                 "bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20",
  "DevOps":                "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  "Technical Leadership":  "bg-violet-500/10 text-violet-500 border-violet-500/20",
  "Solution Architecture": "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Carlos David Duarte"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* ── Post header ── */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${CATEGORY_STYLES[post.category] ?? CATEGORY_STYLES["Azure"]}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-[var(--muted)]">
                {formatDate(post.date)}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Post body ── */}
      <section className="py-12 sm:py-16 border-b border-[var(--border)]">
        <Container>
          <div className="max-w-3xl prose-blog">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </Container>
      </section>

      {/* ── Footer nav ── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--muted)] mb-1">More articles</p>
              <p className="text-sm font-medium text-[var(--foreground)]">
                Writing on Java, Azure, DevOps, and engineering leadership.
              </p>
            </div>
            <Button href="/blog" variant="secondary" size="md">
              ← Back to Blog
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
