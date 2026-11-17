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
      // Serve one copy of the site: send www.dade.studio to dade.studio.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dade.studio" }],
        destination: "https://dade.studio/:path*",
        permanent: true,
      },
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
