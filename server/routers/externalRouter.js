const path = require('path');
const express = require('express');
const router = express.Router();
const nytController = require('../controllers/nytController');
const yelpController = require('../controllers/yelpController');

// NY TIMES API //
router.get('/nyt', nytController.getReview, (req, res) => {
  console.log('/nyt GET route complete');
  res.status(200).send(res.locals.nytReview);
});

// YELP API //
router.get('/yelp', yelpController.getRestaurant, (req, res) => {
  console.log('/yelp GET route complete');
  res.status(200).json(res.locals.restaurant);
});

module.exports = router;
