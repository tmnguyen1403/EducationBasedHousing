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

export default class EventModal extends Component {
	state = {
		showDatePicker: false,
		showTimePicker: false,
	}
  closeModal() {
    this.props.hideModal();
  }
	createEvent() {
		return true
	}
	toggleDatePicker() {
		this.setState({showDatePicker: !this.state.showDatePicker})
	}
	toggleTimePicker() {
		this.setState({showTimePicker: !this.state.showTimePicker})
	}
  render() {
		const {visible} = this.props
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
									placeholder="Title"/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Location</Text>
								<TextInput
									style={styles.textInput}
									placeholder="Location"/>
							</View>
							<View style={styles.item}>
								<Text style={styles.label}>Description</Text>
								<TextInput
									style={styles.textInput}
									placeholder="Description"/>
							</View>

							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleDatePicker()}>
								<Text style={styles.label}>Date</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.item}
								onPress={() => this.toggleTimePicker()}>
								<Text style={styles.label}>Time</Text>
							</TouchableOpacity>
							<DatePicker visible={this.state.showDatePicker}/>
							<DatePicker visible={this.state.showTimePicker}/>
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
