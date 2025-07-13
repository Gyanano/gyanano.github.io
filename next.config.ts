import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? '/gyanano_website' : '',
  assetPrefix: isGitHubPages ? '/gyanano_website/' : '',
};

export default nextConfig;
