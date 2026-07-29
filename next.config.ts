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
        permanent: false,
      })),
      {
        source: "/concepts/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
