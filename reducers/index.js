import {
		RECEIVE_USER, USER_LOGIN, USER_LOGOUT,
	 	RECEIVE_EVENTS, CREATE_EVENT } from '../actions'
import { combineReducers } from 'redux'

function user (state = {}, action) {
	switch (action.type) {
		case RECEIVE_USER:
			return {
				...state,
				...action.user
			}
		case USER_LOGIN:
			// console.log("user login", action)
			// console.log("test spread: ", {...action.user})
			// console.log("test spread1: ", {...action.user})
			return {
				...state,
				...action.user,
			}
		case USER_LOGOUT:
			// console.log("user login", action)
			// console.log("test spread: ", {...action.user})
			// console.log("test spread1: ", {...action.user})
			return {}
		default:
			return state
	}
}

export function events(state = {}, action) {
	switch (action.type) {
		case RECEIVE_EVENTS:
			return {
				...state,
				...action.events
			}
		case CREATE_EVENT:
			console.log("create event")
			return {
				...state,
				...action.event,
			}
		default:
			return state
	}
}
export default combineReducers(
	{
		user,
		events
	}
)
