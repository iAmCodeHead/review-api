import { OrganizationFactory } from '../../../../tests/factories';
import { OrganizationService } from '../orgService';

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

let orgService: OrganizationService;

describe('OrganizationService', () => {
    beforeEach(() => {
        orgService = new OrganizationService();
    });

    it('should return all organizations', async () => {
        await OrganizationFactory.make().save();

        const allOrgs = await orgService.getAllOrganizations();
        expect(allOrgs.length).to.eql(1);
    });
});
