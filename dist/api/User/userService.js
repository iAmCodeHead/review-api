"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("./userModel");
class UserService {
    constructor() {
        this.getAllUsers = async () => {
            return await userModel_1.Users.find();
        };
        this.login = async (data) => {
            return await userModel_1.Users.find({ where: data.username });
        };
    }
}
exports.UserService = UserService;
