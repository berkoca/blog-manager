import { Router } from "express";
import { AuthenticationController } from "../controllers/AuthenticationController";
import { validation } from "../middlewares/validation";
import { AuthenticationValidationSchema } from "../validations/AuthenticationValidationSchema";

const controller: AuthenticationController = new AuthenticationController();
const authentication_router: Router = Router();

authentication_router.post("/login", validation(AuthenticationValidationSchema.login()), controller.login);

export default authentication_router;