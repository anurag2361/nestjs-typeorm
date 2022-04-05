import * as Joi from 'joi';

export const userSchema = Joi.object({
  name: Joi.string().required(),
}).options({ abortEarly: false, allowUnknown: true });
