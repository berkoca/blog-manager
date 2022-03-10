import { Request, Response } from "express";
import httpStatus from "http-status";
import Post from "../models/Post";
import path from "path";
import fs from "fs-extra";

export class PostController {
    public async getPosts(req: Request, res: Response) {
        try {
            const posts = await Post.find().populate({ path: "user_id", select: "fullname" });
            return res.status(httpStatus.OK).json({ errors: [], data: posts });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }
    
    public async getPost(req: Request, res: Response) {
        try {
            const post = await Post.findById(req.params.id).populate({ path: "user_id", select: "fullname" })
            if (!post) {
                return res.status(httpStatus.OK).json({ errors: [{ message: `Post with id: ${req.params.id} has not been found.` }] });
            }

            return res.status(httpStatus.OK).json({ errors: [], data: post });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }

    public async createPost(req: Request, res: Response) {
        try {
            if (req.body.category_tags) req.body.category_tags.split(" ");
            req.body.user_id = req.user?.id;
            const post = await Post.create(req.body);
            if (req.files?.file) {
                const folder_path = path.join(__dirname, "../", "files", post.id);
                const image_path = path.join(folder_path, (req.files.file as any).name);
                const serve_path = path.join(post.id, (req.files.file as any).name)
                fs.mkdirpSync(folder_path);
                // @ts-ignore
                req.files.file.mv(image_path);
                await Post.findByIdAndUpdate(post.id, { image_path: serve_path })
            }
            return res.status(httpStatus.CREATED).json({ errors: [], data: post });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }

    public async deletePost(req: Request, res: Response) {
        try {
            const post = await Post.findByIdAndDelete(req.params.id);
            if (!post) {
                return res.status(httpStatus.NOT_FOUND).json({ errors: [{ message: `Post with id: ${req.params.id} has not been found.` }] });
            }
            return res.status(httpStatus.OK).json({ errors: [] });
        } catch (error) {
            console.error((error as Error).message);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ message: (error as Error).message }] });
        }
    }
}