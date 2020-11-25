"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.UserValidationSchema = joi_1.default.object().keys({
    firstName: joi_1.default.string().alphanum().max(30).required(),
    lastName: joi_1.default.string().alphanum().max(30).required(),
    email: joi_1.default.string().email().required(),
});
