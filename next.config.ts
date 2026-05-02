import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['172.24.48.1', '10.149.37.180'],
} as NextConfig;

export default nextConfig;
