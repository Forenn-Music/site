import type { NextConfig } from "next";
import { copyFileSync, mkdirSync, existsSync, cpSync } from "fs";
import { join } from "path";

const nextConfig: NextConfig = {
  experimental: { typedRoutes: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

// Copy content to public directory during build
if (process.env.NODE_ENV === "production") {
  const src = join(process.cwd(), "content");
  const dest = join(process.cwd(), "public", "content");
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

export default nextConfig;
