/**
 * Created by shaotingzhou on 2017/5/18.
 */
import {
    View,
    Image
}from 'react-native'
import React,{Component} from 'react';
import { bindActionCreators } from  'redux';
import FindView from '../components/findView';
import * as FindAction from '../actions/findAction';
import { connect } from 'react-redux';

class Find extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        const { state, actions } = this.props;
        return (
            <FindView
                FindAction = {state.bgColor}
                {...state}
                {...actions}
            />
        );
    }
}

export default connect(state => ({
        state:state.FindAction
    }),
    (dispatch) => ({
        actions: bindActionCreators(FindAction,dispatch)
    })
)(Find);
