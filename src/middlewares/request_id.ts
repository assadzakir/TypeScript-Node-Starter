import * as uniqid from 'uniqid';
import { Response, NextFunction } from 'express';
import logger from '../util/logger';
import { CustomRequest } from '../interfaces/custom-request';

export default function (req: CustomRequest, res: Response, next: NextFunction): void {
    req.coRelationID = uniqid();
    logger.info(`${req.coRelationID} - new request has been received `);
    next();
}
