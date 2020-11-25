"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reviewService_1 = require("./reviewService");
const baseController_1 = require("../baseController");
/**
 * Review controller
 *
 * @export
 * @class ReviewController
 */
class ReviewController extends baseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.reviewService = new reviewService_1.ReviewService();
        this.addNewReview = async (review) => {
            const newReview = await this.reviewService.newReview(review);
            return this.sendResponse({ data: newReview });
        };
        this.getAllReviews = async () => {
            const allReviews = await this.reviewService.getAllReviews();
            return this.sendResponse({ data: allReviews });
        };
        this.getReviewByOrg = async (id) => {
            const reviews = await this.reviewService.getOrgReview(id);
            return this.sendResponse({ data: reviews });
        };
        this.validateReview = async (id) => {
            const review = await this.reviewService.validateReview(id);
            return this.sendResponse({ data: review });
        };
    }
}
exports.ReviewController = ReviewController;
