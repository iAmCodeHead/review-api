"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./../enums");
class BaseController {
    // tslint:disable-next-line:max-line-length
    sendResponse({ data, message = 'OK', statusCode = enums_1.HttpStatusCode.OK, status = true }) {
        return { data, message, statusCode, status };
    }
}
exports.BaseController = BaseController;
