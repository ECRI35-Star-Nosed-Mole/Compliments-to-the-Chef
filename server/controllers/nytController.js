const fetch = require('node-fetch');
const { nytModel } = require('./models/models.js');

const nytController = {};
nytController.apiKey = '07cDbXzAu2mlaG4AD6aGxfABGC4uzlGZ'; // NOTE: Store as an environmental variable.
nytController.url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytController.apiKey}`;
/**
 * Get review data from a database. If data is not found, fetch data from the NY Times Articleexternal API.
 */
nytController.getReview = async (req, res, next) => {
  console.log('nytController started'); // !temp
  const { restaurant_name } = req.body;
  const query = `&q=${restaurant_name}&fq=news_desk:("Dining")`;

  if (!nytModel.findOne({ restaurant_name })) {
    try {
      const response = await fetch(nytController.url + query);
      const data = await response.json();
      console.log(await data); // !temp
      const doc = await new nytModel({ restaurant_name, data });
      console.log(await doc); // !temp
      const save = await doc.save();
      return next();
    } catch (err) {
      return next({
        log: 'Error in nytController.getReview',
        message: err,
      });
    }
  }

  res.locals.nytReview = await nytModel.findOne({ restaurant_name });
  return next();
};

module.exports = nytController;
