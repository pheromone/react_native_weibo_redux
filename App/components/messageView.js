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
    AsyncStorage,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
var {width,height} = Dimensions.get('window');


export default class MessageView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            access_token:null
        };
    }
    render() {

        const {logined,login} = this.props;

        if(this.state.access_token != null){
            return (
                <View>
                    <Text>已经登录</Text>
                </View>
            );
        }else{
            return (
                <View style={{flex:1}}>
                    <View style={{alignItems: 'center',marginTop:100}}>
                        <Image source={require('../../image/消息.png')} style={{width: 200,height:200}} />
                        <Text style={{marginLeft:50,marginRight:50,color:'gray'}}>登录后,别人评论你的微博,给你发消息,都会在这里收到通知</Text>
                        <View style={{flexDirection:'row',width:width-100,justifyContent:'space-around',marginTop:30}}>
                            <TouchableOpacity onPress={()=>this.loginAction()}>
                                <Image source={require('../../image/注册.png')} style={{width: 60,height:30}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.loginAction()}>
                                <Image source={require('../../image/登录.png')} style={{width: 60,height:30}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            );
        }
    }


    loginAction =() => {
        this.props.navigation.navigate('loginView', { name: 'XXX' ,age:25})

    }

    componentWillMount (){
        console.disableYellowBox = true;  //关闭警告提示

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


