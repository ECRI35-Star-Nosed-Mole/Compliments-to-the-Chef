import * as backend from '../../components/server/fetchAPI';
// action creactor
export const getAllReviews = () => async (dispatch) => {
	try {
		// waits for data to be fetched from backend
		const { data } = await backend.fetchAllReviews();
		dispatch({ type: 'FETCH_ALL_REVIEWS', payload: data });
	} catch (error) {
		console.log('error fetching api to get all reviews', error.message);
	}
};
