const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? '/gyanano_website' : '',
  assetPrefix: isGitHubPages ? '/gyanano_website/' : '',
};

module.exports = nextConfig;