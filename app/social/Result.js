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
			personalInsurance: 0
		}
	}
	componentWillMount (){
		this.setState({
			params: this.props.navigation.state.params
		})
	}
	componentDidMount (){
        this.calTotalSocialInsurance();
        this.calPersonalSocialInsurance();
	}
	render (){
		return (
			<View style={styles.wrap}>
				<View style={styles.item}>
					<Text style={styles.label}>工资：</Text>
					<Text style={styles.val}>{this.state.params.preTax}</Text>
				</View>
				<View style={styles.item}>
					<Text style={styles.label}>个人社保扣除：</Text>
					<Text style={styles.val}>{this.state.personalInsurance}</Text>
				</View>
				<View style={styles.item}>
					<Text style={styles.label}>公司缴纳：</Text>
					<Text style={styles.val}>{this.state.totalSocialInsurance}</Text>
				</View>
                <View style={styles.item}>
					<Text style={styles.label}>共计缴纳社保：</Text>
					<Text style={styles.val}>{this.state.totalSocialInsurance+this.state.personalInsurance}</Text>
				</View>
			</View>
		)
	}
	//养老
	calYanglao (){
		return parseInt(parseInt(this.state.params.preTax)*0.08, 10);
    }
    calYanglaoGS (){
        return parseInt(parseInt(this.state.params.preTax)*0.2, 10);
    }
	//医疗
	calMedical (){
		return parseInt(parseInt(this.state.params.preTax)*0.02, 10);
    }
    calMedicalGS (){
		return parseInt(parseInt(this.state.params.preTax)*0.08, 10);
	}
	//失业保险
	calShiye (){
		return parseInt(parseInt(this.state.params.preTax)*0.01, 10);
    }
    calShiyeGS (){
		return parseInt(parseInt(this.state.params.preTax)*0.02, 10);
    }
    //工伤保险仅单位缴纳
	calGongShang (){
		return parseInt(parseInt(this.state.params.preTax)*0.006, 10);
    }
    //生育保险仅单位缴纳
    calShengYu (){
		return parseInt(parseInt(this.state.params.preTax)*0.007, 10);
	}
    calTotalSocialInsurance (){
        this.setState({
			totalSocialInsurance: this.calYanglaoGS()+this.calMedicalGS()+this.calShiyeGS()+this.calGongShang()+this.calShengYu()
		})
		return this.calYanglaoGS()+this.calMedicalGS()+this.calShiyeGS()+this.calGongShang()+this.calShengYu();
    }
	calPersonalSocialInsurance (){
		this.setState({
			personalInsurance: this.calYanglao()+this.calMedical()+this.calShiye()
		})
		return this.calYanglao()+this.calMedical()+this.calShiye();
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