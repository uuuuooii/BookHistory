/** @type {import('next').NextConfig} */
const nextConfig = {};

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
};
