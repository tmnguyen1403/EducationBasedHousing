import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Fragment } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import textStyle from '../utils/textstyle'
import UserModal from './UserModal'

class UserCreator extends Component {
	state = {
		showModal: false
	}
	toggleModal() {
		this.setState({showModal: !this.state.showModal})
	}
	render() {
		const { style } = this.props
		return (
			<TouchableOpacity
				style={[styles.calendar, style]}
				onPress={() => this.toggleModal()}>
				<Ionicons name="ios-create" size={40} color="blue" />
				<Text style={textStyle.main}>Create User</Text>
				<UserModal
					visible={this.state.showModal}
					hideModal={() => this.toggleModal()}/>
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

export default UserCreator
