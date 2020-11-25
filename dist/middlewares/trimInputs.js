"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trimStringProperties = (obj) => {
    if (obj !== null && typeof obj === 'object') {
        // tslint:disable-next-line:forin
        for (const prop in obj) {
            if (typeof obj[prop] === 'object') {
                return trimStringProperties(obj[prop]);
            }
            // if it's a string remove begin and end whitespaces
            if (typeof obj[prop] === 'string') {
                obj[prop] = obj[prop].trim();
            }
        }
    }
};
exports.trimInput = (req, _res, next) => {
    if (req.body) {
        trimStringProperties(req.body);
    }
    if (req.params) {
        trimStringProperties(req.params);
    }
    if (req.query) {
        trimStringProperties(req.query);
    }
    next();
};
