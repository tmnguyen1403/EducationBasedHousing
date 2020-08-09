import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import mainstyles from '../styles/main'

class Settings extends Component {
	render() {
		const { style } = this.props
		return (
			<TouchableOpacity style={style}>
				<Ionicons name="ios-settings" size={40} color="blue"/>
				<Text style={mainstyles.text}>Settings</Text>
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

export default Settings
