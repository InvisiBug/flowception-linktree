import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    domains: ["yt3.ggpht.com", "www.jugglingedge.com"],
  },
};

export default nextConfig;
