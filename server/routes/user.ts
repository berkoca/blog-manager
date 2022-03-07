import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authentication } from "../middlewares/authentication";
import { validation } from "../middlewares/validation";
import { UserValidationSchema } from "../validations/UserValidationSchema";

const controller: UserController = new UserController();
const user_router: Router = Router();

user_router.get("/", authentication, controller.getUsers);
user_router.post("/", authentication, validation(UserValidationSchema.createUser()), controller.createUser);

export default user_router;