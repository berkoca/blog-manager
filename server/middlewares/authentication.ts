import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { verify } from "jsonwebtoken";

interface UserPayload {
    id: string;
    fullname: string;
    email: string;
}

// Adding user object under req object => req.user
declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export function authentication(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).json({ errors: [{ message: "Missing authorization header." }] });
    }

    token = token.split(" ")[1];

    verify(token, process.env.JWT_SECRET!, (err, decoded: any) => {
        if (err) {
            return res.status(httpStatus.UNAUTHORIZED).json({ errors: [{ message: err.message }] });
        }

        req.user = decoded;
        return next();
    });
}