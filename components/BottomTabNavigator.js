import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from './Dashboard'

function SettingsScreen() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Settings!</Text>
			</View>
		)
}

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
	return (
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name="Dashboard" component={Dashboard} />
					<Tab.Screen name="Settings" component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
	)
}
// class BottomTabNavigator extends Component {
//
// 	render() {
// 		return(
// 			<NavigationContainer>
// 				<Tab.Navigator>
// 					<Tab.Screen name="Home" component={HomeScreen} />
// 					<Tab.Screen name="Settings" component={SettingsScreen} />
// 				</Tab.Navigator>
// 			</NavigationContainer>
// 		)
// 	}
// }
//
// export default BottomTabNavigator
