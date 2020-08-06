import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { IMAGE_HOST } from '../utils/configs'
/**
 * @param {Date} d
 * @return {string} monthInEnglish
 */

export default function FlyerView({flyer})
{

	const uri = IMAGE_HOST + flyer.imageName
	console.log("FlyerView ",uri)
	return (
		<View style={styles.container}>
			<Text style={styles.flyerText}>{flyer.title}</Text>
			<Image style={styles.flyerImage}
				source={{uri: uri,}}
			/>
		</View>

	)
}

const styles = StyleSheet.create({
	container:{
		margin: 5,
		marginBottom: 20,
		flex: 1,
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		height: 300,
	},
	flyerText: {
		textAlign: 'center',
		fontSize: 20,
		padding: 5,
	},
	flyerImage: {
		width: "100%",
		height: "80%",
		marginTop: 10,
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
