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

export default class BulletinView extends Component
{
	componentDidMount() {
			console.log("called bulletin view")
			// const communityId = "5f263e14fc876d193c144d15"
			// const token = ""
			// fetchFlyers(communityId, token, this.props.dispatch)
	}

	render() {
		const {bulletin, local} = this.props
		console.log("Bulletin View:", bulletin)
		if (bulletin === undefined || bulletin === null)
			return null
		let {background, flyer1, flyer2} = bulletin
		//for server
		if (!local) {
			background = getImagePath(background)
			flyer1 = getImagePath(flyer1)
			flyer2 = getImagePath(flyer2)
		}
		return (
			<ImageBackground
				style={[mainstyles.container, styles.column]}
				source={{uri: background}}>
					{flyer1 && flyer1.indexOf(".") > - 1 ?
						<Image
							style={[styles.image]}
							source={{uri: flyer1}}
						>

						</Image>
						:
						<Text>Please provide image</Text>
					}
					{flyer2 && flyer2.indexOf(".") > - 1 ?
						<Image
							style={[styles.image]}
							source={{uri: flyer2}}
						>
						</Image>
						:
						<Text>Please provide image</Text>
					}
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	image: {
		width: "90%",
		flexBasis: 100,
		flexGrow: 5,
		margin: 10,
	},
	column: {
		marginTop: 40,
		marginBottom: 40,
		padding: 5,
		justifyContent: "space-around",
		alignContent: "center",
		alignItems: "center",
		maxHeight: "100%",
	}
})
