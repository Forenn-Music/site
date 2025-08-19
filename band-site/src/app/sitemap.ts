import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const posts = getAllPosts().map(p => ({
    url: `${base}/news/${p.slug}`,
    lastModified: p.date,
  }));
  
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/news`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/events`, lastModified: new Date() },
    { url: `${base}/newsletter`, lastModified: new Date() },
    ...posts,
  ];
}
