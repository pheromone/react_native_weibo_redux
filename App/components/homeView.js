/**
 * Created by shaotingzhou on 2017/5/18.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';


export default class HomeView extends Component {

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

                <Text style={styles.welcome} onPress={changeBGColor} >
                    XXX
                </Text>
            </View>
        );
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


