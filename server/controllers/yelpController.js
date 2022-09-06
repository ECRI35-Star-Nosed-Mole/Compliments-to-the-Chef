const fetch = require('node-fetch');
const { yelpModel } = require('../models/models');

const yelpController = {};
const yelpApiKey =
  'BEARER _M1qinn5VEpazBeQsTU7ID5mamOCR3JLmNcjALFjoOwK-ip_OwbGRxPWyLv58NjN4-VLhLrMOZ3vlO1HPyMVd2s7AGmFs8aSwKzslPRUKIymxx_VstqwT0CIAG0TY3Yx';
const url = 'https://api.yelp.com/v3/businesses/search';


/* Async func to find a single restaurant's details in our Mongoose db. 
If it doesn't exist, fetch them from Yelp API instead. */
yelpController.getRestaurant = async (req, res, next) => {
  const { restaurant_name, location } = req.query;
  const searchQuery = `?term=${restaurant_name}&location=${location}`;

  try {
    // pull from db
    res.locals.restaurant = await yelpModel.findOne({ restaurant_name });
    // if empty, add to db and return
    if (!res.locals.restaurant) {
      const query = await fetch(url + searchQuery, {
        method: 'GET',
        headers: {
          'Authorization': yelpApiKey,
          'Content-Type': 'application/json'
        }
      });
      const response = await query.json();
      const data = await response.businesses[0];

      const { yelpID, name, image_url, yelpUrl, phone, categories, yelpRating, location, photos, price } = data;
      const save = await yelpModel.create({ restaurant_name, yelpID, name, image_url, yelpUrl, phone, categories, yelpRating, location, photos, price });
      res.locals.restaurant = await yelpModel.findOne({ restaurant_name }); 
    }

    return next();
  } catch (err) {
    return next({
      log: 'Error in yelpController.getRestaurant',
      message: err
    });
  }
};

module.exports = yelpController;
