/**
 * Created by shaotingzhou on 2017/5/18.
 */
import  { combineReducers } from 'redux';
import HomeAction from './homeReducer'
import MessageAction from './messageReducer'
import NewAction from './newReducer'
import MineAction from './mineReducer'
import FindAction from './findReducer'



export  default  rootReducer = combineReducers({
    HomeAction,
    MessageAction,
    NewAction,
    MineAction,
    FindAction
})