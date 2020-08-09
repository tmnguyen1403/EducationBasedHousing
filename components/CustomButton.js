import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import textStyle from '../utils/textstyle'

function CustomButton({ name, icon, customStyle, onPress }){
	return (
		<TouchableOpacity style={[styles.btnView, customStyle]}
			onPress={onPress}>
			{icon}
			<Text style={styles.btnText}>
				{name}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btnView: {
		marginTop: 5,
		backgroundColor: "#7d90c7",
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: 5,
	},
	btnText: {
		color: "white",
	}
})

export default CustomButton
