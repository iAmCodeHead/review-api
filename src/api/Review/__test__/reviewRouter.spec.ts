import { BASE_PATH } from '../../../config';
import app from '../../../app';

import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('ReviewRouter', () => {
    it('should GET all reviews', async () => {
        const response = await chai.request(app).get(`${BASE_PATH}/reviews`);
        expect(response.status).to.eql(200);
    });

    // ...some more tests

});
