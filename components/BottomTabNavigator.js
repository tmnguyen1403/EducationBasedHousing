import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import Dashboard from './Dashboard'
import Dashboard from './Dashboard'
import Login from './Login'
import CalendarScreen from './CalendarScreen'
import BulletinScreen from './BulletinScreen'

const Stack = createStackNavigator()

export default function BottomTabNavigator() {
	return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen name="Login" component={Login}/>
					<Stack.Screen name="Dashboard" component={Dashboard} />
					<Stack.Screen name="Calendar" component={CalendarScreen} />
					<Stack.Screen name="BulletinScreen" component={BulletinScreen} />
				</Stack.Navigator>
			</NavigationContainer>
	)
}
