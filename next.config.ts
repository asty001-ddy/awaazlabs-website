import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Multiple lockfiles exist on this machine; pin tracing to the project root
  outputFileTracingRoot: path.join(__dirname),
  // Local verification builds use a separate dir (NEXT_DIST_DIR=.next-prod)
  // so they can't corrupt a running dev server's cache. Unset in CI/Vercel.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      // Tool renamed to match its search query (competitive teardown 2a)
      {
        source: "/tools/missed-revenue-calculator",
        destination: "/tools/missed-call-cost-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
