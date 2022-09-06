import {
	FETCH_ALL_REVIEWS,
	CREATE,
	UPDATE,
	DELETE,
} from '../constants/actionsTypes';
export default (state = [], action) => {
	switch (action.type) {
		case FETCH_ALL_REVIEWS:
			return action.payload;
		case CREATE:
			return state;
		case UPDATE:
			return state;
		case DELETE:
			return state;
		default:
			return state;
	}
};
