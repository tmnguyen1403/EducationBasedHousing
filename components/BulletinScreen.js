import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
//Redux store
import { connect } from 'react-redux'
import { fetchFlyers, getCommunityId, getToken } from '../utils/api'
import { timeToString } from '../utils/helpers'
import { receiveEvents } from '../actions'
import FlyerView from './FlyerView'

class BulletinScreen extends Component {
	componentDidMount() {
		const {user, communities, dispatch} = this.props
		console.log("flyer screen did mount")
		const communityId = getCommunityId(communities)
		const token = getToken(user)
		fetchFlyers(communityId, token, dispatch)
	}
	render() {
		const {flyers} = this.props
		console.log("flyer screen", flyers)
		if (flyers.length === 0)
			return (
				<View style = {styles.container}>
					<Text> There is no flyer in the community</Text>
				</View>
			)
		return (
			<ScrollView style={styles.container}>
				{flyers.length > 0 &&
					flyers.map(flyer => <FlyerView key={flyer._id} flyer={flyer}/>)
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
		user: state.user,
		communities: state.communities,
		flyers: state.flyers,
	}
}
export default connect(mapStateToProps)(BulletinScreen)
