/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/items',
          destination: 'http://localhost:3000/items', // Backend'in adresi
        },
        {
          source: '/api/cakes',
      destination: 'http://localhost:3000/cakes',
        },
        {
          source: '/api/users',
      destination: 'http://localhost:3000/users',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  