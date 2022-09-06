const fetch = require('node-fetch');
const { nytModel } = require('../models/models');

const nytController = {};
nytController.apiKey = '07cDbXzAu2mlaG4AD6aGxfABGC4uzlGZ'; // NOTE: Store as an environmental variable.
nytController.url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytController.apiKey}`;
/**
 * Get review data from a database. If data is not found, fetch data from the NY Times Articleexternal API.
 */
nytController.getReview = async (req, res, next) => {
  const { restaurant_name } = req.query;

  const url =
    nytController.url + `&q=${restaurant_name}&fq=news_desk:("Dining")`;
  try {
    // pull from db
    res.locals.nytReview = await nytModel.findOne({ restaurant_name });
    console.log(res.locals.nytReview);
    // if empty, add to db and return
    if (!res.locals.nytReview) {
      const response = await fetch(url);
      const query = await response.json();
      const data = await query.response.docs[0];
      const {
        abstract,
        web_url,
        snippet,
        lead_paragraph,
        source,
        headline,
        pub_date,
        byline,
      } = data;
      const doc = await new nytModel({
        restaurant_name,
        abstract,
        web_url,
        snippet,
        lead_paragraph,
        source,
        headline,
        pub_date,
        byline,
      });
      const save = await doc.save();
      res.locals.nytReview = await nytModel.findOne({ restaurant_name });
    }

    return next();
  } catch (err) {
    return next({
      log: 'Error in nytController.getReview',
      message: err,
    });
  }
};

module.exports = nytController;
