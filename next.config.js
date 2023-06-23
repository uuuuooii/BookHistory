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

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
