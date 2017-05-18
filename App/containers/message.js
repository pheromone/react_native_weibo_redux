/**
 * Created by shaotingzhou on 2017/5/18.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing
} from 'react-native';


export default class Two extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '订单',
        headerRight: (
            <Image source={require('../image/small_house.png')} style={{width:20,height:20,marginRight:5}} />
        ),
        headerLeft: (
            <View style={{marginLeft:5,flexDirection:'row'}}>
                <Image style={{ width: 20, height: 20 }} source={require('../image/small_house.png')} />
                <Text style={{ fontSize: 15, color: '#333333' }}> android</Text>
            </View>
        ),
        headerStyle:{backgroundColor:'cyan'},
    })


    render() {

        return (
            <View style={styles.container}>

            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


