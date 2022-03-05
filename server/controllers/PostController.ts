import { Request, Response } from "express";
import httpStatus from "http-status";
import Post from "../models/Post";

export class PostController {
    public async getPosts(req: Request, res: Response) {
        try {
            const posts = await Post.find();
            return res.status(httpStatus.OK).json({ errors: [], data: posts });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }

    public async createPost(req: Request, res: Response) {
        try {
            const post = await Post.create(req.body);
            return res.status(httpStatus.CREATED).json({ errors: [], data: post });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }
}