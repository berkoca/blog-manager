import { Request, Response } from "express";
import httpStatus from "http-status";

export class AuthenticationController {
    public async login(req: Request, res: Response) {
        try {
            
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }
}