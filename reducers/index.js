import {
		RECEIVE_USER, USER_LOGIN, USER_LOGOUT,
	 	RECEIVE_EVENTS,
		RECEIVE_FLYERS, EDIT_FLYER,
	 	RECEIVE_COMMUNITIES, CHANGE_COMMUNITY } from '../actions'
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

export function events(state = [], action) {
	switch (action.type) {
		case RECEIVE_EVENTS:
			return [
				...action.events
			]
		default:
			return state
	}
}

export function flyers(state = [], action) {
	switch (action.type) {
		case RECEIVE_FLYERS:
			return [
				...action.flyers
			]
		case EDIT_FLYER:
			console.log("called editflyer")
			let flyer = action.flyer
			let newFlyers = state.map(data => {
				if (data._id === flyer._id)
					return flyer
				return data
			})
			return newFlyers
		default:
			return state
	}
}

export function communities(state = {}, action) {
	switch (action.type) {
		case RECEIVE_COMMUNITIES:
			console.log(RECEIVE_COMMUNITIES)
			return {
				...state,
				...action.communities,
			}
		case CHANGE_COMMUNITY:
				console.log(CHANGE_COMMUNITY)
				return {
					...state,
					chosenIndex: action.chosenIndex,
				}
		default:
			return state
	}
}

export default combineReducers(
	{
		user,
		events,
		flyers,
		communities,
	}
)
