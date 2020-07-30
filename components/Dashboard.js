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
import Flyers from './Flyers'
import MyCoordinator from './MyCoordinator'
import Settings from './Settings'
import FlyerCreator from './FlyerCreator'
import EventCreator from './EventCreator'

import createCustomText from './CustomText'

//REDUX STATE
import {connect} from 'react-redux'

class Dashboard extends Component {
	state = {
		DEBUG: true,
	}
	render() {
		const CALENDAR = "Calendar"
		const ANNOUNCEMENTS = "Announcements"
		const SETTINGS = "Settings"
		const MY_COORDINATOR = "My Coordinator"
		const backgroundImage = require('../resources/images/background_image.jpg')
		//save isManager into redux store
		//const { isManager } = this.props

		const { user, navigation } = this.props
		const {admin} = user
		return (
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<View style={styles.userRow}>
					<Calendar style={styles.item} navigate={() => navigation.navigate("CalendarScreen")}/>
					<Flyers  style={styles.item}/>
					<Settings  style={styles.item}/>
					<MyCoordinator  style={styles.item}/>
				</View>
				{admin > 0 || this.state.DEBUG &&
					<View style={styles.managerRow}>
						<EventCreator style={styles.item}/>
						<FlyerCreator  style={styles.item}/>
					</View>
				}
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
	userRow: {
		marginTop: 150,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	managerRow: {
		marginBottom: 100,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	item: {
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

function mapStateToProps(state) {
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(Dashboard)
