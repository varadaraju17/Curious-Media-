import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd ? { output: "export" } : {}),
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['172.24.48.1', '10.149.37.180', '10.91.74.180', '172.28.224.1'],
} as NextConfig;

export default nextConfig;
