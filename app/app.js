/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { StackNavigator } from 'react-navigation'

import Splash from './Splash'
import Home from './home/Home'
import GzHome from './salary/Home'
import GzResult from './salary/Result'
import SbHome from './social/Home'
import SbResult from './social/Result'
const app = StackNavigator({
    //首屏广告
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    },
    //首页
    Home: {
        screen: Home,
        navigationOptions: {
            title: '会生活',
            headerLeft: null
        },
        path: '/home/home'
    },
    //个人工资计算器首页
    GzHome: {
        screen: GzHome,
        navigationOptions: {
        	  title: '计算页'
        },
        path: '/salary/home'
    },
    //个人工资计算器结果页
    GzResult: {
      	screen: GzResult,
  	    navigationOptions: {
  	      	title: '结果页',
  	    },
  	    path: '/salary/result'
    },
    //社保计算首页
    SbHome: {
        screen: SbHome,
        navigationOptions: {
            title: '社保计算页'
        },
        path: '/social/home'
    },
    //社保计算结果页
    SbResult: {
        screen: SbResult,
        navigationOptions: {
            title: '社保计算结果页'
        },
        path: '/social/result'
    },

})

export default app;
