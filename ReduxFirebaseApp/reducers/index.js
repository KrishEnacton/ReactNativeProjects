import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import NavigationReducer from './NavigationReducer';
import UserFirebaseReducer from './UserFirebaseReducer';

export default RootReducer = combineReducers({ UserReducer, NavigationReducer, UserFirebaseReducer });