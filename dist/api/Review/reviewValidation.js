"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.ReviewValidationSchema = joi_1.default.object().keys({
    orgId: joi_1.default.number().required(),
    reviewer: joi_1.default.string().max(40).required(),
    review: joi_1.default.string().required(),
});
