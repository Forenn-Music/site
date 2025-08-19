import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
