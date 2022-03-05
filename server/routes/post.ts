import { Router } from "express";
import { PostController } from "../controllers/PostController";
import { authentication } from "../middlewares/authentication";
import { validation } from "../middlewares/validation";
import { PostSchema } from "../validations/PostSchema";

const controller: PostController = new PostController();
const post_router: Router = Router();

post_router.get("/", controller.getPosts);
post_router.post("/", authentication, validation(PostSchema.create()), controller.createPost);

export default post_router;