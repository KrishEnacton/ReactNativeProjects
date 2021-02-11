import { combineReducers } from 'redux';
import CounterReducer from './counter';
import UserReducer from './user';
import ApiReducer from './apiReducer'

export default allReducers = combineReducers({
    CounterReducer,
    UserReducer,
    ApiReducer
})