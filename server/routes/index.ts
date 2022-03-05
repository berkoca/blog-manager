import { Router } from "express";
import authentication_router from "./authentication";
import post_router from "./post";

const router: Router = Router();

router.use("/authentication", authentication_router);
router.use("/blog", post_router);

export default router;