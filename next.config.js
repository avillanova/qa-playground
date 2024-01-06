module.exports = {
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://qa-playground.vercel.app'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Content-Type, Origin, Accept, Content-Length, Authorization, Accept-Encoding, X-CSRF-Token, X-Requested-With'
          }
        ]
      }
    ];
  }
};
