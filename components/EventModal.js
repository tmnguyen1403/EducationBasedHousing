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
import { getCommunityId, fetchCreateEvent } from '../utils/api'
import { AsyncStorage } from 'react-native'

class EventModal extends Component {
	state = {
		showDatePicker: false,
		showStartPicker: false,
		showEndPicker: false,
		name: "This is new event",
		location: "Education Based Housing",
		description: "Hello",
		date: "",
		start: "",
		end: "",
	}
  closeModal() {
    this.props.hideModal();
  }
	createEvent() {
		//send new events to database
		//add new events to redux store
		const {name, location, description, date, start, end} = this.state
		const { communities, token, dispatch, hideModal } = this.props
		const newEvent = {
			name: name,
			location: location,
			description: description,
			date: date,
			start: start,
			end: end,
			communityid: getCommunityId(communities)
		}
		fetchCreateEvent(newEvent, token, dispatch)
		.then(() => {
			console.log("Create new event successfully")
			hideModal()
		})
		.catch(error => {
			console.log("Error create event", error.message)
		})
		return true
	}
	//get selected date from date picker
	getDate(value) {
		this.setState({date: value})
	}
	getStart(start) {
		console.log("called getStart")
		this.setState({start: start})
	}
	getEnd(end) {
		console.log("called getEnd")

		this.setState({end: end})
	}
	toggleDatePicker() {
		this.setState({showDatePicker: !this.state.showDatePicker})
	}
	toggleStartPicker() {
		this.setState({showStartPicker: !this.state.showStartPicker})
	}
	toggleEndPicker() {
		this.setState({showEndPicker: !this.state.showEndPicker})
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
									value={this.state.name}
									onChangeText={(name) => this.setState({name})}/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Location</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.location}
									onChangeText={(location) => this.setState({location})}
									placeholder="Location"/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Description</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.description}
									onChangeText={(description) => this.setState({description})}
									placeholder="Description"/>
							</View>

							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleDatePicker()}>
								<Text style={styles.label}>Date</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.date}
									placeholder="Date"/>
							</TouchableOpacity>

							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleStartPicker()}>
								<Text style={styles.label}>Start</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.start}
									placeholder="StartTime"/>
								<TimePicker
									visible={this.state.showStartPicker}
									getValue={(value) => this.getStart(value)}
								/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleEndPicker()}>
								<Text style={styles.label}>End</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.end}
									placeholder="EndTime"/>
								<TimePicker
									visible={this.state.showEndPicker}
									getValue={(value) => this.getEnd(value)}
								/>
							</TouchableOpacity>
							<DatePicker visible={this.state.showDatePicker}
								getValue={(value) => this.getDate(value)}/>

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
export default connect(mapStateToProps)(EventModal)
