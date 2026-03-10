/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'ui-avatars.com',
      'habeshahub-backend-production.up.railway.app',
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
