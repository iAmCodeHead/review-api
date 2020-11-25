import { OrganizationService } from './orgService';
import { BaseController } from '../baseController';

/**
 * ORganization controller
 *
 * @export
 * @class OrgController
 */
export class OrgController extends BaseController {
    private orgService = new OrganizationService();

    public getAllOrganizations = async () => {
        const orgs = await this.orgService.getAllOrganizations();
        return this.sendResponse({ data: orgs });
    }

}
