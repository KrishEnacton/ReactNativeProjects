import React, { useState } from 'react';
import {
    View,
    Button,
    FlatList
} from 'react-native';

const ColorsScreen = () => {

    const [clist, setClist] = useState([]);

    const [red, setRed] = useState("255");
    const [gereen, setGereen] = useState("255");
    const [blue, setBlue] = useState("255");

    const randomColors = () => {
        setRed(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
        setGereen(Math.floor(Math.random() * 256));
        setClist(
            [
                {
                    red: red,
                    gereen: gereen,
                    blue: blue,
                    keys: Math.random().toString()
                },
                ...clist
            ]
        );
    }

    return (
        <>
            <Button title="Generate Random Colors" onPress={randomColors} />
            <FlatList
                keyExtractor={item => item.keys}
                data={clist}
                renderItem={({ item }) => {
                    return <View style={{ width: 100, height: 100, backgroundColor: `rgb(${item.red},${item.gereen},${item.blue})` }} ></View>;
                }}
            />
        </>
    )
}

export default ColorsScreen;