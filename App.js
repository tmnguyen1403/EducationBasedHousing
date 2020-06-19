import * as React from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Dashboard from './components/Dashboard'
import BottomTabNavigator from './components/BottomTabNavigator'

export default function App() {

  return (

		<View style={styles.container}>
			<BottomTabNavigator/>
		</View>
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
	},
})
