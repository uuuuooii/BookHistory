/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  images: {
    domains: ['i.pcmag.com', '*'],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};
