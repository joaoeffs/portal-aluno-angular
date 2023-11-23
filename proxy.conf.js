const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://18.229.159.250:8080',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;

// const PROXY_CONFIG = [
//   {
//     context: ['/api'],
//     target: 'http://localhost:8080/',
//     secure: false,
//     logLevel: 'debug'
//   }
// ];

// module.exports = PROXY_CONFIG;

