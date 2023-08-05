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
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  webpack: (NextConfig, { isServer }) => {
    // if (!isServer) {
    NextConfig.plugins.push(new CompletionLog());
    // }
    return NextConfig;
  },
};
