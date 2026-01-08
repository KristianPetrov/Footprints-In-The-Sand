import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression
  compress: true,

  // Optimize for production
  poweredByHeader: false,

  /**
   * NOTE:
   * `experimental.optimizeCss` requires the `critters` package at runtime.
   * If `critters` isn't installed, Next will crash with "Cannot find module 'critters'".
   *
   * Keep this disabled unless you explicitly add `critters` to dependencies.
   */
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
