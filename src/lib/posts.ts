import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt?: string;
  cover?: string;
  tags?: string[];
  draft?: boolean;
};

const postsDir = path.join(process.cwd(), "content", "posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) {
    return [];
  }
  
  return fs.readdirSync(postsDir).filter((name) => {
    const full = path.join(postsDir, name);
    return fs.statSync(full).isDirectory();
  });
}

export function getPostBySlug(slug: string) {
  const folder = path.join(postsDir, slug);
  const file = path.join(folder, "post.md");
  const fileContents = fs.readFileSync(file, "utf8");
  const { data, content } = matter(fileContents);

  const meta: PostMeta = {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    excerpt: data.excerpt ?? "",
    cover: data.cover ?? "",
    tags: data.tags ?? [],
    draft: Boolean(data.draft),
  };

  return { meta, content, folder };
}

export async function getPostHtml(slug: string) {
  const { meta, content } = getPostBySlug(slug);
  const processed = await remark().use(html).process(content);
  return { meta, html: processed.toString() };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => {
    const { meta } = getPostBySlug(slug);
    return meta;
  })
  .filter(p => !p.draft)
  .sort((a, b) => a.date < b.date ? 1 : -1);
  return posts;
}

export function getPaginatedPosts(page = 1, perPage = 12) {
  const all = getAllPosts();
  const total = all.length;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return {
    posts: all.slice(start, end),
    total,
    page,
    perPage,
    totalPages: Math.max(1, Math.ceil(total / perPage)),
  };
}
