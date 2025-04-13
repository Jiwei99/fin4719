import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/fin4719",
  assetPrefix: "/fin4719/",
};

export default nextConfig;
