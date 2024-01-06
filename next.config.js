module.exports = {
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.alejandroperez.dev'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type'
          }
        ]
      }
    ];
  }
};
