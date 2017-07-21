import { FETCHING_MOVIES, FETCHING_MOVIES_SUCCESS, FETCHING_FAILURE , DETAILS_MOVIE} from '../constants'
import { AppNavigator } from '../navigators'
import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

const initialState = {
	isFetching: false,
	movies: []
}

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('MoviesList'));

const navigationReducer = (state = initialNavState, action) => {
	let nextState;
	switch(action.type){
		case DETAILS_MOVIE:
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ 
					routeName: 'DetailsMovie',
					params: action.params
				}),
				state
			);
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);

	}
	return nextState || state;
}



const movieReduces = (state = initialState, action) => {
	switch(action.type){
		case FETCHING_MOVIES:
			return { 
				...state,
				isFetching: true
			}
		case FETCHING_MOVIES_SUCCESS:
			return{
				...state,
				isFetching: false,
				movies: action.movies
			}
		default:
			return state
	}
}

const appReducer = combineReducers({
	nav: navigationReducer,
	movies: movieReduces
});

export default appReducer;

