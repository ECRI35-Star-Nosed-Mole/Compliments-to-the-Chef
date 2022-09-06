import { combineReducers } from 'redux';
import state from './reducer.js';
export default combineReducers({
	allReviews: state, //exporting all_reviews from reducer
});
