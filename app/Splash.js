import React from 'React'
import {
	View,
	Image,
	Text,
	StyleSheet,
	Dimensions,//获取设备的宽高
	TouchableOpacity,
	Animated
} from 'react-native'

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height
export default class Splash extends React.Component {
	constructor (props){
		super(props);
		this.state = {
			startValue: new Animated.Value(.5)
		}
	}
	componentDidMount (){
		const { navigate }  = this.props.navigation
		Animated.timing(this.state.startValue, {
	      	toValue: 1,
	      	duration: 1000
	    }).start();
	    this.timer = setTimeout(() => {
	    	navigate('Home')
	    }, 5000)
	}
	componentWillUnmount (){
		clearTimeout(this.timer);
	}
	_goLink (){
		const { navigate }  = this.props.navigation;
		clearTimeout(this.timer);
		navigate('Home');
	}
	render (){
		return (
			<TouchableOpacity>
				<Animated.View
					style={styles.image}
				>
					<Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>会生活</Text>
				</Animated.View>
				<TouchableOpacity
					onPress={() => {this._goLink()}}
					style={styles.link}
				><Text style={styles.linktext}>跳过广告</Text></TouchableOpacity>
			</TouchableOpacity>
		)
	}
}
const styles = StyleSheet.create({
	image: {
		width: Width,
		height: Height,
		justifyContent: 'center',
		backgroundColor: '#61affe'
	},
	link: {
		position: 'absolute',
		right: 30,
		top: 30,
		width: 60,
		height: 26,
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 4,
		backgroundColor: 'rgba(255, 255, 255, .3)'
	},
	linktext: {
		color: '#fff', 
		textAlign: 'center',
		fontSize: 10
	}
})	