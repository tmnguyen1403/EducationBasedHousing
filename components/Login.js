import React, {Component, Fragment } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	TextInput
 } from 'react-native'

import createCustomText from './CustomText'

class Login extends Component {
	state = {
		email: "Email...",
		password: "Password..."
	}
	render() {
		const backgroundImage = require('../resources/images/background_image.jpg')
		//save isManager into redux store
		//const { isManager } = this.props
		const isManager = true
		const { navigation } = this.props
		return (

			<Fragment>
				<View style={[styles.inputView, styles.logo]}>
						<Text style={[styles.text, styles.logoText]}>Education Based Housing</Text>
				</View>
				<View style={[styles.inputView]}>
						<TextInput
						 style={styles.inputText}
						 placeholder="Email..."
						 onChangeText={text => this.setState({email: text})}
						 value={this.state.email}
					 />
				</View>
				<View style={[styles.inputView]}>
						<TextInput
						 style={styles.inputText}
						 placeholder="Email..."
						 onChangeText={text => this.setState({password: text})}
						 value={this.state.password}
					 />
				</View>
				<TouchableOpacity style={styles.loginBtn}>
					<Text style={styles.loginText}>LOGIN</Text>
				</TouchableOpacity>
			</Fragment>
		)
	}
}

const styles = StyleSheet.create({
	inputView: {
		width: "80%",
		height: 50,
		backgroundColor: "#465881",
		borderRadius: 25,
		marginBottom:20,
		justifyContent:"center",
		alignItems: "center",
		padding:20
	},
	inputText: {
		height: 50,
		color: "white",
		margin: 20,
	},
	loginBtn: {
		width: "80%",
		backgroundColor: "#fb5b5a",
		height: 50,
		borderRadius: 25,
		height: 50,
		marginTop: 40,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		backgroundColor: "#fb5b5a",
		height: 100,
		marginBottom: 40,
	},
	text: {
		color: "white",
		fontSize: 11,
	},
	loginText: {
		color: "white",
		fontSize: 11,
	},
	logoText: {
		fontSize: 20,
	}
})
export default Login
