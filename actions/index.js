export const RECEIVE_USER = 'RECEIVE_USER'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const RECEIVE_COMMUNITIES = 'RECEIVE_COMMUNITIES'
export const CHANGE_COMMUNITY = 'CHANGE_COMMUNITY'

export function receiveUser (user) {
	return {
		type: RECEIVE_USER,
		user,
	}
}

export function receiveEvents (events) {
	return {
		type: RECEIVE_EVENTS,
		events,
	}
}

export function createEvent(event) {
	console.log("create event:", event)
	return {
		type: CREATE_EVENT,
		event,
	}
}
export function userLogin (user) {
	return {
		type: USER_LOGIN,
		user,
	}
}

export function userLogout (user) {
	return {
		type: USER_LOGOUT,
		user,
	}
}

export function receiveCommunities (communities) {
	return {
		type: RECEIVE_COMMUNITIES,
		communities,
	}
}

export function changeCommunity (chosenIndex) {
	return {
		type: CHANGE_COMMUNITY,
		chosenIndex,
	}
}
