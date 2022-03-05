import { Request, Response } from "express";
import JWT from "jsonwebtoken";
import httpStatus from "http-status";
import { Password } from "../library/Password";
import User from "../models/User";

export class AuthenticationController {
    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            // Check if there is user with given email address
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(httpStatus.BAD_REQUEST).json({ errors: [{ message: "Invalid credentials." }] });
            }
            
            // Check if given password is valid
            const isPasswordValid = await Password.check(password, user.password);
            if (!isPasswordValid) {
                return res.status(httpStatus.BAD_REQUEST).json({ errors: [{ message: "Invalid credentials." }] });
            }

            // Generate JWT
            const user_jwt = JWT.sign({
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }, process.env.JWT_SECRET!);

            return res.status(httpStatus.OK).json({ errors: [], data: user_jwt });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }
}