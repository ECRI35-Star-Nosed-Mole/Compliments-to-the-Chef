const { reviewModel } = require('../models/models.js');

const reviewController = {};

//GET all reviews in the database
// reviewController.getAllReviews = async (req, res, next) => {
//   try {
//     const response = await reviewModel.find({});
//     res.locals.allReviews = response;
//     console.log('GET ALL REVIEWS', res.locals.allReviews);
//     return next();
//   } catch (err) {
//     const errObj = {
//       log: 'Express error handler triggered in getAllReviews middleware',
//       status: 400,
//       message: { err: 'No reviews found' },
//     };
//     return next(errObj);
//   }
// };

//GET all reviews by a specific user
reviewController.getUserReviews = async (req, res, next) => {
  const { username } = req.body;
  try {
    const response = await reviewModel.find({ username });
    res.locals.userReviews = response;
    return next();
  } catch (err) {
    const errObj = {
      log: 'Express error handler triggered in getUserReviews middleware ',
      status: 400,
      message: { err: 'No reviews found' },
    };
    return next(errObj);
  }
};

//GET all reviews for a specific restaurant
reviewController.getAllRestaurantReviews = async (req, res, next) => {
  // const { restaurant_name } = req.body;
  const restaurant_name = 'karasu';
  try {
    const response = await reviewModel.find({ restaurant_name });
    res.locals.restaurantReviews = response;
    // res.locals.restaurantReviews = 'test';
    console.log(res.locals.restaurantReviews)
    return next();
  } catch (err) {
    const errObj = {
      log: 'Express error handler triggered in getAllRestuants middleware',
      status: 400,
      message: { err: 'No reviews found' },
    };
    return next(errObj);
  }
};

//POST a new review by a specific user
(reviewController.createReview = async (req, res, next) => {
  const { username, restaurant_name, vote, review_content } = req.body;
  const date = new Date();

  try {
    const response = await reviewModel.create({
      username,
      restaurant_name,
      vote,
      review_content,
      date,
    });
    res.locals.newReview = response;
    return next();
  } catch (err) {
    const errObj = {
      log: 'Express error handler triggered in createReview middleware',
      status: 400,
      message: { err: 'Incorrect and/or incomplete data submitted' },
    };
    return next(errObj);
  }
}),
  //PUT a specific restaurant review if found
  (reviewController.updateReview = async (req, res, next) => {
    const { username, restaurant_name, vote, review_content, date } = req.body;

    try {
      const response = await reviewModel.findOneAndUpdate(
        { username, restaurant_name },
        { $set: { vote, review_content, date } },
        { new: true, upsert: true }
      );
      res.locals.updatedReview = response;
      console.log('UPDATE REVIEW', res.locals.updatedReview); // NOTE: remove in prod
      return next();
    } catch (err) {
      const errObj = {
        log: 'Express error handler triggered updateReview middleware',
        status: 400,
        message: {
          err: 'Incorrect data submitted / Update failed',
        },
      };
      return next(errObj);
    }
  }),
  //DELETE a specific restaurant review
  (reviewController.deleteReview = async (req, res, next) => {
    const { username, restaurant_name } = req.body;

    try {
      const response = await reviewModel.findOneAndDelete({
        username,
        restaurant_name,
      });
      return next();
    } catch (err) {
      const errObj = {
        log: 'Express error handler triggered in deleteReview middleware',
        status: 400,
        message: {
          err: 'Incorrect data submitted. Delete failed',
        },
      };
      return next(errObj);
    }
  });

module.exports = reviewController;
