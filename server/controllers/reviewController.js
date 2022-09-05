const { reviewModel } = require('../models/models.js');

const reviewController = {};

reviewController.getReviews = async (req, res, next) => {
  const { username, restaurant_name } = req.body;
  try {
    const response = await reviewModel.find({ username, restaurant_name });
    if (!response) return next({ message: 'No reviews by this user.' });
    res.locals.reviews = response;
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
  const { username, restaurant_name, vote, review_content } = req.body;
  const date = new Date(); 

  try {
    const response = await reviewModel.create({
      username, restaurant_name, vote, review_content, date
    });
    res.locals.newReview = response;
    return next();
  } catch (err) {
    const errObj = {
      log: 'Express error handler caught in createReview middleware error',
      status: 400,
      message: { err: 'Incorrect and/or incomplete data submitted' },
    };
    return next(errObj);
  }
},

reviewController.updateReview = async (req, res, next) => {
  const { username, restaurant_name, vote, review_content, date } = req.body;
  const _id = '631684cbe9535820980b003b';

  try {
    const response = await reviewModel.findByIdAndUpdate(
      { _id },
      { $set: { username, restaurant_name, vote, review_content, date } }, 
      { new: true } 
    );
    res.locals.updatedReview = response;
    console.log('UPDATE REVIEW', response);
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
  // const { _id } = req.body;
  const _id = '631684cbe9535820980b003b';

  try {
    const response = await reviewModel.findByIdAndDelete({ _id });
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = reviewController;
