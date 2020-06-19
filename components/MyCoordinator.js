import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import textStyle from '../utils/textstyle'

class MyCoordinator extends Component {

	render() {
		const { style } = this.props
		return (
			<TouchableOpacity style={[styles.calendar, style]}>
				<Ionicons name="ios-contact" size={40} color="blue"/>
				<Text style={textStyle.main}>My Coordinator</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	calendar: {
		backgroundColor: 'white',
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default MyCoordinator
