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
  level: ['test', 'local', 'development'].includes(process.env.NODE_ENV || '') ? 'debug' : 'info',
  formatters: {
    level: (level) => ({ level }),
  },
  messageKey: 'message',
  timestamp: () => `,"time": "${new Date().toISOString()}"`,
  ...(['test', 'local', 'development'].includes(process.env.NODE_ENV || '') ? pinoPretty : {}),
});

export default logger;
