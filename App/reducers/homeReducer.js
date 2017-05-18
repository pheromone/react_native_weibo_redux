/**
 * Created by shaotingzhou on 2017/5/18.
 */
import * as types from '../actions/actionType';
const initialState = {
    bgColor: 'rgba(234,234,234,1.0)'
};
export default function oneMethod(state = initialState, actions = {}) {
    var R = parseInt(Math.random()*100+155)
    var G = parseInt(Math.random()*100+155)
    var B = parseInt(Math.random()*100+155)
    
    switch (actions.type){
        case types.CHANGEBGCOLOR:
            console.log(state,actions)
            return {
                ...state,
                bgColor:'rgba('+R+','+G+','+B+',1.0)',
            }
        default:
            return state;
    }

}