import { userLogin, receiveEvents, createEvent } from '../actions'

//server functions
const URL = "http://localhost:3000/api/"

export const validateUser = async (user, dispatch) => {
	const path = "user/login"
	const url = URL + path

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
	const path = "event/get"
	const url = URL + path
	console.log("fetchEvent for community:", communityId)
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
			console.log("fetchEvent successfully", json.events)
			dispatch(receiveEvents(json.events))
		}
	})
	.catch(error => {
		console.log("Error getting event", error.message)
	})
}

export const fetchCreateEvent = async (newEvent, token, dispatch) => {
	const path = "event/create"
	const url = URL + path
	console.log("fetchCreateEvent")
	const result = await fetch(url, {
		method: "POST",
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
			token: token
		},
		body: JSON.stringify(newEvent)
	})
	const json = await result.json()
	if (!json.success)
		throw new Error(json.error)
	else {
		console.log("FetchCreateEvent successfully")
	}
}

export const fetchCreateFlyer = async (newFlyer, token, dispatch) => {
	const path = "flyer/create"
	const url = URL + path
	console.log("fetchCreateFlyer")
	try {
		const result = await fetch(url, {
			method: "POST",
			headers: {
				'Content-Type': 'multipart/form-data',
				'token': token
			},
			body: newFlyer
		})
		if (result.status === 200) {
			console.log("FetchCreateFlyer successfully")
		}
		else {
			throw new Error(resultJson.error)
		}
	} catch (error) {
		console.log("Error fetchCreateFlyer", error.message)
	}
}

//normal function
export function getCommunityId(communities) {
	try {
		const community = communities.data[communities.chosenIndex]
		return community._id
	} catch (error) {
		console.log("Error: getCommunityId ", error.message)
	}
}
