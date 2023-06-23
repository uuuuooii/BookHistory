/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require('path');

module.exports = {
  nextConfig,
  images: {
    domains: ['i.pcmag.com', '*', 'postfiles.pstatic.net'],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
