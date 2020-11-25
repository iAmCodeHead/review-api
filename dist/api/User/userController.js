"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("./userService");
const baseController_1 = require("../baseController");
/**
 * User controller
 *
 * @export
 * @class UserController
 */
class UserController extends baseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.userService = new userService_1.UserService();
        this.getAllUsers = async () => {
            const users = await this.userService.getAllUsers();
            return this.sendResponse({ data: users });
        };
        this.login = async () => {
            const loggedInAdminUser = await this.userService.login();
            return this.sendResponse({ data: loggedInAdminUser });
        };
    }
}
exports.UserController = UserController;
