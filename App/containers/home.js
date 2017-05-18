import React,{Component} from 'react';
import { bindActionCreators } from  'redux';
import OneView from '../components/homeView';
import * as oneActin from '../actions/homeAction';
import { connect } from 'react-redux';

class One extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerStyle:{backgroundColor:'red'},
        headerTintColor: 'white',
    })
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
      render() {
          const { state, actions } = this.props;
          return (
              <OneView
                  OneAction = {state.bgColor}
                  {...state}
                  {...actions}
              />
          );
      }
}

export default connect(state => ({
        state:state.OneAction
    }),
    (dispatch) => ({
        actions: bindActionCreators(oneActin,dispatch)
    })
)(One);