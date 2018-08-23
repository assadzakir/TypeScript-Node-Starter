import { Request } from 'express';

export interface CustomRequest extends Request {
    coRelationID: string;
}
