import Joi from "joi";

export class UserValidationSchema {
    static createUser(): Joi.ObjectSchema {
        return Joi.object({
            fullname: Joi.string().min(3).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(3).required()
        });
    }
}