import { Router } from "express";
import authentication_router from "./authentication";
import post_router from "./post";
import user_router from "./user";

const router: Router = Router();

router.use("/authentication", authentication_router);
router.use("/posts", post_router);
router.use("/users", user_router);

export default router;