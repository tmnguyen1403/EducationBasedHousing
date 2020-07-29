export const RECEIVE_USER = 'RECEIVE_USER'
export const USER_LOGIN = 'GET_USER'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

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

export function userLogin (user) {
	return {
		type: USER_LOGIN,
		user,
	}
}
