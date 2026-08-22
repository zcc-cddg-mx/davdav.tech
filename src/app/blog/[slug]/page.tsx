import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { JsonLd, BreadcrumbJsonLd } from "@/components/ui/JsonLd";
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
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Person",
            name: "Carlos David Duarte",
            url: "https://davdav.tech",
          },
          publisher: {
            "@type": "Person",
            name: "Carlos David Duarte",
            url: "https://davdav.tech",
          },
          url: `https://davdav.tech/blog/${slug}`,
          image: "https://davdav.tech/brand/a04-thought-leadership.jpg",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://davdav.tech/blog/${slug}`,
          },
        }}
      />
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
            <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author byline */}
            <div className="flex items-center gap-3 pt-6 border-t border-[var(--border)]">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/brand/profile-square.png"
                  alt="Carlos David Duarte"
                  fill
                  sizes="40px"
                  className="rounded-full object-cover object-center"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)] leading-tight">
                  Carlos David Duarte
                </p>
                <p className="text-xs text-[var(--muted)] mt-0.5">
                  Senior Software Engineer · Technical Lead
                </p>
              </div>
            </div>
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
