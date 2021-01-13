import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Button title="Colors Task 1" onPress={() => { navigation.navigate('Colors') }} />
            <Button title="Colors Task 2" onPress={() => { navigation.navigate('ColorChange') }} />
            <Button title="API Demo Task 3" onPress={() => { navigation.navigate('API_Demo') }} />
        </>
    )
}

export default HomeScreen;