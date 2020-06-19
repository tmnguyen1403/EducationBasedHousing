import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from './Dashboard'
import SettingsScreen from './SettingsScreen'

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
