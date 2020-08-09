import React, {Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
 } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
/*-------------Custom Components-----------*/
import Column from './Column'
import Row from './Row'

import Calendar from './Calendar'
import Flyers from './Flyers'
import ContactUs from './ContactUs'
import Settings from './Settings'
import FlyerCreator from './FlyerCreator'
import EventCreator from './EventCreator'
import UserCreator from './UserCreator'
import CommunitySwitch from './CommunitySwitch'

import createCustomText from './CustomText'
import { capitalized } from '../utils/api'
//general styles
import mainstyles from '../styles/main'

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
			<ImageBackground source={backgroundImage}
				style={[styles.backgroundImage, mainstyles.column]}>
				<Text style={styles.welcomeText}>{capitalized(community.name)}</Text>
				<Row style={styles.row}>
					<Calendar
						style={mainstyles.box}
						navigate={() => this.goto(CALENDAR, community, token)}/>
					<Flyers
						style={mainstyles.box}
						navigate={() => this.goto(FLYER, community, token)}/>
					<Settings  style={mainstyles.box}/>
					<ContactUs  style={mainstyles.box}/>
				</Row>
				{/*-----Admin User Start-------- */}
				{admin > 0 &&
				<Row>
					<EventCreator style={mainstyles.box}/>
					<FlyerCreator  style={mainstyles.box}/>
					<UserCreator style={mainstyles.box}/>
					<CommunitySwitch style={mainstyles.box}/>
				</Row>
				}

				{/*-----Admin User End-------- */}
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	backgroundImage: {
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
		marginTop: 30,
	},
	row: {
		marginTop: 40,
	}
})

function mapStateToProps(state) {
	return {
		user: state.user,
		communities: state.communities,
	}
}
export default connect(mapStateToProps)(Dashboard)
