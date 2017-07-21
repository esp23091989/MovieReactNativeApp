import { FETCHING_MOVIES, FETCHING_MOVIES_SUCCESS, FETCHING_MOVIES_FAILURE, API_KEY} from './constants'

export const getMovies = () => ({
	type: FETCHING_MOVIES
});

export const getMoviesSuccess = movies => ({
	type: FETCHING_MOVIES_SUCCESS,
	movies
})

export const fetchMovies = () => dispatch => {
	dispatch(getMovies());
	return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
		.then(response => response.json())
		.then(json => {
			console.log(json.results)
			return dispatch(getMoviesSuccess(json.results))

		});
}