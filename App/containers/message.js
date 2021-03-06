/**
 * Created by shaotingzhou on 2017/5/18.
 */

import React,{Component} from 'react';
import {
    View,
    Image
}from 'react-native'
import { bindActionCreators } from  'redux';
import MessageView from '../components/messageView';
import * as MessageAction from '../actions/messageAction';
import { connect } from 'react-redux';

class Message extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        const { state, actions } = this.props;
        return (
            <MessageView
                MessageAction = {state.logined}
                {...state}
                {...actions}
            />
        );
    }
}

export default connect(state => ({
        state:state.MessageAction
    }),
    (dispatch) => ({
        actions: bindActionCreators(MessageAction,dispatch)
    })
)(Message);

