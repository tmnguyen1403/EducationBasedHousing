import React, {Component, Fragment } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	TextInput
 } from 'react-native'
 //custom component
import WarningModal from './WarningModal'
import createCustomText from './CustomText'
//REDUX STATE
import { connect } from 'react-redux'
import { userLogin, receiveCommunities } from '../actions'
import { validateUser } from '../utils/api'


class Login extends Component {
	state = {
		username: "Username*",
		password: "Password*",
		loginFailed: false,
		errorMessage: "Your password or username is incorrect",
	}
	login() {
		//DEFINE ADMIN: 3 levels
		//0: normal user, cannot create events
		//1: admin 1, can create events, cannot modify other events
		//2: admin 2, has admin1 privileges, can modify other admins' events
		const username = this.state.username.toLowerCase()
		const password = this.state.password
		validateUser({username, password}, this.props.dispatch)
		.then(result => {
			const {dispatch, navigation } = this.props
			dispatch(receiveCommunities({data: result.communities, chosenIndex: 0}))
			navigation.navigate("Dashboard",
				{community: result.communities[0]})
		})
		.catch(error => {
				console.log("Error when login", error.message)
				this.setState({loginFailed: true, errorMessage: error.message})
			})
	}
	hideModal() {
		this.setState({loginFailed: false})
	}
	render() {
		const backgroundImage = require('../resources/images/background_image.jpg')
		//save isManager into redux store
		//const { isManager } = this.props
		const isManager = true

		return (
			<View style={styles.container}>
				<View style={[styles.inputView, styles.logo]}>
						<Text style={[styles.text, styles.logoText]}>Education Based Housing</Text>
				</View>
				<View style={[styles.inputView]}>
						<TextInput
						 style={styles.inputText}
						 placeholder="Username*"
						 onChangeText={text => this.setState({username: text})}
					 />
				</View>
				<View style={[styles.inputView]}>
						<TextInput
						 style={styles.inputText}
						 placeholder="Password*"
						 onChangeText={text => this.setState({password: text})}
					 />
				</View>
				{this.state.loginFailed &&
					<Text style={styles.warningText}>{this.state.errorMessage}</Text>
				}
				<TouchableOpacity style={styles.forgetPass} onPress={() => this.login()}>

					<Text style={styles.forgetText}>Forget password?</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.loginBtn} onPress={() => this.login()}>
					<Text style={styles.loginText}>Sign In</Text>
				</TouchableOpacity>

			</View>
		)
	}
}
//colors: light blue #7d90c7, grey: #dadfed
const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#dadfed",
		height: "100%",
	},
	inputView: {
		width: "80%",
		height: 50,
		backgroundColor: "white",
		borderRadius: 25,
		marginBottom:20,
		justifyContent:"center",
		alignItems: "center",
		padding:20
	},
	inputText: {
		height: 50,
		color: "black",
		margin: 20,
	},
	forgetPass: {
		width: "80%",
		height: 50,
		borderRadius: 25,
		height: 50,
		marginTop: 5,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	forgetText: {
		color: "#7691de",
		fontSize: 20,
	},
	loginBtn: {
		width: "80%",
		backgroundColor: "#7d90c7",
		height: 50,
		borderRadius: 25,
		height: 50,
		marginTop: 40,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		backgroundColor: "#7d90c7",
		height: 100,
		marginBottom: 40,
	},
	text: {
		color: "white",
		fontSize: 11,
	},
	loginText: {
		color: "white",
		fontSize: 20,
	},
	logoText: {
		fontSize: 20,
	},
	warningText: {
		color: "red",
		fontSize: 20,
	}
})

function mapStateToProps (state) {
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(Login)
