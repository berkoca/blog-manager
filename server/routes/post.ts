import { Router } from "express";
import { PostController } from "../controllers/PostController";
import { authentication } from "../middlewares/authentication";
import { validation } from "../middlewares/validation";
import { PostValidationSchema } from "../validations/PostValidationSchema";

const controller: PostController = new PostController();
const post_router: Router = Router();

post_router.get("/", controller.getPosts);
post_router.post("/", authentication, validation(PostValidationSchema.create()), controller.createPost);
post_router.delete("/:id", authentication, controller.deletePost);

export default post_router;