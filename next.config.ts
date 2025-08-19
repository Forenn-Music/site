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

// Content copying is handled by prebuild script

export default nextConfig;
