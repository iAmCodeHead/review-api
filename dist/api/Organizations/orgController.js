"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orgService_1 = require("./orgService");
const baseController_1 = require("../baseController");
/**
 * ORganization controller
 *
 * @export
 * @class OrgController
 */
class OrgController extends baseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.orgService = new orgService_1.OrganizationService();
        this.getAllOrganizations = async () => {
            const orgs = await this.orgService.getAllOrganizations();
            return this.sendResponse({ data: orgs });
        };
    }
}
exports.OrgController = OrgController;
