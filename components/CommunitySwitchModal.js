import React, { Component } from 'react'
import {Text,
	View,
	Button,
	Modal,
	StyleSheet,
	TextInput,
	TouchableOpacity} from 'react-native'
//custom components
import CommunityPicker from './CommunityPicker'
//REDUX STORE
import {connect} from 'react-redux'
//action
import {changeCommunity} from '../actions'

class CommunitySwitchModal extends Component {
	state = {
		chosenIndex: 0
	}
  closeModal() {
    this.props.hideModal();
  }
	getCommunity(chosenIndex) {
		this.setState({chosenIndex})
	}
	switch() {
		console.log("Switch to", this.state.chosenIndex)
		this.props.dispatch(changeCommunity(this.state.chosenIndex))
		this.closeModal()
	}
	//get selected date from date picker

  render() {
		const {visible, communities} = this.props
		if (!visible)
			return null
		console.log("community switch modal:", communities)
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
									<Text style={styles.topBarText}>Switch Community</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.switch()}>
									<Text style={[styles.topBarText, styles.createText]}>Switch</Text>
								</TouchableOpacity>
							</View>
						{/*body*/}
						<View>

							<TouchableOpacity style={styles.item}>
								<Text style={styles.label}>Choose Community</Text>
							</TouchableOpacity>

							<CommunityPicker
								communities={communities.data}
								defaultValue={communities.chosenIndex}
								getValue={(value) => this.getCommunity(value)}/>
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
		communities: state.communities
	}
}
export default connect(mapStateToProps)(CommunitySwitchModal)
