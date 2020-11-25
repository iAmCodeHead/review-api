import { BASE_PATH } from '../../../config';
import app from '../../../app';

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

let chaiLib = <any> chai;
let chaiRequestLib = chaiLib.default.request;

describe('UserRouter', () => {
    it('should GET all users', async () => {
        // const response = {status: 200};
        const response = await chaiRequestLib(app).get(`${BASE_PATH}/user`);
        expect(response.status).to.eql(200);
    });

    // ...some more tests

});
