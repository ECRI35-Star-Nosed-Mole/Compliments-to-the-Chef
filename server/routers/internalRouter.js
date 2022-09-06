const path = require('path');
const express = require('express');
const router = express.Router();

const nytController = require('../controllers/nytController');
const yelpController = require('../controllers/yelpController');
const reviewController = require('../controllers/reviewController');

router.use('/api', (req, res) => {
  console.log('/api route complete');
  res.status(200).end();
});

// SECURITY NOTE: Need to add sanitization middleware for req.body queries.

// RESTAURANT QUERIES //

// GET RESTAURANT INFO
router.get('/restaurant/info', yelpController.getRestaurant, (req, res) => {
  console.log('/restaurant GET route complete');
  res.status(200).send(res.locals.restaurant);
});

// GET RESTAURANT CRITIC REVIEWS
router.get('/restaurant/critic', nytController.getReview, (req, res) => {
  console.log('/restaurant GET route complete');
  res.status(200).send(res.locals.nytReview);
});

/* ************************ */

// REVIEW QUERIES //

// GET ALL REVIEWS
// router.get('/reviews', reviewController.getAllReviews, (req, res) => {
//   console.log('GET ALL REVIEWS route complete');
//   res.status(200).json(res.locals.allReviews);
// });

router.get('/restaurantReviews', reviewController.getAllRestaurantReviews, (req, res) => {
  console.log('/review GET route complete');
  res.status(200).json(res.locals.restaurantReviews);
});

router.get('/restaurantUserReviews', reviewController.getUserReviews, (req, res) => {
  console.log('/review GET route complete');
  res.status(200).json(res.locals.userReviews);
});

// POST USER REVIEWS
router.post('/reviews', reviewController.createReview, (req, res) => {
  console.log('/review POST route complete');
  res.status(200).json(res.locals.newReview);
});

// PUT USER REVIEWS
router.put('/reviews', reviewController.updateReview, (req, res) => {
  console.log('/review PUT complete');
  res.status(200).json(res.locals.updatedReview);
});

// DELETE USER REVIEWS
router.delete('/reviews', reviewController.deleteReview, (req, res) => {
  console.log('/review DELETE complete');
  res.status(200).send('Record successfully deleted');
});

/* ************************ */

// USER QUERIES //

// GET USER
router.get('/user', (req, res) => {
  console.log('/user GET route complete');
  res.status(200).end();
});

// POST USER
router.post('/user', (req, res) => {
  console.log('/user POST route complete');
  res.status(200).end();
});

module.exports = router;
