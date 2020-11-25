import { UserService } from './userService';
import { BaseController } from '../baseController';

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class UserController extends BaseController {
    private userService = new UserService();

    public getAllUsers = async () => {
        const users = await this.userService.getAllUsers();
        return this.sendResponse({ data: users });
    }

    public login = async () => {
        const loggedInAdminUser = await this.userService.login();
        return this.sendResponse({ data: loggedInAdminUser });
    }
}
