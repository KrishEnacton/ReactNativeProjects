import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import allReducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
import { getUserAction } from '../saga/UserSaga'

export default store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getUserAction);