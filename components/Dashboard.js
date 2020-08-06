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
import ContactUs from './ContactUs'
import Settings from './Settings'
import FlyerCreator from './FlyerCreator'
import EventCreator from './EventCreator'
import UserCreator from './UserCreator'
import CommunitySwitch from './CommunitySwitch'

import createCustomText from './CustomText'

//REDUX STATE
import {connect} from 'react-redux'
import {userLogout} from '../actions'

class Dashboard extends Component {
	state = {
		DEBUG: false,
	}
	componentDidMount(){
		console.log("Dashboard is mounted")
	}
	logout() {
		console.log("User logout")

		this.props.dispatch(userLogout())
		this.props.navigation.goBack()
	}
	goto(screen, community, token) {
		const { user, navigation, route } = this.props
		navigation.navigate(screen, {communityId: community._id, token: token})
	}
	render() {
		const CALENDAR = "Calendar"
		const FLYER = "Flyer"
		const ANNOUNCEMENTS = "Announcements"
		const SETTINGS = "Settings"
		const MY_COORDINATOR = "My Coordinator"
		const EVENT_CREATOR = "EventCreator"
		const backgroundImage = require('../resources/images/background_image.jpg')
		//save isManager into redux store
		//const { isManager } = this.props

		const { user, navigation, route, communities } = this.props
		let admin = 0
		let community = []
		if (user && user.user) {
			admin = user.user.admin
			token = user.token
		}
		if (communities) {
			console.log("Dashboard communities", communities)
			community = communities.data[communities.chosenIndex]
		}
		console.log("Dashboard communities", communities)
		return (
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
				<View style={styles.welcomeRow}>
					<Text style={styles.welcomeText}>Hello {community.name}</Text>
				</View>
				<View style={styles.userRow}>
					<Calendar
						style={styles.item}
						navigate={() => this.goto(CALENDAR, community, token)}/>
					<Flyers
						style={styles.item}
						navigate={() => this.goto(FLYER, community, token)}/>
					<Settings  style={styles.item}/>
					<ContactUs  style={styles.item}/>

				</View>
				{admin > 0 &&
					<View style={styles.managerRow}>
						<EventCreator style={styles.item}/>
						<FlyerCreator  style={styles.item}/>
						<UserCreator style={styles.item}/>
						<CommunitySwitch style={styles.item}/>
					</View>
				}
				<TouchableOpacity style={[styles.item, styles.logout]} onPress={() => this.logout()}>
					<Text>Logout</Text>
				</TouchableOpacity>
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
		marginBottom: 20,
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	item: {
		margin: 5,
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
	logout: {
		backgroundColor: 'white',
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcomeText: {
		color: "red",
		fontSize: 30,
		textAlign: "center",
	}
})

function mapStateToProps(state) {
	return {
		user: state.user,
		communities: state.communities,
	}
}
export default connect(mapStateToProps)(Dashboard)
