import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import MoviesListScreen from '../screens/MoviesListScreen'

export const AppNavigator = new StackNavigator({
	MoviesList: { screen: MoviesListScreen }
});

const AppWithNavigationState = ({dispatch, nav}) => {
	console.log(this)
	return(<AppNavigator navigation={addNavigationHelpers({dispatch,state: nav})}/>)
}

const mapStateToProps = state => {
	return ({
		nav: state.nav
	})
};

export default connect(mapStateToProps)(AppWithNavigationState);