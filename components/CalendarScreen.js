import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
//Redux store
import { connect } from 'react-redux'
import { fetchCalendarEvents } from '../utils/api'
import { timeToString } from '../utils/helpers'
import { receiveEvents } from '../actions'
import EventView from './EventView'

class CalendarScreen extends Component {
	componentDidMount() {
		const { dispatch } = this.props

		fetchCalendarEvents()
			.then( (events) => dispatch(receiveEvents(events)))
	}
	render() {
		const {events} = this.props
		return (
			<ScrollView style={styles.container}>
				{events !== undefined && events !== {} &&
					Object.entries(events).map((data) => <EventView key={data[0]} event={data[1]}/>)
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
export default connect(mapStateToProps)(CalendarScreen)
