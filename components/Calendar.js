import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import textStyle from '../utils/textstyle'

class Calendar extends Component {
	render() {
		const { style } = this.props
		return (
			<TouchableOpacity style={[styles.calendar, style]}>
				<FontAwesome name="calendar" size={40} color="blue"/>
				<Text style={textStyle.main}>Calendar</Text>
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

export default Calendar
