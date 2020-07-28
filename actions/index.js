export const RECEIVE_USER = 'RECEIVE_USER'
export const USER_LOGIN = 'GET_USER'

export function receiveUser (user) {
	return {
		type: RECEIVE_USER,
		user,
	}
}

export function userLogin (user) {
	return {
		type: USER_LOGIN,
		user,
	}
}
