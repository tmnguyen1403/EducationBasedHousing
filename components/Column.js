import React from 'react'
import { View } from 'react-native'
import styles from '../styles/main'

export default function Column ({ children, style }) {
	return (
		<View style={[styles.column, style]}>
			{ children }
		</View>
	)
}
