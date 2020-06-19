import React from 'react'
import { Text } from 'react-native'

export default function CustomText({ content, style = {} }) {
	return (
			<Text	style={style}>
				{content}
			</Text>
	)
}
