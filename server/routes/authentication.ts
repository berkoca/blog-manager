import { Router } from "express";
import { AuthenticationController } from "../controllers/AuthenticationController";

const controller = new AuthenticationController();
const authentication_router: Router = Router();

authentication_router.post("/login", controller.login);

export default authentication_router;