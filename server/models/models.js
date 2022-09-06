const mongoose = require('mongoose');
const pw = 'codesmith'; // NOTE: use environmental variable
const URI = `mongodb+srv://starnosedmole:${pw}@star-nosed-mole.t9b2xpp.mongodb.net/?retryWrites=true&w=majority`;


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
  restaurant_name: String,
  yelpId: String, //id
  name: String,
  image_url: String,
  yelpUrl: String, // url
  phone: String,
  categories: Array,
  yelpRating: Number, // rating
  location: Object,
  photos: Array,
  price: String,
});

const yelpModel = mongoose.model('yelp_restaurants', yelpSchema);

const reviewSchema = new Schema({
  username: String, 
  restaurant_name: String,
  vote: Boolean,
  review_content: String,
  date: Date
});

const reviewModel = mongoose.model('reviews', reviewSchema);

module.exports = {
  nytModel,
  yelpModel,
  reviewModel,
};
