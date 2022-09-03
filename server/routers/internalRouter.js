const path = require('path');
const express = require('express');
const router = express.Router();

router.use('/api', (req, res) => {
  console.log('/api route complete');
  res.status(200).end();
});

// SECURITY NOTE: Need to add sanitization middleware for req.body queries.

// RESTAURANT QUERIES //

// GET RESTAURANT
router.get('/restaurant', (req, res) => {
  console.log('/restaurant GET route complete');
  res.status(200).end();
});

/* ************************ */

// REVIEW QUERIES //

// GET REVIEW
router.get('/review', (req, res) => {
  console.log('/review GET route complete');
  res.status(200).end();
});

// POST REVIEW
router.post('/review', (req, res) => {
  console.log('/review route complete');
  res.status(200).end();
});

// PUT REVIEW (updating entire review)
router.put('/review/?', (req, res) => {
  console.log('/review route complete');
  res.status(200).end();
});

// DELETE REVIEW
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
