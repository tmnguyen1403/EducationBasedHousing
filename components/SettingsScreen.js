import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import textStyle from '../utils/textstyle'
import CustomText from './CustomText'

class SettingsScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<CustomText content="Hello"/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})

export default SettingsScreen
