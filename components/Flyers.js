import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import textStyle from '../utils/textstyle'

class Bulletin extends Component {
	render() {
		const { style, navigate } = this.props
		return (
			<TouchableOpacity style={[styles.calendar, style]}
				onPress={() => navigate()}>
				<FontAwesome name="newspaper-o" size={40} color="blue"/>
				<Text style={textStyle.main}>
					Bulletin
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

export default Bulletin
