import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export type Category =
  | "Java"
  | "Azure"
  | "DevOps"
  | "Technical Leadership"
  | "Solution Architecture";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: Category;
  excerpt: string;
  published: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        category: (data.category ?? "Java") as Category,
        excerpt: data.excerpt ?? "",
        published: data.published ?? true,
      };
    })
    .filter((p) => p.published)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    category: (data.category ?? "Java") as Category,
    excerpt: data.excerpt ?? "",
    published: data.published ?? true,
    content,
  };
}
