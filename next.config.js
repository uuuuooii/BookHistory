/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  images: {
    domains: ['i.pcmag.com', '*', 'postfiles.pstatic.net'],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = { fs: false };

    return config;
  },
};
