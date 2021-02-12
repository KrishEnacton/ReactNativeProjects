import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    FlatList,
    Text
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../actions/UserAction';

const ReduxComponent = ({ navigation }) => {

    const UserReducer = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();

    const onPressHandler = () => {
        dispatch(getUserData());
    }

    return (
        <>
            <View >
                <Button title="Get Data From Api" onPress={() => onPressHandler()} />
                <FlatList

                    data={UserReducer}
                    keyExtractor={(item, index) => (index.toString())}
                    renderItem={({ item }) => {

                        return (
                            <Text>{item.first_name}</Text>
                        )
                    }}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
});

export default ReduxComponent;
