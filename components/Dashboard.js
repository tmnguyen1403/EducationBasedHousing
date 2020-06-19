import React, {Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
 } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Calendar from './Calendar'
import Announcements from './Announcements'
import MyCoordinator from './MyCoordinator'
import Settings from './Settings'
import createCustomText from './CustomText'

class Dashboard extends Component {
	render() {
		const CALENDAR = "Calendar"
		const ANNOUNCEMENTS = "Announcements"
		const SETTINGS = "Settings"
		const MY_COORDINATOR = "My Coordinator"
		const background_image = require('../resources/images/background_image.jpg')
		return (
			<ImageBackground source={background_image} style={styles.backgroundImage}>
			<View style={styles.row}>
				<Calendar generalStyle={styles.generalStyle}/>
				<Announcements  generalStyle={styles.generalStyle}/>
				<Settings  generalStyle={styles.generalStyle}/>
				<MyCoordinator  generalStyle={styles.generalStyle}/>
			</View>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		marginVertical: 200,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	generalStyle: {
		width: 180,
		padding: 20,
		fontSize: 16,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: null,
		height: null,
	},
})
export default Dashboard
