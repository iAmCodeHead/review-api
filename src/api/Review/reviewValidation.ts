import Joi from '@hapi/joi';

export const ReviewValidationSchema = Joi.object().keys({
    orgId: Joi.number().required(),
    reviewer: Joi.string().max(40).required(),
    review: Joi.string().required(),
});
