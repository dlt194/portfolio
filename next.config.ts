import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/metrics/script.js",
        destination: "https://analytics.dlt.me.uk/api/script.js",
      },

      {
        source: "/metrics/site/tracking-config/:siteId",
        destination:
          "https://analytics.dlt.me.uk/api/site/tracking-config/:siteId",
      },

      {
        source: "/metrics/track",
        destination: "https://analytics.dlt.me.uk/api/track",
      },

      {
        source: "/metrics/:path*",
        destination: "https://analytics.dlt.me.uk/api/:path*",
      },
    ];
  },
};

export default nextConfig;
