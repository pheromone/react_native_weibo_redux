/**
 * Created by shaotingzhou on 2017/5/25.
 */
import * as types from '../actions/actionType';

export default function oneMethod(state = {}, actions = {}) {


    switch (actions.type){
        case types.LOGIN:

            return {
                ...state,
                logined:this.props.navigation.goBack(),
            }
        default:
            return state;
    }

}