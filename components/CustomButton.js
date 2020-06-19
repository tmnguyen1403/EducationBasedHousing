import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import textStyle from '../utils/textstyle'

function CustomButton({ name, icon, customStyle }){
	return (
		<TouchableOpacity style={[styles.dashboardDefault, customStyle]}>
			{icon}
			<Text style={textStyle.main}>
				{name}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	dashboardDefault: {
		backgroundColor: 'white',
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default CustomButton
