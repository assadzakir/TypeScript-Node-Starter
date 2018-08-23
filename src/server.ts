import * as express from 'express';
import Routes from './router/routes';
import Middleware from './middlewares/middleware';
import * as createError from 'http-errors';
import { default as logger } from './util/logger';


/**
 * @class Server
 */
export class Server {
    // set app to be of type express.Application
    public app: express.Application;

    constructor() {
        this.app = express();
        Middleware.init(this);
        Routes.init(this);
        this.errorMiddleware();
    }
    errorMiddleware(): void {
       // catch 404 and forward to error handler
        this.app.use((req, res, next) => {
            next(createError(404));
        });

        // error handler
        this.app.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            logger.info(err.message);
            // render the error page
            res.status(err.status || 500);
            res.end(err.message);
        });
    }
}

// export
export default new Server().app;
