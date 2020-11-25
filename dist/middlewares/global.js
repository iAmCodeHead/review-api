"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const trimInputs_1 = require("./trimInputs");
exports.default = (app) => {
    app.use(express_rate_limit_1.default({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    app.use(helmet_1.default());
    app.use(cors({ maxAge: 1728000 }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(morgan_1.default('dev'));
    app.use(trimInputs_1.trimInput);
};
