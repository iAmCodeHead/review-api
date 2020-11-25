"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const lodash_1 = __importDefault(require("lodash"));
const enums_1 = require("../enums");
/**
 *  Validates incoming input in the body of a request.
 *  Runs only on POST or PUT requests
 *
 * @export
 * @param {*} schema validationSchema for this route
 * @returns
 */
exports.validation = (schema, options) => {
    // enabled HTTP methods for request data validation
    const _supportedMethods = ['post', 'put'];
    // Joi validation options
    const _validationOptions = {
        abortEarly: true,
        allowUnknown: true,
        stripUnknown: true,
        ...options,
    };
    // return the validation middleware
    return (req, res, next) => {
        const method = req.method.toLowerCase();
        if (lodash_1.default.includes(_supportedMethods, method) && schema) {
            try {
                /**
                 * Validate req.body using the schema and validation options
                 * Replace req.body with the data after Joi validation
                 */
                req.body = joi_1.default.attempt(req.body, schema, _validationOptions);
                next();
            }
            catch (error) {
                const message = error.details[0].message.replace(/['"]/g, '');
                /* Format response */
                const JoiError = {
                    status: false,
                    message,
                };
                res.status(enums_1.HttpStatusCode.UNPROCESSABLE_ENTITY).json(JoiError);
            }
        }
        else {
            next();
        }
    };
};
