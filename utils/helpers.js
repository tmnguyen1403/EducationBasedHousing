//utils/helpers.js
import { HOST } from './configs'
import { IMAGE_HOST } from '../utils/configs'

export function timeToString(time = Date.now()) {
	const date = new Date(time)
	const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
	return todayUTC.toISOString().split('T')[0]
}

export function getImagePath(imageName) {
	return IMAGE_HOST + imageName
}
