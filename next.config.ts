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

      // Tracking config (exact path your error shows)
      {
        source: "/metrics/site/tracking-config/:siteId",
        destination:
          "https://analytics.dlt.me.uk/api/site/tracking-config/:siteId",
      },

      // Track endpoint (common; adjust if your network tab shows a different path)
      {
        source: "/metrics/track",
        destination: "https://analytics.dlt.me.uk/api/track",
      },

      // Optional: catch-all for any other API paths you discover later
      {
        source: "/metrics/:path*",
        destination: "https://analytics.dlt.me.uk/api/:path*",
      },
    ];
  },
};

export default nextConfig;
