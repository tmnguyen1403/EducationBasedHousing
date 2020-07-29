import { RECEIVE_USER, USER_LOGIN, RECEIVE_EVENTS } from '../actions'
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
				id: 123,
				...action.user,
			}
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
