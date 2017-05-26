/**
 * Created by shaotingzhou on 2017/5/18.
 */

import React,{Component} from 'react';
import { bindActionCreators } from  'redux';
import NewView from '../components/newView';
import * as NewAction from '../actions/newAction';
import { connect } from 'react-redux';

class New extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        const { state, actions } = this.props;
        return (
            <NewView
                NewAction = {state.bgColor}
                {...state}
                {...actions}
            />
        );
    }
}

export default connect(state => ({
        state:state.NewAction
    }),
    (dispatch) => ({
        actions: bindActionCreators(NewAction,dispatch)
    })
)(New);


