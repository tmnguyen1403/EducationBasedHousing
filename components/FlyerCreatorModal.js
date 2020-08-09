import React, { Component } from 'react'
import {Text,
	View,
	Button,
	Modal,
	StyleSheet,
	TextInput,
	TouchableOpacity} from 'react-native'
//custom components
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
//REDUX STORE
import {connect} from 'react-redux'
//action
import { fetchCreateFlyer, getCommunityId } from '../utils/api'
import { AsyncStorage } from 'react-native'
import ImagePicker from './TestImagePicker'
import BulletinView from './BulletinView'

class FlyerModal extends Component {
	state = {
		name: "",
		showPicker: false,
		imageUri: null,
		background: null,
		flyer1: null,
		flyer2: null,
		error: "",
	}
  closeModal() {
    this.props.hideModal();
  }
	getImageInfo(imageUri) {
		if (imageUri === undefined || imageUri === null || imageUri === "")
			return null
		const extension = imageUri.substr(imageUri.lastIndexOf(".")+1)
		const nameWithExtension = imageUri.substr(imageUri.lastIndexOf("/")+1)
		return {
			type: "image/" + extension,
			name: nameWithExtension,
			uri: imageUri,
		}
	}
	create() {
		try {
			const { background, flyer1, flyer2 } = this.state
			const { token, dispatch, communities } = this.props
			if (background === undefined || background === null) {
				console.log("Please provide background image")
				this.setState({error: "Please Provide Background Image"})
				return
			}
			const data = new FormData()
			//Note: do not replace file:// on IOS, keep the uri as it is
			data.append("background", this.getImageInfo(this.state.background))
			data.append("flyer1", this.getImageInfo(this.state.flyer1))
			data.append("flyer2", this.getImageInfo(this.state.flyer2))
			data.append("title", this.state.name)
			data.append("communityid", getCommunityId(communities))
			fetchCreateFlyer(data, token, dispatch)
			.then(() => {
				this.closeModal()
			})
		} catch (error) {
			console.log("FetchCreatorModal error: ", error.message)
		}

		return true
	}
	//get selected date from date picker
	showPicker(){
		this.setState({showPicker: true})
	}
	getBackground(background){
		this.setState({background})
	}
	getFlyer1(flyer1){
		this.setState({flyer1})
	}
	getFlyer2(flyer2){
		this.setState({flyer2})
	}
  render() {
		const {visible, events} = this.props
		// if (!visible)
		// 	return null
    return (
        <View style={styles.container}>
          <Modal
              visible={this.props.visible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
							onBackDropPress={() => this.closeModal()}
							presentationStyle="fullScreen"
							value= "New Flyer"
          >

						{/*top control*/}
							<View style={styles.topBar}>
								<TouchableOpacity onPress={() => this.closeModal()}>
									<Text style={[styles.topBarText, styles.cancelText]}>Cancel</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={styles.topBarText}>New Flyer</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.create()}>
									<Text style={[styles.topBarText, styles.createText]}>Create</Text>
								</TouchableOpacity>
							</View>
						{/*body*/}
						<View>
							{this.state.error !== "" &&
								<View style={styles.item}>
									<Text style={styles.error}>{this.state.error}</Text>
								</View>
							}
              <View style={styles.item}>
								<Text style={styles.label}>Title</Text>
								<TextInput
									style={styles.textInput}
									placeholder="Title"
									value={this.state.name}
									onChangeText={(name) => this.setState({name})}/>
							</View>

							<TouchableOpacity style={styles.item}
								onPress={() => this.showPicker()}>
								<Text style={styles.label}>BackgroundImage</Text>
								<ImagePicker
									getImage={(imageUri) => this.getBackground(imageUri)}
									visible={this.state.showPicker}
								/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.item}
								onPress={() => this.showPicker()}>
								<Text style={styles.label}>Flyer1Image</Text>
								<ImagePicker
									getImage={(imageUri) => this.getFlyer1(imageUri)}
									visible={this.state.showPicker}
								/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.item}
								onPress={() => this.showPicker()}>
								<Text style={styles.label}>Flyer2Image</Text>
								<ImagePicker
									getImage={(imageUri) => this.getFlyer2(imageUri)}
									visible={this.state.showPicker}
								/>
							</TouchableOpacity>
						</View>
						{this.state.background &&
							<BulletinView
								local={true}
								bulletin={{
									background: this.state.background,
									flyer1: this.state.flyer1,
									flyer2: this.state.flyer2,
								}}>
							</BulletinView>
						}
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
	error: {
		margin: 10,
		fontSize: 20,
		color: 'red',
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
		events: state.events,
		communities: state.communities,
		token: state.user.token,
	}
}
export default connect(mapStateToProps)(FlyerModal)
