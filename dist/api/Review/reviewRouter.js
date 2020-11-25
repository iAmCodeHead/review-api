"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const controllerHandler_1 = require("../../utils/controllerHandler");
const reviewController_1 = require("./reviewController");
const reviewValidation_1 = require("./reviewValidation");
const router = express_1.default.Router();
const call = controllerHandler_1.controllerHandler;
const Review = new reviewController_1.ReviewController();
router.use(middlewares_1.validation(reviewValidation_1.ReviewValidationSchema));
router.get('/', call(Review.getAllReviews, (req, _res, _next) => []));
router.post('/create', call(Review.addNewReview, (req, _res, _next) => [req.body]));
router.get('/:id', call(Review.getReviewByOrg, (req, _res, _next) => [req.params.id]));
router.patch('/:id', call(Review.validateReview, (req, _res, _next) => [req.params.id]));
exports.reviewRouter = router;
