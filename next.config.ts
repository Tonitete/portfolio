import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/portfolio' : '',
  },
};

export default nextConfig;
