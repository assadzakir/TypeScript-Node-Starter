import * as express from 'express';
import { default as logger } from './../util/logger';
import { CustomRequest } from '../interfaces/custom-request';
import { RedisConfig } from '../config/db';

class UserController {
    static redisClient: any = new RedisConfig().getRedisClient();

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getUser(req: CustomRequest, res: express.Response, next: express.NextFunction): void {
        UserController.redisClient.set('string key', 'string val');
        res.status(200).json('Hello world');
        logger.info(`${req.coRelationID} - new entry`);
    }

    public hello = (): string => 'Hello world!';

}

export default new UserController();
