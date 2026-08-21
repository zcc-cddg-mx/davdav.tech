import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

const BASE_URL = "https://davdav.tech";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/",               priority: 1.0, changeFrequency: "monthly"  },
  { path: "/about",          priority: 0.9, changeFrequency: "monthly"  },
  { path: "/experience",     priority: 0.8, changeFrequency: "monthly"  },
  { path: "/expertise",      priority: 0.8, changeFrequency: "monthly"  },
  { path: "/education",      priority: 0.7, changeFrequency: "yearly"   },
  { path: "/certifications", priority: 0.7, changeFrequency: "monthly"  },
  { path: "/blog",           priority: 0.9, changeFrequency: "weekly"   },
  { path: "/contact",        priority: 0.6, changeFrequency: "yearly"   },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
