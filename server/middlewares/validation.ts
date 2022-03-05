import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Joi from "joi";

export function validation(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false, allowUnknown: true, stripUnknown: true });
        
        if (error) {
            return res.status(httpStatus.BAD_REQUEST).json({ errors: error.details.map(e => { return { message: e.message } }) });
        }

        req.body = value;
        return next();
    }
}