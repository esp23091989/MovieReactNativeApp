import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import AppWithNavigationState from './navigators'


const store = createStore(rootReducer,
      applyMiddleware(thunk),
);
const MoviesApp = () => {
	return (
		<Provider store={store}>
			<AppWithNavigationState/>
		</Provider>
	)
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('test', () => MoviesApp);