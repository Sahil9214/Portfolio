import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.me.toinfinite.dev"],
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/images/(.*)", // Match all files in /public/images
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
        ],
      },
    ];
  },
};

export default nextConfig;
