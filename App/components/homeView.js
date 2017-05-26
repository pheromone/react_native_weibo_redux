/**
 * Created by shaotingzhou on 2017/5/18.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    Animated,
    Easing,
    Dimensions,
    AsyncStorage
} from 'react-native';
var {width,height} = Dimensions.get('window');


export default class HomeView extends Component {
    // 构造
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        // 初始状态
        this.state = {
            access_token:null
        };
    }

    render() {

        const {bgColor,changeBGColor} = this.props;
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        if(this.state.access_token != null){
            return (
                <View>
                    <Text>已经登录</Text>
                </View>
            );
        }else{
            return (
                <View style={{flex:1,backgroundColor:'white'}}>
                    <View style={{alignItems:'center',marginTop:100}}>
                        <Animated.Image source={require('../../image/no-login.png')} style={{width:width*0.6,height:width*0.6,transform: [{rotate: spin}] }}/>
                        <Image source={require('../../image/no-login-bg.png')} style={{marginTop:-width*0.3,width:width*0.6,height:width*0.3}}/>
                        <Image source={require('../../image/small_house.png')} style={{marginTop:-width*0.4,width:width*0.32,height:width*0.31}}/>
                        <Text style={{color:'gray',marginTop:50,backgroundColor: bgColor}} onPress={changeBGColor}>关注一些人,回到这里看看有什么惊囍</Text>
                        <Text>{bgColor}</Text>
                        <Image source={require('../../image/attention.png')} style={{marginTop:20,width:150,height:35}}/>
                    </View>
                </View>
            );
        }

    }

    //旋转动画
    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 10000,
                easing: Easing.linear
            }
        ).start(()=>this.spin())
    }

    componentWillMount (){
        console.disableYellowBox = true;  //关闭警告提示
        this.spin()  //旋转动画

        AsyncStorage.getItem(
            'access_token',
            (error,result)=>{
                if (!error){
                    this.setState({
                        access_token:result
                    })
                }
            }
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


