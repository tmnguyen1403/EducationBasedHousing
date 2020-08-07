import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { IMAGE_HOST } from '../utils/configs'
import CustomButton from './CustomButton'
import ImageModal from './ImageModal'
/**
 * @param {Date} d
 * @return {string} monthInEnglish
 */

export default class FlyerView extends Component
{
	state = {
		showModal: false
	}
	toggleModal(){
		this.setState({showModal: !this.state.showModal})
	}
	render() {
		const { flyer } = this.props
		const uri = IMAGE_HOST + flyer.imageName
		console.log("FlyerView ",uri)
		return (
			<View style={styles.container}>
				<Text style={styles.flyerText}>{flyer.title}</Text>
				<Image style={styles.flyerImage}
					source={{uri: uri,}}
				/>
				<CustomButton name="View Detail" onPress={() => this.toggleModal()}/>
				<ImageModal visible={this.state.showModal} flyer={flyer}
					hideModal={() => this.toggleModal()}/>
			</View>
		)
	}
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
		height: "75%",
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
