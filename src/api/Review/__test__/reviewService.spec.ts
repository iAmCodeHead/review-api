import { ReviewFactory } from '../../../../tests/factories';
import { ReviewService } from '../reviewService';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

let reviewService: ReviewService;

describe('ReviewService', () => {
    beforeEach(() => {
        reviewService = new ReviewService();
    });

    it('should return all reviews', async () => {
        await ReviewFactory.make().save();

        const reviews = await reviewService.getAllReviews();
        expect(reviews.length).to.eql(1);
    });
});
