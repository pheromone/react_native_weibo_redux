/**
 * Created by shaotingzhou on 2017/5/18.
 */
import React,{Component} from 'react';
import { bindActionCreators } from  'redux';
import HomeView from '../components/homeView';
import * as HomeAction from '../actions/homeAction';
import { connect } from 'react-redux';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing,
    AsyncStorage
} from 'react-native';
var access_token = ''
class Home extends Component {
      render() {
          const { state, actions } = this.props;
          return (
              <HomeView
                  HomeAction = {state.bgColor}
                  {...state}
                  {...actions}
                  {...this.props}
              />
          );
      }

      // 构造
        constructor(props) {
          super(props);
          // 初始状态
          this.state = {
              sss:'33333'
          };
        }

    componentWillMount (){
        console.disableYellowBox = true;  //关闭警告提示

        AsyncStorage.getItem(
            'access_token',
            (error,result)=>{
                if (!error){
                    access_token = result
                }
            }
        )
    }

}
if(access_token){
    Home.navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerLeft: (
            <View style={{marginLeft:10,flexDirection:'row'}}>
                <Image style={{ width: 20, height: 20 }} source={require('../../image/相机.png')} />
            </View>
        ),
        headerRight: (
            <Image source={require('../../image/二维码.png')} style={{width:20,height:20,marginRight:10}} />
        ),
        headerStyle:{backgroundColor:'#E8E8E8'},
    })
}else {
    Home.navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerLeft: (
            <Text style={{marginLeft:10,color:'#FFC125'}}>注册</Text>
        ),
        headerRight: (
            <Text style={{marginRight:10,color:'#FFC125'}} onPress={()=>{navigation.navigate('LoginView')}}>登录</Text>
        ),
        headerStyle:{backgroundColor:'#E8E8E8'},
    })
}



export default connect(state => ({
        state:state.HomeAction
    }),
    (dispatch) => ({
        actions: bindActionCreators(HomeAction,dispatch)
    })
)(Home);