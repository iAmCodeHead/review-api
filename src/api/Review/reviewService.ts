import { Reviews} from './reviewModel';

export class ReviewService {

    public getAllReviews = async () => {
        return await Reviews.find();
    }

    public newReview = async (review) => {
        return await Reviews.save(review);
    }

    public getOrgReview = async (id) => {
        return await Reviews.find({ orgId: id });
    }

    public validateReview = async (id) => {
        const review = await Reviews.findOne(id);
        Reviews.merge(review, { isValidated : true});
        return await Reviews.save(review);
    }

}
