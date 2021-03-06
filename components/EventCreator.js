import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Fragment } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import mainstyles from '../styles/main'
import EventModal from './EventModal'

class EventCreator extends Component {
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
				<Text style={mainstyles.text}>Create Event</Text>
				<EventModal
					visible={this.state.showModal}
					hideModal={() => this.toggleModal()}/>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
})

export default EventCreator
