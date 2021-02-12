import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    FlatList,
    Text
} from 'react-native';

import database from '@react-native-firebase/database';

import { useSelector, useDispatch } from 'react-redux'
import { getUserDataFromFirebase } from '../actions/UserAction'

const FirebaseComponent = ({ navigation }) => {

    const data = useSelector(state => state.UserReducer);
    const UserFirebaseReducer = useSelector(state => state.UserFirebaseReducer);
    const dispatch = useDispatch();

    const addRecord = () => {
        const reference = database().ref('/Users');
        for (const key of data) {
            userDetails = reference.child(`${key.id}`).child("First_name").set(`${key.first_name}`);
        }
  
        let userDetails = [];
        database()
            .ref('/Users')
            .on('value', snapshot => {
                snapshot.forEach((data) => {
                    dispatch(getUserDataFromFirebase(data.val()));
                    // console.log("DataKey : ", data.key, "DataVal:", data.val());
                })
            })
    }

    return (
        <>
            <View>
                <Button title="Store Api Data" onPress={() => addRecord()} />
                <FlatList
                    data={UserFirebaseReducer}
                    keyExtractor={(item, index) => (index.toString())}
                    renderItem={({ item, index }) => {
                        console.log("Flatlist Data : ", item);
                        return (
                            <Text>{item.First_name}</Text>
                        )
                    }}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
});

export default FirebaseComponent;
