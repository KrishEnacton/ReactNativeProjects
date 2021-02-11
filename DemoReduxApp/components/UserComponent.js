import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, fetchProduct, removeUser, fData } from '../actions/index';

const UserComponent = () => {

    const [tmp, setTmp] = useState("");

    const users = useSelector(state => state.UserReducer);
    const apiData = useSelector(data => data.ApiReducer);
    const dispatch = useDispatch();

    const addUserFun = () => {
        dispatch(addUser(tmp));
    }

    const removeUserFun = (index) => {
        console.log("IndexRemove:", index);
        dispatch(removeUser(index));
    }

    const getUsers = () => {
        //dispatch(fetchProduct());
        //console.log("Data:", apiData);
        dispatch(fData());

    }

    return (
        <>
            <TextInput placeholder="Enter Username" onChangeText={setTmp} />
            <Button title="Add User" onPress={addUserFun} />
            <Button title="Get User" onPress={getUsers} />

            <FlatList
                data={users}
                keyExtractor={(item, index) => (index.toString())}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => removeUserFun(index)} >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>)
                }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>DATA FROM API</Text>
            <FlatList
                data={apiData}
                keyExtractor={(item, index) => (index.toString())}
                renderItem={({ item, index }) => {
                    // console.log("DATA : ", item);
                    return (
                        <TouchableOpacity onPress={() => removeUserFun(index)} >
                            <Text>{item.first_name}</Text>
                        </TouchableOpacity>)
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({

});


export default UserComponent;
