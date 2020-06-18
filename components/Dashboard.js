import React, {Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function createDashboardElement(text, style) {
	return (
		<TouchableOpacity style={style}>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}
class Dashboard extends Component {
	render() {
		const CALENDAR = "Calendar"
		const ANNOUNCEMENTS = "Announcements"
		const SETTINGS = "Settings"
		const MY_COORDINATOR = "My Coordinator"
		return (
				<View style={styles.container}>
					<View style={styles.row}>
						{createDashboardElement(CALENDAR, styles.blueView)}
						{createDashboardElement(ANNOUNCEMENTS, styles.blueView)}
					</View>
					<View style={styles.row}>
						{createDashboardElement(SETTINGS, styles.blueView)}
						{createDashboardElement(MY_COORDINATOR, styles.blueView)}
					</View>
				</View>

		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 500,
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 250,
	},
	blueView: {
		backgroundColor: 'powderblue',
		margin: 10,
		flex: 1,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
})
export default Dashboard
