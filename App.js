import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard'

export default function App() {
  return (

		<View style={styles.container}>
			<Dashboard />
		</View>

  );
}

const styles = StyleSheet.create({
	container: {
	flex: 1,
	height: 500,
	},
})
