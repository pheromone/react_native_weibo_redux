/**
 * Created by shaotingzhou on 2017/5/18.
 */
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(rootReducer);
export default  store;
