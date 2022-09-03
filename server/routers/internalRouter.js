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
  res.status(200).end();
});

/* ************************ */

// REVIEW QUERIES //

// GET USER REVIEWS
router.get('/review', (req, res) => {
  console.log('/review GET route complete');
  res.status(200).end();
});

// POST USER REVIEWS
router.post('/review', (req, res) => {
  console.log('/review route complete');
  res.status(200).end();
});

// PUT USER REVIEWS
router.put('/review/?', (req, res) => {
  console.log('/review route complete');
  res.status(200).end();
});

// DELETE USER REVIEWS
router.delete('/review/?', (req, res) => {
  console.log('/review PATCH route complete');
  res.status(200).end();
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
