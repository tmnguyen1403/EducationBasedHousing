import 'react-native-gesture-handler'
import * as React from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Dashboard from './components/Dashboard'
import BottomTabNavigator from './components/BottomTabNavigator'
import Login from './components/Login'

import BulletinView from './components/BulletinView'
//REDUX STATE
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
//TEST

export default function App() {

  return (
		<Provider store={createStore(reducer)}>

						<BulletinView/>

		</Provider>
  );
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	height: 500,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
		width: null,
		height: null,
	}
})
