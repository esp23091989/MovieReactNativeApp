import React, { Component } from 'react'
import { Text, View, ActivityIndicator, ListView } from 'react-native'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'
import MovieItem from '../components/MovieItem'

class MoviesListContainer extends Component{

	constructor(props){
		super(props);
    	this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	console.log(this);
	}

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(fetchMovies());
		console.log(this.props);
	}

	render() {
		const { isFetching, movies } = this.props.moviesData;
		return(
			<View>
				<ActivityIndicator animating = {isFetching} size = 'large'/>
				<ListView 
					dataSource = { this.ds.cloneWithRows(movies) }
					renderRow = {
						(movie) => (<MovieItem movie = {movie}/>) 
					} 
				/>
			</View>
		);
	}
};




const mapStateToProps = (state) => ({
	moviesData: state.movies
});

export default connect(mapStateToProps)(MoviesListContainer);