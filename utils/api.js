import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY, formatCalendarEvents } from './calendar'

export function fetchCalendarEvents() {
	AsyncStorage.getAllKeys((err, keys) => {
		keys.map(key => AsyncStorage.removeItem(key))
	})
	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
		.then(formatCalendarEvents)
}

export function validateUser(user) {
	let users = {
		123: {
			id: 123,
			username: "Admin",
			password: "Admin",
			admin: 1,
			coordinator: "Admin",
		},
		456: {
			id: 456,
			username: "Minh",
			password: "Minh",
			admin: 0,
			coordinator: "Bri Sandifer"
		}
	}
	let {username, password} = user
	let valid_user = Object.values(users).filter(user => {
		return user.username === username && user.password === password
	})
	console.log("Valid User", valid_user)
	return valid_user.length > 0 ? valid_user[0] : {}
}
