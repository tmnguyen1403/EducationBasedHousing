import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class MyCoordinator extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.calendar}>
				<Text>My Coordinator</Text>
				<Ionicons name="ios-contact" size={40} color="black"/>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	calendar: {
		backgroundColor: 'powderblue',
		margin: 10,
		flex: 1,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default MyCoordinator
