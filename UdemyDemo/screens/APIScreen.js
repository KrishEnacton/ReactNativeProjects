import React, { useState, useEffect } from 'react';
import {
    View,
    Button,
    FlatList,
    Text
} from 'react-native';
const axios = require('axios');

const APIScreen = () => {

    const [apiData, setApiData] = useState("");

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/todos/',
    //     })
    //         .then(function (response) {
    //             setApiData(response.data);
    //         });
    // }, []);

    const getData = () => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/',
        })
            .then(function (response) {
                setApiData(response.data);
            });
    }

    return (
        <>
            <Button title="Get Data From API" onPress={getData} />
            <FlatList
                initialNumToRender={26}
                keyExtractor={item => item.id.toString()}
                data={apiData}
                renderItem={({ item }) => {
                    return <Text>Id: {item.id}  Name : {item.title}</Text>
                }}
            />
        </>
    )
}

export default APIScreen;