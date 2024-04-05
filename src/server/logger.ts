import pino from 'pino';

const pinoPretty = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: false,
    },
  },
};
const logger = pino({
  level: process.env.NODE_ENV === 'local' ? 'debug' : 'info',
  formatters: {
    level: (level) => ({ level }),
  },
  messageKey: 'message',
  timestamp: () => `,"time": "${new Date().toISOString()}"`,
  ...(['test', 'local'].includes(process.env.NODE_ENV || '') ? pinoPretty : {}),
});

export default logger;
