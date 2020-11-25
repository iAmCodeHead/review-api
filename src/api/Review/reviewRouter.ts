import express from 'express';
import { validation } from '../../middlewares';
import { controllerHandler } from '../../utils/controllerHandler';
import { ReviewController } from './reviewController';
import { ReviewValidationSchema } from './reviewValidation';

const router = express.Router();
const call = controllerHandler;
const Review = new ReviewController();

router.use(validation(ReviewValidationSchema));

router.get('/', call(Review.getAllReviews, (req, _res, _next) => []));

router.post('/create', call(Review.addNewReview, (req, _res, _next) => [req.body]));

router.get('/:id', call(Review.getReviewByOrg, (req, _res, _next) => [req.params.id]));

router.patch('/:id', call(Review.validateReview, (req, _res, _next) => [req.params.id]));

export const reviewRouter = router;
