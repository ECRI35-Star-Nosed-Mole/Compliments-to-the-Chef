const { reviewModel } = require('../models/models.js');

const reviewController = {};

reviewController.getReview = async (req, res, next) => {
  const { username, restaurant_name } = req.body;
  try {
    const response = await reviewModel.find({ username, restaurant_name });
    if (!response) return next({ message: 'No reviews by this user.' });
    res.locals.review = response;
    return next();
  } catch (err) {
    const errObj = {
      log: 'Express error handler caught in getStudent middleware error',
      status: 400,
      message: { err: 'No reviews found' },
    };
    return next(errObj);
  }
};

reviewController.createReview = async (req, res, next) => {
  const { username, restaurant_name, vote, review_content, date } = req.body;

  try {
    const response = await reviewModel.create({
      username, restaurant_name, vote, review_content, date
    });
    res.locals.newReview = response;
    return next();
  } catch (err) {
    const errObj = {
      log: 'Express error handler caught in createStudent middleware error',
      status: 400,
      message: { err: 'Incorrect and/or incomplete data submitted' },
    };
    return next(errObj);
  }
},

reviewController.updateReview = async (req, res, next) => {
  const { username, restaurant_name, vote, review_content, date } = req.body;

  try {
    const response = await reviewModel.updateOne(
      { username, restaurant_name, date },
      { $set: { username, restaurant_name, vote, review_content, date } }
    );
    res.locals.updatedReview = response;
    return next();
  } catch (err) {
    const errObj = {
      log: 'Express error handler caught updateReview middleware error',
      status: 400,
      message: {
        err: 'Incorrect data submitted / Update failed',
      },
    };
    return next(errObj);
  }
},

reviewController.deleteReview = async (req, res, next) => {
  const { username, restaurant_name, date } = req.body;

  try {
    const response = await reviewModel.findOneAndDelete({ username, restaurant_name, date });
    res.locals.deletedReview = response;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = reviewController;
