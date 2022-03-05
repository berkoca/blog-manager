import Joi from "joi";

export class PostSchema {
    static create(): Joi.ObjectSchema {
        return Joi.object({
            image_url: Joi.string().required(),
            title: Joi.string().min(3).required(),
            content: Joi.string().min(3).required(),
            category_tags: Joi.array().required(),
            user_id: Joi.string().min(3).required()
        });
    }
}