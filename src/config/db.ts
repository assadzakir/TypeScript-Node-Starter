
/**
 * Created by assad.zakir on 8/17/2018.
 */
import * as config from './config';
import * as redis from 'redis';
import { default as logger } from './../util/logger';

export class RedisConfig {
    static client: any = null;

    createConnection():void {
        logger.log(config.redis.port, config.redis.host);
        RedisConfig.client = redis.createClient(
            { port: config.redis.port, host: config.redis.host }
            );

        RedisConfig.client.on('ready', () => {
            logger.log('info', 'Redis is ready');
        });

        RedisConfig.client.on('error', (error: any) => {
            logger.log('error', 'Error in Redis', error);
        });
    }

    getRedisClient(): any {
        if (RedisConfig.client == null) {
            this.createConnection();
        }

        return RedisConfig.client;
    }
}
