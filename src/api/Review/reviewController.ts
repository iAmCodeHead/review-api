import { ReviewService } from './reviewService';
import { BaseController } from '../baseController';

/**
 * Review controller
 *
 * @export
 * @class ReviewController
 */
export class ReviewController extends BaseController {
    private reviewService = new ReviewService();

    public addNewReview = async (review) => {
        const newReview = await this.reviewService.newReview(review);
        return this.sendResponse({ data: newReview });
    }

    public getAllReviews = async () => {
        const allReviews = await this.reviewService.getAllReviews();
        return this.sendResponse({ data: allReviews });
    }

    public getReviewByOrg = async (id) => {
        const reviews = await this.reviewService.getOrgReview(id);
        return this.sendResponse({ data: reviews });
    }

    public validateReview = async (id) => {
        const review = await this.reviewService.validateReview(id);
        return this.sendResponse({ data: review });
    }

}
