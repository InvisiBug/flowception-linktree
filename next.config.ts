import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    domains: ["yt3.ggpht.com", "www.jugglingedge.com", "cdn-icons-png.flaticon.com"],
  },
};

export default nextConfig;
