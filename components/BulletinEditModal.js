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
/*---------------*/
import {connect} from 'react-redux'
import { editFlyer } from '../actions'
/*-------------*/
import { fetchEditFlyer } from '../utils/api'
import { AsyncStorage } from 'react-native'
import ImagePicker from './TestImagePicker'
import BulletinView from './BulletinView'
//utils
import { getImagePath } from '../utils/helpers'
class BulletinEditModal extends Component {
	init = {
		_id: "",
		title: "",
		background: null,
		flyer1: null,
		flyer2: null,
	}
	state = {
		_id: "",
		title: "",
		showPicker: false,
		background: null,
		flyer1: null,
		flyer2: null,
		error: "",
	}
	componentDidMount(){
		console.log("BulletinEditModal did mount")
		const {bulletin} = this.props
		let { _id, title, background, flyer1, flyer2} = bulletin
		background = getImagePath(background)
		flyer1 = getImagePath(flyer1)
		flyer2 = getImagePath(flyer2)
		this.init = {
			_id,
			title,
			background,
			flyer1,
			flyer2,
		}
		this.setState({
			...this.init
		})
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
	/*
	**return [editedFields]
	*/
	getEditedField() {
		const result = Object.keys(this.init)
			.filter(key => this.init[key] !== this.state[key])
		return result
	}
	raiseError(error){
		this.setState({error})
	}
	update() {
		try {
			const {bulletin, token, dispatch } = this.props
			const editedFields = this.getEditedField()
			if (editedFields.length === 0) {
				this.raiseError("There is no change in bulletin. Please provide new data")
				return
			}
			const data = new FormData()
			let deleteFiles = ""
			editedFields.forEach(key => {
				let value = this.state[key]
				if (key === "title")
					data.append(key, this.state[key])
				else //handle images
				{
					data.append(key, this.getImageInfo(value))
					deleteFiles += this.init[key] + ";"
				}
			})
			//use this to delete old data from server
			if (deleteFiles.length > 0)
				data.append("deleteFiles", deleteFiles)
			//
			const flyerId = this.state._id
			fetchEditFlyer(data, flyerId, token, dispatch)
			.then(success => {
				this.closeModal()
			})
		} catch (error) {
			console.log("FetchEditModal error: ", error.message)
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
		const {visible} = this.props
		console.warn("BulletinEditModal called ")
		if (!visible)
			return null
		console.log("Edit Background", this.state.background)
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
									<Text style={styles.topBarText}>Edit Bulletin</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.update()}>
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
									value={this.state.title}
									onChangeText={(title) => this.setState({title})}/>
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
		communities: state.communities,
		token: state.user.token,
	}
}
export default connect(mapStateToProps)(BulletinEditModal)
