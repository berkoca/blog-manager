import Joi from "joi";

export class AuthenticationSchema {
    static login(): Joi.ObjectSchema {
        return Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
    }
}