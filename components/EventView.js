import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

/**
 * @param {Date} d
 * @return {string} monthInEnglish
 */
function getMonthInEnglish(date)
{
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
	"Sep", "Oct", "Nov", "Dec"]

	return months[date.getMonth()]
}

function getWeekDay(date)
{
	const week_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	return week_days[date.getDay()]
}

export default function EventView({event})
{
	console.log("EventView ",event)
	const date = new Date(event.date)
	const month = getMonthInEnglish(date)
	const day = date.getDate()
	const weekDay = getWeekDay(date)
	return (
		<View style={styles.container}>
			<View>
				<Text style={[styles.text, styles.date]}>{month} {day}</Text>
				<Text style={styles.text}>{weekDay}</Text>
				<Text style={styles.text}>{event.start}
				{"\n"}- {event.end}</Text>
			</View>
			<View style={styles.event}>
				<Text style={styles.text}>{event.name}</Text>
				<Text style={styles.text}>{event.location}</Text>
				<TouchableOpacity style={styles.btnView}>
					<Text style={styles.btnText}>View Detail</Text>
				</TouchableOpacity>
			</View>
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
