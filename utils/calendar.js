//utils/calendar.js

import { AsyncStorage } from 'react-native'
import { timeToString } from './helpers'

export const CALENDAR_STORAGE_KEY = 'Housing:calendar'

function getRandomNumber (max) {
  return Math.floor(Math.random() * max) + 0
}

function setDummyData () {

  let dummyData = {}
  const timestamp = Date.now()

  for (let i = -2; i < 0; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000
    const strTime = timeToString(time)
    dummyData[strTime] = {
          name: "Testing Event",
					location: "Education Based Housing",
					date: "07/29/2020",
					start: "11:00 AM",
					end: "12:00 PM",
        }
  }

  AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}

function setMissingDates (dates) {
  const length = Object.keys(dates).length
  const timestamp = Date.now()

  for (let i = -2; i < 0; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000
    const strTime = timeToString(time)

    if (typeof dates[strTime] === 'undefined') {
      dates[strTime] = null
    }
  }

  return dates
}

export function formatCalendarEvents (events) {
  return events === null
    ? setDummyData()
    : setMissingDates(JSON.parse(events))
}
