/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://auvp.com.br/auvp-sempre/'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
