import { userLogin, receiveEvents, createEvent,
	receiveFlyers } from '../actions'
import { HOST } from './configs'
import { IMAGE_HOST } from '../utils/configs'

//server functions
const URL = HOST + 'api/'

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

export function fetchFlyers(communityId, token, dispatch) {
	const path = "flyer/get"
	const url = URL + path
	console.log("fetchFlyers for community:", communityId)
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
			console.log("fetchFlyer successfully", json.flyers)
			dispatch(receiveFlyers(json.flyers))
		}
	})
	.catch(error => {
		console.log("Error getting flyers", error.message)
		dispatch(receiveFlyers([]))
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

export const fetchEditFlyer = async (newFlyer, flyerId, token, dispatch) => {
	const path = "flyer/" + flyerId + "/update"
	const url = URL + path
	console.log("fetchEditFlyer")
	try {
		const result = await fetch(url, {
			method: "PUT",
			headers: {
				'Content-Type': 'multipart/form-data',
				'token': token
			},
			body: newFlyer
		})
		if (result.status === 200) {
			console.log("FetchEditFlyer successfully")
		}
		else {
			throw new Error(resultJson.error)
		}
	} catch (error) {
		console.warn("Error fetchCreateFlyer", error.message)
		throw(error)
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

export function getToken(user) {
	try {
		return user.token
	} catch (error) {
		console.log("Error: getToken ", error.message)
		return null
	}
}

export function capitalized(str) {
	let words = str.split(" ")
	let capWords = words.map(word => {
		return word.charAt(0).toUpperCase() + word.slice(1)
	})
	return capWords.join(" ")
}

export function getAmPmTimes() {
	let times = ["1 am", "2 am", "3 am", "4 am", "5 am", "6 am",
"7 am", "9 am", "9 am", "10 am", "11 am", "12 am","1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm",
"7 pm", "9 pm", "9 pm", "10 pm", "11 pm", "12 pm"]

	return times
}

export function getImagePath(imageName) {
	return IMAGE_HOST + imageName
}
