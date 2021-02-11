/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import createSagaMiddleware from 'redux-saga'
import ReduxThunk from 'redux-thunk'
import allReducers from './reducers/index';
import { SagaFuncation } from './actions/index';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(ReduxThunk, sagaMiddleware));
sagaMiddleware.run(SagaFuncation);


const RNRedux = () =>
(
    <Provider store={store}>
        <App />
    </Provider>

)



AppRegistry.registerComponent(appName, () => RNRedux);
