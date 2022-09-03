const yelpController = {};
const yelpApiKey =
  'BEARER _M1qinn5VEpazBeQsTU7ID5mamOCR3JLmNcjALFjoOwK-ip_OwbGRxPWyLv58NjN4-VLhLrMOZ3vlO1HPyMVd2s7AGmFs8aSwKzslPRUKIymxx_VstqwT0CIAG0TY3Yx';
const yelpUrl = 'https://api.yelp.com/v3/businesses/';
const yelpModel = require('../models/models');

/* Async func to find a single restaurant's details in our Mongoose db. 
If it doesn't exist, fetch them from Yelp API instead. */
yelpController.getRestaurant = async (req, res, next) => {
  //Hard coded restaurant id for not until we refactor for scale
  const karasuId = 'eyjeP9CJZ_gYgeJFP_vtpQ';
  // const { yelpId } = req.body;

  try {
    const mongooseRes = await yelpModel.findOne({ yelpId: karasuId });

    //Unsure if there is a better way to check for this. Open to refactor if so.
    if (mongooseRes == null || mongooseRes == []) {
      const yelpRes = await fetch(`${yelpUrl} + '/' ${karasuId}`).then((res) =>
        res.json()
      );

      const createdRestaurant = yelpModel.create({
        name: yelpRes.name,
        yelpId: yelpRes.id,
        image: yelpRes.image_url,
        location: yelpRes.location,
        url: yelpRes.url,
        rating: yelpRes.rating,
      });

      res.locals.restaurant = createdRestaurant;
      return next();
    }

    res.locals.restaurant = mongooseRes;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = yelpController;
