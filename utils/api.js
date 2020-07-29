import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY, formatCalendarEvents } from './calendar'

export function fetchCalendarEvents() {
	AsyncStorage.getAllKeys((err, keys) => {
		keys.map(key => AsyncStorage.removeItem(key))
	})
	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
		.then(formatCalendarEvents)
}
