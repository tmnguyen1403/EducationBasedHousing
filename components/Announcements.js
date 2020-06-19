import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import textStyle from '../utils/textstyle'

class Announcements extends Component {
	render() {
		const { generalStyle } = this.props
		return (
			<TouchableOpacity style={[styles.calendar, generalStyle]}>
				<FontAwesome name="newspaper-o" size={40} color="blue"/>
				<Text style={textStyle.main}>
					Announcements
				</Text>
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

export default Announcements
