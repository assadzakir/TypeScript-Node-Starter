import * as express from 'express';
import UserRouter from './UserRouter';
import { IServer } from '../interfaces/ServerInterface';
import { default as logger } from '../util/logger';

export default class Routes {
    /**
     * @param  {IServer} server
     * @returns void
     */
    static init(server: IServer): void {
        const router: express.Router = express.Router();

        server.app.get('/', (req: express.Request, res: express.Response): void => {
            res.status(200).json('Typescript api is up and running');
            logger.info(`Typescript api is up and running`);
        });
        // users
        server.app.use('/v1/users', new UserRouter().router);
    }
}
