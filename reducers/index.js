import { RECEIVE_USER, USER_LOGIN } from '../actions'

function user (state = {}, action) {
	switch (action.type) {
		case RECEIVE_USER:
			return {
				...state,
				...action.user
			}
		case USER_LOGIN:
			console.log("user login", action)
			console.log("test spread: ", {...action.user})
			console.log("test spread1: ", {...action.user})
			return {
				...state,
				id: 123,
				...action.user,
			}
		default:
			return state
	}
}

export default user
