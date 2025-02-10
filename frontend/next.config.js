/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/items',
          destination: 'http://localhost:3300/items', // Backend'in adresi
        },
        {
          source: '/api/cakes',
      destination: 'http://localhost:3300/cakes',
        },
        {
          source: '/api/users',
      destination: 'http://localhost:3300/users',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  