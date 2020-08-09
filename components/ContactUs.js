import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import mainstyles from '../styles/main'
import ContactUsModal from './ContactUsModal'

class ContactUs extends Component {
	state = {
		showModal: false
	}
	toggleModal(){
		this.setState({showModal: !this.state.showModal})
	}
	render() {
		const { style } = this.props
		return (
			<TouchableOpacity style={style}
				onPress={() => this.toggleModal()}>
				<Ionicons name="ios-contact" size={40} color="blue"/>
				<Text style={mainstyles.text}>ContactUs</Text>
				<ContactUsModal visible={this.state.showModal} hideModal={() => this.toggleModal()}/>
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

export default ContactUs
