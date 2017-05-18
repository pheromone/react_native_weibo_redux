/**
 * Created by shaotingzhou on 2017/5/18.
 */
import React,{ Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


import Two from './message';
import One from './home';

export default class RootScene extends Component {

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                             // 只要切换tab,push,pop,这里一定走
                             console.log(prevState)
                             console.log(currentState)

                        }
                    }
            />
        );
    }
}

const Tab = TabNavigator({
        One: {
            screen: One,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('../image/home_selected.png') : require('../image/home.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Two: {
            screen: Two,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ? require('../image/message_selcted.png') : require('../image/message.png') }
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },

    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#979797',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },

    });

const Navigator = StackNavigator({
    Tab: {
        screen: Tab,

    },

});
