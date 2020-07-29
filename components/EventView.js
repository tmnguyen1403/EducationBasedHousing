import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function EventView({event})
{
		return (
			<View style={styles.event}>
				<Text>{event.name}</Text>
				<Text>{event.location}</Text>
				<Text>{event.date}</Text>
				<Text>{event.time}</Text>
			</View>
		)
}

const styles = StyleSheet.create({
	event: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		flexDirection: 'column',
	}
})
