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

class EventModal extends Component {
	state = {
		showDatePicker: false,
		showTimePicker: false,
		title: "This is new event",
		location: "Education Based Housing",
		description: "Hello",
		date: "",
		start: "3:00 PM",
		end: "4:00PM",
	}
  closeModal() {
    this.props.hideModal();
  }
	createEvent() {
		//send new events to database
		//add new events to redux store
		const {title, location, description, date, start, end} = this.state
		const data = {[this.state.date] : {
			name: this.state.title,
			location: this.state.location,
			description: this.state.description,
			date: this.state.date,
			start: this.state.start,
			end: this.state.end,
		}}
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
									<Text style={styles.topBarText}>New Event</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.createEvent()}>
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
									value={this.state.title}
									onChange={(text) => this.setState({title: text})}/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Location</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.location}
									onChange={(text) => this.setState({location: text})}
									placeholder="Location"/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Description</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.description}
									onChange={(text) => this.setState({description: text})}
									placeholder="Description"/>
							</View>

							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleDatePicker()}>
								<Text style={styles.label}>Date</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleTimePicker()}>
								<Text style={styles.label}>Start</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleTimePicker()}>
								<Text style={styles.label}>End</Text>
							</TouchableOpacity>
							<DatePicker visible={this.state.showDatePicker}
								getValue={(value) => this.getDate(value)}/>
							<TimePicker
								visible={this.state.showTimePicker}
								getValue={(value) => this.getTime(value)}
							/>
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
		events: state.events
	}
}
export default connect(mapStateToProps)(EventModal)
