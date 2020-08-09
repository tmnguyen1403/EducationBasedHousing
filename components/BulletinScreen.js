import React, { Component } from 'react'
import { View,TouchableOpacity,
	Text, StyleSheet, ScrollView, Fragment } from 'react-native'

//custom components
import BulletinViewServer from './BulletinViewServer'
import CustomButton from './CustomButton'
import BulletinModal from './BulletinModal'
import mainstyles from '../styles/main'
//Redux store
import { connect } from 'react-redux'
import { fetchFlyers, getCommunityId, getToken } from '../utils/api'


class BulletinScreen extends Component {
	state = {
		showModal: false
	}
	toggleModal() {
		this.setState({showModal: !this.state.showModal})
	}
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
				<View style = {mainstyles.container}>
					<Text> There is no bulletin in the community</Text>
				</View>
			)
		return (
			<ScrollView >
				{flyers.length > 0 &&
					flyers.map(bulletin =>
						<View style={mainstyles.container}>
							<BulletinViewServer
								local={false}
								key={bulletin._id}
								bulletin={bulletin}/>
							<CustomButton
								customStyle={styles.button}
								name="View Detail" onPress={() => this.toggleModal()}/>
							<BulletinModal visible={this.state.showModal} bulletin={bulletin}
								hideModal={() => this.toggleModal()}/>
						</View>
					)
				}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	button: {
		alignSelf: "center",
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
