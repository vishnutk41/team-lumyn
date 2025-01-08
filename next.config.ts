import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    implementation: 'sass',
    includePaths:[`${__dirname}/styles`]
  },
};

export default nextConfig;
