"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reviewModel_1 = require("./reviewModel");
class ReviewService {
    constructor() {
        this.getAllReviews = async () => {
            return await reviewModel_1.Reviews.find();
        };
        this.newReview = async (review) => {
            return await reviewModel_1.Reviews.save(review);
        };
        this.getOrgReview = async (id) => {
            return await reviewModel_1.Reviews.find({ orgId: id });
        };
        this.validateReview = async (id) => {
            const review = await reviewModel_1.Reviews.findOne(id);
            reviewModel_1.Reviews.merge(review, { isValidated: true });
            return await reviewModel_1.Reviews.save(review);
        };
    }
}
exports.ReviewService = ReviewService;
