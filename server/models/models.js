const mongoose = require('mongoose');
const URI = `mongodb+srv://starnosedmole:${pw}@star-nosed-mole.t9b2xpp.mongodb.net/?retryWrites=true&w=majority`;
const pw = 'codesmith'; // NOTE: use environmental variable

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'cc',
});

const Schema = mongoose.Schema;

const nytSchema = new Schema({
  restaurant_name: String,
  abstract: String,
  web_url: String,
  snippet: String,
  lead_paragraph: String,
  source: String,
  headline: Object,
  pub_date: Date,
  byline: Object,
});

const nytModel = mongoose.model('nyt_reviews', nytSchema);

const yelpSchema = new Schema({
  name: { type: String, required: true },
  yelpId: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: Object, required: true },
  url: { type: String, required: true },
  rating: { type: Number, required: true },
});

const yelpModel = mongoose.model('yelp_restaurants', yelpSchema);

module.exports = {
  nytModel,
  yelpModel,
};
