import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { connect } from 'react-redux';

const Home = (data) => {
    //const [val, setVal] = useState(0);

    const increment = () => {
        //setVal(val + 1);
        console.log("GetState : ", data.store.getState());
        data.dispatch({ type: "INCREMENT" });
    }

    const decrement = () => {
        //setVal(val - 1);
        data.dispatch({ type: "DECREMENT" });
    }

    return (
        <>
            <Button title="Increment" onPress={increment} />
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>{data.count}</Text>
            <Button title="Decrement" onPress={decrement} />
        </>
    );
};

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    console.log("Krishna : ", state);
    return { count: state.count }
}

export default connect(mapStateToProps)(Home);
