import React, { Component } from 'React'
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
const COMMON_SALARY = 3500;//国家最低征收额度3500
export default class Result extends React.Component {
	constructor (props){
		super(props),
		this.state = {
			params: {},
			totalSocialInsurance: 0,
			afterTax: 0,
			totalGjj: 0,
			payTax: 0
		}
	}
	componentWillMount (){
		this.setState({
			params: this.props.navigation.state.params
		})
	}
	componentDidMount (){
		this.calTotalSocialInsurance();
		this.calTotalGjj();
		this.calAfterTax();
	}
	render (){
		return (
			<View style={styles.wrap}>
				<View style={styles.item}>
					<Text style={styles.label}>税后工资：</Text>
					<Text style={styles.val}>{this.state.afterTax}</Text>
				</View>
				<View style={styles.item}>
					<Text style={styles.label}>社保扣除：</Text>
					<Text style={styles.val}>{this.state.totalSocialInsurance}</Text>
				</View>
				<View style={styles.item}>
					<Text style={styles.label}>公积金扣除：</Text>
					<Text style={styles.val}>{this.state.totalGjj}</Text>
				</View>
				<View style={styles.item}>
					<Text style={styles.label}>个人所得税扣除：</Text>
					<Text style={styles.val}>{this.state.payTax}</Text>
				</View>
			</View>
		)
	}
	//养老
	calYanglao (){
		return parseInt(parseInt(this.state.params.preTax)*0.08, 10);
	}
	//医疗
	calMedical (){
		return parseInt(parseInt(this.state.params.preTax)*0.02, 10);
	}
	//失业保险
	calShiye (){
		return parseInt(parseInt(this.state.params.preTax)*0.01, 10);
	}
	calGjj (){
		return parseInt(parseInt(this.state.params.preTax)*parseFloat(this.state.params.gjj)/100, 10)
	}
	calTax (){
		let pretax = parseInt(this.state.params.preTax);
		let calnum = pretax - this.calTotalSocialInsurance()-COMMON_SALARY
		let paytax = 0;
		if(calnum<1500){
			paytax = parseInt(calnum*0.03, 10);
		}else if(calnum>=1500 && calnum<4500){
			paytax = parseInt(calnum*0.1, 10)-105;
		}else if(calnum>=4500 && calnum<9000){
			paytax = parseInt(calnum*0.2, 10)-555;
		}else if(calnum>=9000 && calnum<35000){
			paytax = parseInt(calnum*0.25, 10)-1005;
		}else if(calnum>=35000 && calnum<55000){
			paytax = parseInt(calnum*0.3, 10)-2755;
		}else if(calnum>=55000 && calnum<80000){
			paytax = parseInt(calnum*0.35, 10)-5505;
		}else{
			paytax = parseInt(calnum*0.45, 10)-13505;
		}
		this.setState({
			payTax: paytax
		})
		return paytax;
	}
	calTotalGjj (){
		this.setState({
			totalGjj: this.calGjj()
		})
		return this.calGjj();
	}
	calTotalSocialInsurance (){
		this.setState({
			totalSocialInsurance: this.calYanglao()+this.calMedical()+this.calShiye()
		})
		return this.calYanglao()+this.calMedical()+this.calShiye();
	}
	calAfterTax (){
		let res =  parseInt(this.state.params.preTax, 10)-this.calTotalSocialInsurance()-this.calGjj()-this.calTax();
		this.setState({
			afterTax: res
		})
	}
}

const styles = StyleSheet.create({
	wrap: {
		margin: 15,
		backgroundColor:'#fff'
	},
	item: {
		flexDirection: 'row',
		height: 40,
		alignItems: 'center'
	},
	label: {
		width: 130,
		fontSize: 14,
		textAlign: 'right'
	},
	val: {
		flex: 1,
		fontSize: 14
	}
})