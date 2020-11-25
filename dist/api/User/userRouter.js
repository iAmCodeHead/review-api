"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const controllerHandler_1 = require("../../utils/controllerHandler");
const userController_1 = require("./userController");
const userValidation_1 = require("./userValidation");
const router = express_1.default.Router();
const call = controllerHandler_1.controllerHandler;
const User = new userController_1.UserController();
router.use(middlewares_1.validation(userValidation_1.UserValidationSchema));
router.get('/', call(User.getAllUsers, (req, _res, _next) => [req.params.id]));
router.post('/login', call(User.login, (req, _res, _next) => [req.body]));
exports.userRouter = router;
