import {Platform, StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		...Platform.select({
			ios: {paddingTop: 20},
			android: { paddingTop: StatusBar.currentHeight}
		})
	},
	row: {
		flex: 1,
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-around",
		padding: 10,
	},
	column: {
		flex: 1,
		flexDirection: 'column',
		flexWrap: 'wrap',
		alignItems: 'center',
		alignContent: 'center',
	},
	box: {
		height: 100,
		flexBasis: 150,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: 'white',
		//dashboard box
		borderWidth: 1,
		margin: 10,
		padding: 20,
		flexGrow: 10,
	},
	text: {
		fontSize: 16,
	}
})
