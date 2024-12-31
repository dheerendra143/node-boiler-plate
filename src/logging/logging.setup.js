const winston = require('winston');
const logger = winston.createLogger({
    exitOnError: false,
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exception.log' }),
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: 'rejections.log' }),
    ]
});

module.exports = {
    logger,
};
