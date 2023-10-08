/** @type {import('next').NextConfig} */
const nextConfig = {};
const CompletionLog = require('./completionLog');

module.exports = {
  nextConfig,
  images: {
    domains: [
      'i.pcmag.com',
      '*',
      'postfiles.pstatic.net',
      'cloud.google.com',
      'contents.kyobobook.co.kr',
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  webpack: (NextConfig, { isServer }) => {
    if (!isServer) {
      NextConfig.plugins.push(new CompletionLog());
    }
    return NextConfig;
  },
};
