import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Multiple lockfiles exist on this machine; pin tracing to the project root
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
