import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import allReducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
import { getUserAction } from '../saga/UserSaga'
import { composeWithDevTools } from 'redux-devtools-extension';

export default store = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(getUserAction);