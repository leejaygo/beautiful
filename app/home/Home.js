import React, { Component } from 'React'
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native'

export default class Home extends React.Component {
	constructor (props){
		super(props)
		this.state = {

		}
	}
	_golink (flg){
		const { navigate } = this.props.navigation;
		
		switch (flg){
			case 'gz'://工资计算器
				navigate('GzHome');
			break;
			case 'sb':
				navigate('SbHome');
			break;
		}
	}
	render () {
		return (
			<View style={styles.wrap}>
				<View style={styles.mainIcons}>
					<TouchableOpacity style={styles.itemIcon}
						onPress={() => {this._golink('gz')}}
					>
						<Image style={styles.icon} source={require('../assets/images/cal32.png')}></Image>
						<Text style={styles.text}>个人工工资计算</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itemIcon}
					onPress={() => {this._golink('sb')}}>
						<Image style={styles.icon} source={require('../assets/images/cal32.png')}></Image>
						<Text style={styles.text}>社保计算</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itemIcon}>
						<Image style={styles.icon} source={require('../assets/images/cal32.png')}></Image>
						<Text style={styles.text}>放量计算</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.itemIcon}>
						<Image style={styles.icon} source={require('../assets/images/cal32.png')}></Image>
						<Text style={styles.text}>放量计算</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrap: {
		backgroundColor: '#fff',
		flex: 1
	},
	mainIcons: {
		flexDirection: 'row', 
  		alignItems: 'center',
  		justifyContent: 'center',
  		flexWrap: 'wrap',
  		backgroundColor: '#fff'
	},
	itemIcon: {
		width: 85,
		height: 90,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 10,
		marginTop: 10
	},
	icon: {

	}
})