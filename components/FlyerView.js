import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

/**
 * @param {Date} d
 * @return {string} monthInEnglish
 */

export default function FlyerView({event})
{
	console.log("FlyerView ",event)
	return (
		<View style={styles.container}>
			<Image style=""
				source={require("../resources/images/kid_beach.jpg")}
			/>
		</View>

	)
}

const styles = StyleSheet.create({
	container:{
		margin: 5,
		marginBottom: 20,
		flex: 1,
		flexDirection: 'row',
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		height: 150,
	},
	event: {
		marginLeft: 20,
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		borderStyle: 'solid',
		borderColor: 'black',
		borderRadius: 1,
		borderLeftWidth: 1,
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		padding: 5,
	},
	date: {
		fontSize: 20,
	},
	btnView: {
		marginTop: 0,
		backgroundColor: "#7d90c7",
		height: 30,
		justifyContent: 'center',
		borderRadius: 5,
		padding: 5,
	},
	btnText: {
		color: "white",
	}
})
