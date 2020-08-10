import React, { Component } from 'react'
import { View, Image,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	Text} from 'react-native'

//custom components
import Row from './Row'
import Column from './Column'

import { fetchFlyers } from '../utils/api'
import mainstyles from '../styles/main'
import { connect } from 'react-redux'
import { getImagePath } from '../utils/api'

export default class BulletinViewServer extends Component
{
	componentDidMount() {
			console.log("BulletinViewServer did mount")
			// const communityId = "5f263e14fc876d193c144d15"
			// const token = ""
			// fetchFlyers(communityId, token, this.props.dispatch)
	}

	render() {
		// const backgroundImage = require('../resources/images/background_image.jpg')
		// const flyer1 =  require('../resources/images/kid_beach.jpg')
		//const flyer2 =  require('../resources/images/kid_beach.jpg')
		const {bulletin, local} = this.props
		if (bulletin === undefined || bulletin === null)
			return null
		let {title, background, flyer1, flyer2} = bulletin
		//for server
		if (!local) {
			background = getImagePath(background)
			flyer1 = getImagePath(flyer1)
			flyer2 = getImagePath(flyer2)
		}
		// console.log("Bulletin ", bulletin)
		// console.log("Background ", background)
		// console.log("Flyer1 ", flyer1)
		// console.log("Flyer2 ", flyer2)
		return (
			<ImageBackground
				style={[mainstyles.column, styles.column]}
				source={{uri: background}}>
					<Text style={styles.title}>{title}</Text>
					{flyer1 && flyer1.indexOf(".") > - 1 ?
						<Image
							style={[styles.image]}
							source={{uri: flyer1}}
						>
						</Image>
						:
						null
					}
					{flyer2 && flyer2.indexOf(".") > - 1 ?
						<Image
							style={[styles.image]}
							source={{uri: flyer2}}
						>
						</Image>
						:
						null
					}
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
	},
	image: {
		width: "90%",
		minHeight: 100,
		flexBasis: 100,
		flexGrow: 5,
		margin: 10,
	},
	column: {
		marginTop: 10,
		padding: 5,
		justifyContent: "space-around",
		alignContent: "center",
		alignItems: "center",
	}
})
