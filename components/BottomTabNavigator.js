import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from './Dashboard'
import SettingsScreen from './SettingsScreen'
import CalendarScreen from './CalendarScreen'
import Login from './Login'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function DashboardStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Dashboard" component={Dashboard}/>
			<Stack.Screen  name="CalendarScreen" component={CalendarScreen} />
		</Stack.Navigator>
	)
}
export default function BottomTabNavigator() {
	return (
			<NavigationContainer>
				<Tab.Navigator initialRouteName="Dashboard">
					<Tab.Screen name="Account" component={Login}/>
					<Tab.Screen name="Dashboard" component={DashboardStack} />
					<Tab.Screen name="Settings" component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
	)
}
