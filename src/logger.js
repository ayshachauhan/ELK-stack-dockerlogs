const pino = require('pino');

const logger = pino({
  level: 'info',
  base: {
    service: 'node-app'
  },
  formatters: {
    level(label) {
      return { level: label };
    }
  },
  timestamp: pino.stdTimeFunctions.isoTime
});

module.exports = logger;