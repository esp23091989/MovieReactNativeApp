import React, { Component } from 'react'
import { Text, View, ActivityIndicator, ListView } from 'react-native'
import { connect } from 'react-redux'
import { fetchMovies, getMovies } from '../actions'
import MoviesListContainer from '../containers/MoviesListContainer'

const MoviesListScreen = (props) => (
	<MoviesListContainer/>
);

export default MoviesListContainer;


