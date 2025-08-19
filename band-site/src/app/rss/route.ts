import { NextRequest } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET(request: NextRequest) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>BAND NAME - News</title>
  <description>Latest news and updates from BAND NAME</description>
  <link>${base}</link>
  <atom:link href="${base}/rss" rel="self" type="application/rss+xml" />
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${posts.map(post => `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <description><![CDATA[${post.excerpt || ''}]]></description>
    <link>${base}/news/${post.slug}</link>
    <guid>${base}/news/${post.slug}</guid>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
  `).join('')}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
