import { Router } from "express";
import { PostController } from "../controllers/PostController";
import { authentication } from "../middlewares/authentication";

const controller: PostController = new PostController();
const post_router: Router = Router();

post_router.get("/", controller.getPosts);
post_router.post("/", authentication, controller.createPost);

export default post_router;