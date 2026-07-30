import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const retiredRoutes = [
      "/case-study",
      "/concepts",
      "/design-system",
      "/developer",
      "/products",
      "/studio",
    ];

    return [
      ...retiredRoutes.map((source) => ({
        source,
        destination: "/",
        permanent: true,
      })),
      {
        source: "/concepts/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
