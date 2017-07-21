import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { IMAGE_BASE_URL } from '../constants'

const MovieItem = (props) => {
	const { movie } = props;
	return(
		<View style = { styles.container } >
			<Image style = { styles.movieIcon } source = {{uri: IMAGE_BASE_URL + movie.poster_path}}/>
			<Text style = { styles.movieTitle }>
				{movie.title}s
			</Text>
		</View>
	)
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 16
	},

	movieIcon: {
		width: 50,
		height: 50,
	},

	movieTitle: {
		flex: 1,
		fontSize: 19,
		marginLeft: 8
	}

});

export default MovieItem;