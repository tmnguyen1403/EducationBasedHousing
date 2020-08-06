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

class FlyerModal extends Component {
	state = {
		name: "",
		showPicker: false,
		imageUri: null,
	}
  closeModal() {
    this.props.hideModal();
  }
	create() {
		try {
			const { imageUri } = this.state
			const { token, dispatch, communities } = this.props

			const extension = imageUri.substr(imageUri.lastIndexOf(".")+1)
			const nameWithExtension = imageUri.substr(imageUri.lastIndexOf("/")+1)
			const data = new FormData()
			//Note: do not replace file:// on IOS, keep the uri as it is
			data.append("flyer", {
				type: "image/" + extension,
				name: nameWithExtension,
				uri: imageUri,
			})
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
	getImage(resultImage){
		this.setState({imageUri: resultImage.uri, image: resultImage})
	}
  render() {
		const {visible, events} = this.props
		if (!visible)
			return null
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
								<Text style={styles.label}>UploadImage</Text>
								<ImagePicker
									getImage={(imageUri) => this.getImage(imageUri)}
									visible={this.state.showPicker}
								/>
							</TouchableOpacity>
						</View>

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
