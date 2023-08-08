// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import winston from "winston";

export const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.APP_ENV !== 'production') {
  winstonLogger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}