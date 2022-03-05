import { Router } from "express";
import { PostController } from "../controllers/PostController";

const controller: PostController = new PostController();
const post_router: Router = Router();

post_router.get("/", controller.getPosts);
post_router.post("/", controller.createPost);

export default post_router;