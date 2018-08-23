import * as winston from 'winston';
import * as config from '../config/config';

const logger: any = new winston.Logger({
    transports: [
        new (winston.transports.Console)({
            timestamp: true,
            colorize: true,
            prettyPrint: true,
            level: config.logger.level
        })
    ]
});

export default logger;
