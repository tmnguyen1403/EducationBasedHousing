import React, { Component } from 'react'
import {Text,
	View,
	Button,
	Modal,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,} from 'react-native'
//Custom Component
import BulletinView from './BulletinView'
//REDUX STORE
import {connect} from 'react-redux'
//action
import {createEvent} from '../actions'
import { getCommunityId, fetchCreateEvent } from '../utils/api'
import { getImagePath } from '../utils/api'
import BulletinEditModal from './BulletinEditModal'

class BulletinModal extends Component {
	state = {
		showModal: false
	}
	toggleModal(){
		this.setState({showModal: !this.state.showModal})
	}
	edit(){
		console.warn("hello edit")
		this.toggleModal()
		//show BulletinEditModal
	}
  render() {
		const {visible, bulletin, hideModal, admin} = this.props
		if (!visible)
			return null
		console.log("BulletinModal ", bulletin)
    return (
        <View style={styles.container}>
          <Modal
              visible={visible}
              animationType={'slide'}
              onRequestClose={() => hideModal()}
							onBackDropPress={() => hideModal()}
							presentationStyle="fullScreen"
							value= "New Event"
          >

						{/*top control*/}
							<View style={styles.topBar}>
								<TouchableOpacity onPress={() => hideModal()}>
									<Text style={[styles.topBarText, styles.cancelText]}>Cancel</Text>
								</TouchableOpacity>
								<Text style={styles.topBarText}>{bulletin.title}</Text>
								{admin > 0 &&
									<TouchableOpacity
										onPress={() => this.edit()}>
										<Text style={[styles.topBarText, styles.createText]}>Edit</Text>
									</TouchableOpacity>
								}
							</View>
						{/*body*/}
						<BulletinView bulletin={bulletin}/>
						<BulletinEditModal
						visible={this.state.showModal}
						bulletin={bulletin}
						hideModal={() => this.toggleModal()} />
          </Modal>

        </View>
    );
  }
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: "80%",
	},
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modalContainer: {
		flex: 1,
		marginTop: 20,
		justifyContent: 'space-evenly',
  },
  innerContainer: {
    alignItems: 'center',
  },
	topBar: {
		flex: 1,
		marginTop: 40,
		marginBottom: 20,
		padding: 5,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: 'space-between',
		alignItems: 'center',
		maxHeight: 50,
		backgroundColor: "#dadfed",
		width: "100%",
	},
	topBarText: {
		fontSize: 16,
	},
	cancelText: {
		color: "red",
	},
	createText: {
		color: "blue",
		fontSize: 20,
	},
	createBtn: {
		margin: 20,
		justifyContent:  'center',
		alignItems: 'center',
	},
	item: {
		flex: 1,
		marginTop: 20,
		marginBottom: 10,
		padding: 10,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	label: {
		margin: 10,
		fontSize: 16,
	},
	textInput: {
		padding: 5,
		fontSize: 16,
	},
});

function mapStateToProps(state) {
	return {
		admin: state.user.user.admin,
		communities: state.communities,
		token: state.user.token,
	}
}
export default connect(mapStateToProps)(BulletinModal)
