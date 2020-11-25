"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllerHandler_1 = require("../../utils/controllerHandler");
const orgController_1 = require("./orgController");
const router = express_1.default.Router();
const call = controllerHandler_1.controllerHandler;
const Organization = new orgController_1.OrgController();
router.get('/', call(Organization.getAllOrganizations, (req, _res, _next) => []));
exports.orgRouter = router;
