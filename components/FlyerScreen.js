import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
//Redux store
import { connect } from 'react-redux'
import { fetchCalendarEvents } from '../utils/api'
import { timeToString } from '../utils/helpers'
import { receiveEvents } from '../actions'
import FlyerView from './FlyerView'

class FlyerScreen extends Component {
	componentDidMount() {
		const {route, dispatch} = this.props
		console.log("flyer screen did mount")
		const {communityId, token} = route.params
		fetchCalendarEvents(communityId, token, dispatch)
	}
	render() {
		const {events} = this.props
		console.log("calendar screen", events)
		if (events.length === 0)
			return (
				<View style = {styles.container}>
					<Text> There is no flyer in the community</Text>
				</View>
			)
		return (
			<ScrollView style={styles.container}>
				{events.length > 0 &&
					events.map(event => <FlyerView key={event._id} event={event}/>)
				}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
	}
})

function mapStateToProps(state) {
	return {
		events: state.events
	}
}
export default connect(mapStateToProps)(FlyerScreen)
