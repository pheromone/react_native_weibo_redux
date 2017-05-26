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
    AsyncStorage
} from 'react-native';


export default class FindView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }
    render() {

        const {bgColor,changeBGColor} = this.props;

        return (
            <View style={[styles.container,{backgroundColor: bgColor}]}>

                <Text style={styles.welcome} onPress={()=>this.loginOut()} >
                    发现
                </Text>
            </View>
        );
    }
    componentWillMount(){
        console.disableYellowBox = true;  //关闭警告提示
    }

    loginOut = ()=> {
        //取值里面 有 网络请求  有 移除本地存值 有 跳转  ? 性能问题
        AsyncStorage.getItem(
            'access_token',
            (error, result) => {
                if (!error) {
                    //值有 开始网络请求
                    fetch('https://api.weibo.com/oauth2/revokeoauth2?access_token=' + result)
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json)
                            if(json.result == "true"){  //只有服务器移除授权之后才移除本地存值
                                AsyncStorage.removeItem(
                                    'access_token',
                                    (error)=>{
                                        if(!error){

                                        }
                                    }
                                )
                            }else {
                                alert('没登录,点个毛')
                            }

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


