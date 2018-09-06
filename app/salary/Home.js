import React, { Component } from 'React'
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

export default class Home extends React.Component {
	constructor (props) {
		super(props),
		this.state = {
			preTax: '',
			gjj: '',
			valipass: true
		}
	}
	componentDidMount() {

	}
	_beginCal (){
		if((this.state.preTax+'').length<=0||isNaN(this.state.preTax)||(this.state.gjj+'').length<=0||isNaN(this.state.gjj)){
			this.setState({
				valipass: false
			})
			return;
		}
		this.setState({
			valipass: true
		})
		const { navigate } = this.props.navigation;
		navigate('GzResult', {preTax: this.state.preTax, gjj: this.state.gjj});
	}
	_renderWarning (){
		if(!this.state.valipass){
			return (
				<Text style={styles.tipstyle}>请输入正确格式的税前工资和公积金缴纳比例！</Text>
			)
		}
	}
	render (){
		return (
			<View>
				<View style={styles.wrapStyle}>
					<View style={styles.formItem}>
						<Text style={styles.label}>月工资：</Text>
						<TextInput keyboardType="numeric" style={styles.iptstyle} value={this.state.preTax} onChangeText={(text) => {this.setState({preTax: text})}}></TextInput>
					</View>
					<View style={styles.formItem}>
						<Text style={styles.label}>公积金比例：</Text>
						<TextInput keyboardType="numeric" style={styles.iptstyle} value={this.state.gjj} onChangeText={ (text) => {this.setState({gjj: text})}}></TextInput>
						<Text>%</Text>
					</View>
					{this._renderWarning()}
				</View>
				<TouchableOpacity
			        onPress={() => {this._beginCal()}}
			        style={styles.cal}>
			      	<View>
			        	<Text style={styles.fontStyle}>开始计算</Text>
			      	</View>
			    </TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapStyle: {
		margin: 15,
		backgroundColor:'#fff'
	},
	cal: {
		backgroundColor: '#fff',
		height: 50,
		margin: 15,
		marginTop: 0,
		borderRadius: 4
	},
  	fontStyle: {
  		color: '#2d8cf0',
  		fontSize: 15,
  		lineHeight: 50,
  		textAlign: 'center',
  		textAlignVertical:'center',
  	},
  	formItem: {
  		height: 60,
  		padding: 15,
  		flexDirection: 'row', 
  		alignItems: 'center'
  	},
  	iptstyle: {
  		flex: 1,
  		borderWidth: 1,
  		borderColor: '#999',
  		borderStyle: 'solid',
  		height: 30,
  		borderRadius: 5,
  		padding: 5
  	},
  	label: {
  		textAlign: 'right',
  		fontSize: 14,
  		width: 90
  	},
  	tipstyle: {
  		fontSize: 11,
  		color: 'red',
  		padding: 15,
  		paddingTop: 0
  	}
});


