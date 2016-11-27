const winston = require('winston');

const logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      level: '',
      colorize: true,
      timestamp: false,
    }),
  ],
});

module.exports = logger;
