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

class CoordinatorModal extends Component {

  closeModal() {
    this.props.hideModal();
  }
  render() {
		const {visible} = this.props
		if (!visible)
			return null
		console.log("Coordinator modal:")
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
									<Text style={styles.topBarText}>Coordinator</Text>
								</TouchableOpacity>
							</View>
						{/*body*/}
						<View>
              <View style={styles.item}>
								<Text style={styles.label}>Coordinator</Text>
								<Text style={styles.label}>{this.props.user.coordinator}</Text>
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
		user: state.user
	}
}
export default connect(mapStateToProps)(CoordinatorModal)
