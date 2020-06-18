import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

class Calendar extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.calendar}>
				<Text>Calendar</Text>
				<FontAwesome name="calendar" size={40} color="black"/>
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

export default Calendar
