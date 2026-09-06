import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: "/humans",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/humans",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
