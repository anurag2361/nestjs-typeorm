import * as Joi from 'joi';

export const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.number().required(),
}).options({ abortEarly: false, allowUnknown: true });
