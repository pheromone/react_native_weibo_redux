/**
 * Created by shaotingzhou on 2017/5/18.
 */

import React,{Component} from 'react';
import { bindActionCreators } from  'redux';
import MineView from '../components/mineView';
import * as MineAction from '../actions/mineAction';
import { connect } from 'react-redux';

class Mine extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        const { state, actions } = this.props;
        return (
            <MineView
                MineAction = {state.bgColor}
                {...state}
                {...actions}
            />
        );
    }
}

export default connect(state => ({
        state:state.MineAction
    }),
    (dispatch) => ({
        actions: bindActionCreators(MineAction,dispatch)
    })
)(Mine);


