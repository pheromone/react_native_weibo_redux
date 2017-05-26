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


import Message from './message';
import Home from './home';
import Find from './find';
import New from './new';
import Mine from './mine';

import LoginView from '../components/loginView'

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
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('../../image/home_selected.png') : require('../../image/home.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Message: {
            screen: Message,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ? require('../../image/message_selcted.png') : require('../../image/message.png') }
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        New: {
            screen: New,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: ' ',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ? require('../../image/new_selected.png') : require('../../image/new.png') }
                        style={{ width: 60, height: 45 ,marginBottom:-10}}
                    />
                )
            }),
        },
        Find: {
            screen: Find,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '发现',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ? require('../../image/find_selected.png') : require('../../image/find.png') }
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Mine: {
            screen: Mine,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ? require('../../image/mine_selected.png') : require('../../image/mine.png') }
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
    LoginView: {
        screen: LoginView,
    }


});
