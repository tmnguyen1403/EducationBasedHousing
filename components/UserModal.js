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

class UserModal extends Component {
	state = {
		username: "",
		password: "",
		name: "",
		coordinator: "",
		admin: 0,
		phone: "",
	}
  closeModal() {
    this.props.hideModal();
  }
	createEvent() {
		//send new events to database
		//add new events to redux store
		const data = {[this.state.username] : {
			username: this.state.username,
			password: this.state.password,
			name: this.state.name,
			coordinator: this.state.coordinator,
			admin: this.state.admin,
			phone: this.state.phone,
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
									<Text style={styles.topBarText}>New User</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.createEvent()}>
									<Text style={[styles.topBarText, styles.createText]}>Create</Text>
								</TouchableOpacity>
							</View>
						{/*body*/}
						<View>
              <View style={styles.item}>
								<Text style={styles.label}>Username</Text>
								<TextInput
									style={styles.textInput}
									placeholder="Username"
									value={this.state.title}
									onChange={(text) => this.setState({username: text})}/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Password</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.location}
									onChange={(text) => this.setState({password: text})}
									placeholder="Password"/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Name</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.location}
									onChange={(text) => this.setState({name: text})}
									placeholder="Name"/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Coordinator</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.description}
									onChange={(text) => this.setState({coordinator: text})}
									placeholder="Coordinator"/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Phone Number</Text>
								<TextInput
									style={styles.textInput}
									value={this.state.description}
									onChange={(text) => this.setState({phone: text})}
									placeholder="888-888-8888"/>
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
export default connect(mapStateToProps)(UserModal)
