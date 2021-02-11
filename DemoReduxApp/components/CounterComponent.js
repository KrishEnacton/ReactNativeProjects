import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/index';

const CounterComponent = () => {

    const count = useSelector(state => state.CounterReducer);    
    const dispatch = useDispatch();
    
    const incrementVal = () => {
        dispatch(increment());
    }

    const decrementVal = () => {
        dispatch(decrement());
    }

    return (
        <>
            <Button title="Increment" onPress={incrementVal} />
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>{count.count}</Text>
            <Button title="Decrement" onPress={decrementVal} />
        </>
    );
};

const styles = StyleSheet.create({

});



export default CounterComponent;
