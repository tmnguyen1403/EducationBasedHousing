import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class TestServerData extends Component {
	state = {
		loading: true
	}
	componentDidMount() {
		const url = "http://localhost:3000/api/user/login"
		const username = "mm"
		const password = "mm"
		fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			})
		}).then(response => response.json())
		.then(json => {
			console.log("login response: ", json)
			this.setState({loading: false})
		})
		.catch(error => {
			console.log("Error when login", error)
		})
	}
	login()
	{

	}
	render() {
		const {loading} = this
		return (
			<View>
				<Text>
					{loading === false ? "Getting Data" : "Receive data"}
				</Text>
			</View>
		)
	}
}
