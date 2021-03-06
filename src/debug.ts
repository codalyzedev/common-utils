import * as winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

export default logger;
