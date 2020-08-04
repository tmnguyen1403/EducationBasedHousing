import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from './Dashboard'
import Login from './Login'
import CalendarScreen from './CalendarScreen'

const Stack = createStackNavigator()

export default function BottomTabNavigator() {
	return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen name="Login" component={Login}/>
					<Stack.Screen name="Dashboard" component={Dashboard} />
					<Stack.Screen name="CalendarScreen" component={CalendarScreen} />
				</Stack.Navigator>
			</NavigationContainer>
	)
}
