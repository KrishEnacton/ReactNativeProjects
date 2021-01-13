import React, { useState } from 'react';
import {
    View,
    Button,
} from 'react-native';

const ColorChangeScreen = () => {

    const [clist, setClist] = useState([{}]);

    const [red, setRed] = useState(0);
    const [gereen, setGereen] = useState(0);
    const [blue, setBlue] = useState(0);

    const RandomColors = (operation, color) => {
        if (operation === 'i' && color === 'red') {
            if (red < 255)
                setRed(red + 15);
        }
        else if (operation === 'd' && color === 'red') {
            if (red >= 0)
                setRed(red - 15);
        }
        else if (operation === 'i' && color === 'green') {
            if (gereen < 255)
                setGereen(gereen + 15);
        }
        else if (operation === 'd' && color === 'green') {
            if (gereen >= 0)
                setGereen(gereen - 15);
        }
        else if (operation === 'i' && color === 'blue') {
            if (blue < 255)
                setBlue(blue + 15);
        }
        else if (operation === 'd' && color === 'blue') {
            if (blue >= 0)
                setBlue(blue - 15);
        }
    }

    return (
        <>
            <Button title="Red +" onPress={() => RandomColors('i', 'red')} />
            <Button title="Red -" onPress={() => RandomColors('d', 'red')} />
            <Button title="Green +" onPress={() => RandomColors('i', 'green')} />
            <Button title="Green -" onPress={() => RandomColors('d', 'green')} />
            <Button title="Blue +" onPress={() => RandomColors('i', 'blue')} />
            <Button title="Blue -" onPress={() => RandomColors('d', 'blue')} />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${gereen},${blue})` }} ></View>
        </>
    )
}

export default ColorChangeScreen;