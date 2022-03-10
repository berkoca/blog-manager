import Joi from "joi";

export class PostValidationSchema {
    static create(): Joi.ObjectSchema {
        return Joi.object({
            title: Joi.string().min(3).required(),
            summary: Joi.string().min(3).required(),
            content: Joi.string().min(3).required(),
            category_tags: Joi.string()
        });
    }
}