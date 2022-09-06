import axios from 'axios';
const URL = 'http://localhost:3000/';

export const fetchAllReviews = () => axios.get(URL);
