export const RECEIVE_USER = 'RECEIVE_USER'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const RECEIVE_COMMUNITIES = 'RECEIVE_COMMUNITIES'
export const CHANGE_COMMUNITY = 'CHANGE_COMMUNITY'
export const RECEIVE_FLYERS = 'RECEIVE_FLYERS'
export const EDIT_FLYER = 'EDIT_FLYER'

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

export function receiveFlyers (flyers) {
	return {
		type: RECEIVE_FLYERS,
		flyers,
	}
}

export function editFlyer(flyer) {
	return {
		type: EDIT_FLYER,
		flyer
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
