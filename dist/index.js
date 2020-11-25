"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const utils_1 = require("./utils");
const port = config_1.PORT || 3000;
app_1.default.set('port', port);
app_1.default.listen(app_1.default.get('port'), (err) => {
    if (err) {
        return utils_1.logger.error(err);
    }
    return utils_1.logger.info(`server is listening on ${port}`);
});
