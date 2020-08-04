import { userLogin, receiveEvents } from '../actions'

export const validateUser = async (user, dispatch) => {
	const url = "http://localhost:3000/api/user/login"

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: user.username,
			password: user.password,
		})
	})
	const json = await response.json()
	console.log("Login ",json)
	if (!json.success)
		throw new Error(json.error)
	else {
		dispatch(userLogin(json))
		return json
	}
}

export function fetchCalendarEvents(communityId, token, dispatch) {
		const url = "http://localhost:3000/api/event/get"
		console.log("fetchEvent", communityId)
		console.log("token", token)
		fetch(url, {
			method: "GET",
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
				token: token,
				communityid: communityId,
			}
		})
		.then(result => result.json())
		.then(json => {
			if (!json.success)
				throw new Error(json.error)
			else {
				console.log("Event", json.events)
				dispatch(receiveEvents(json.events))
			}
		})
		.catch(error => {
			console.log("Error getting event", error.message)
		})
}
