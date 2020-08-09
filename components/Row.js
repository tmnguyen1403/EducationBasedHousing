import React from 'react'
import { View } from 'react-native'
import styles from '../styles/main'

export default function Row ({ children, style }) {
	return (
		<View style={[styles.row, style]}>
			{ children }
		</View>
	)
}
