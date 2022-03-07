import { Request, Response } from "express";
import httpStatus from "http-status";
import User from "../models/User";

export class UserController {
    async getUsers(req: Request, res: Response) {
        try {
            const users = await User.find();
            return res.status(httpStatus.OK).json({ errors: [], data: users });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }
    
    async createUser(req: Request, res: Response) {
        try {
            const user = await User.create(req.body);
            return res.status(httpStatus.OK).json({ errors: [], data: user });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }
}