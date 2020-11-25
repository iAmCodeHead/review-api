import { UserService } from './../userService';
import { UserFactory } from '../../../../tests/factories';

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

let userService: UserService;

describe('UserService', () => {
    beforeEach(() => {
        userService = new UserService();
    });

    it('should return all users', async () => {
        await UserFactory.make().save();

        const users = await userService.getAllUsers();
        expect(users.length).to.eql(1);
    });
});
