import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    ToastAndroid
} from 'react-native';

const HomeComponent = ({ navigation }) => {
    const tN = () => {
        ToastAndroid.show("Hello", ToastAndroid.LONG);
    }
    return (
        <>
            <View style={{ marginTop: "50%" }}>
                <Button title="Redux Saga" onPress={() => navigation.navigate('Redux')} />
                <Button title="Firebase" onPress={() => navigation.navigate('Firebase')} />
                <Button title="Webview" onPress={() => navigation.navigate('Webview')} />
                <Button title="Toast Notification" onPress={() => tN()} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
});

export default HomeComponent;
