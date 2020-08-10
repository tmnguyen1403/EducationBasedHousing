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
		showModal: false,
		bulletin: null
	}
	toggleModal(id) {
		//get the correct bulletin to pass to BulletinModal
		if (id && this.props.flyers) {
			const bulletin = this.props.flyers.filter(b => b._id === id)
			if (bulletin.length > 0)
				this.setState({
					showModal: !this.state.showModal,
					bulletin: bulletin[0]
				})
		} else {
			this.setState({showModal: !this.state.showModal})
		}
	}
	hideModal() {
		this.setState({showModal: false})
	}
	componentDidMount() {
		const {user, communities, dispatch} = this.props
		console.log("bulletinscreen did mount")
		const communityId = getCommunityId(communities)
		const token = getToken(user)
		fetchFlyers(communityId, token, dispatch)
	}
	render() {
		const {flyers} = this.props
		if (flyers.length === 0)
			return (
				<View style = {mainstyles.container}>
					<Text> There is no bulletin in the community</Text>
				</View>
			)
		return (
			<View style={{maxHeight: "100%"}}>
			<ScrollView contentContainerStyle={{flexGrow: 1}}>
				{
					flyers.map(bulletin =>{
						const bulletinId = bulletin._id
						return (<View key={bulletinId}
							style={[{minHeight: 400}]}>
							<BulletinViewServer
								local={false}
								key={bulletinId}
								bulletin={bulletin}/>
							<CustomButton
								customStyle={styles.button}
								name="Details"
								onPress={() => this.toggleModal(bulletinId)}/>
						</View>)
						}
					)
				}
				<BulletinModal
					bulletin={this.state.bulletin}
					visible={this.state.showModal}
					hideModal={() => this.toggleModal()}/>
			</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "stretch",
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
