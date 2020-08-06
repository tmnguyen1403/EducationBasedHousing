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
import {createEvent} from '../actions'
import { CALENDAR_STORAGE_KEY} from '../utils/calendar'
import { AsyncStorage } from 'react-native'

class ContactUsModal extends Component {
	state = {
		sender: "",
		phone: "",
		content: "",
		content: "",
		images: null,
	}
  closeModal() {
    this.props.hideModal();
  }
	createEvent() {
		//send new events to database
		//add new events to redux store
		const {sender, phone, content} = this.state
		const data = {
			sender,
			phone,
			content,
		}
		//AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
		this.props.dispatch(createEvent(data))
		this.props.hideModal();
		return true
	}
	//get selected date from date picker
	getDate(value) {
		console.log("getDate:", value)
		this.setState({date: value})
	}
	getTime(value) {
		console.log("getDate:", value)
		//this.setState({start: value})
		//this.setState({end: value})
	}
	toggleDatePicker() {
		this.setState({showDatePicker: !this.state.showDatePicker})
	}
	toggleTimePicker() {
		this.setState({showTimePicker: !this.state.showTimePicker})
	}
  render() {
		const {visible, events} = this.props
		if (!visible)
			return null
		console.log("event modal:", events)
    return (
        <View style={styles.container}>
          <Modal
              visible={this.props.visible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
							onBackDropPress={() => this.closeModal()}
							presentationStyle="fullScreen"
							value= "New Event"
          >

						{/*top control*/}
							<View style={styles.topBar}>
								<TouchableOpacity onPress={() => this.closeModal()}>
									<Text style={[styles.topBarText, styles.cancelText]}>Cancel</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={styles.topBarText}>Contact Us</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.createEvent()}>
									<Text style={[styles.topBarText, styles.createText]}>Contact</Text>
								</TouchableOpacity>
							</View>
						{/*body*/}
						<View>
              <View style={styles.item}>
								<Text style={styles.label}>From</Text>
								<TextInput
									style={styles.textInput}
									placeholder="Sender"
									value={this.state.sender}
									onChangeText={(text) => this.setState({sender: text})}/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Phone Number</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.phone}
									onChangeText={(text) => this.setState({phone: text})}
									placeholder="Password"/>
							</View>
							<View style={[styles.item]}>
								<Text style={styles.label}>Content</Text>

								<TextInput
									multiline
									numberOfLines={4}
									style={[styles.textInput,, styles.content]}
									value={this.state.content}
									onChangeText={(text) => this.setState({content: text})}
									placeholder="Name"/>
							</View>
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
	content: {
		width: "100%",
		borderColor: '#000000',
		borderWidth: 1,
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
		events: state.events
	}
}
export default connect(mapStateToProps)(ContactUsModal)
