import React from 'react'
import { View } from 'react-native'
import styles from '../styles/main'

export default function Column ({ children }) {
	return (
		<View style={styles.column}>
			{ children }
		</View>
	)
}
