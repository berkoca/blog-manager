import { Router } from "express";
import authentication_router from "./authentication";
import blog_router from "./blog";

const router: Router = Router();

router.use("/authentication", authentication_router);
router.use("/blog", blog_router);

export default router;