import React from 'react';
import {
    StyleSheet,
    Button,
    View
} from 'react-native';

const HomeComponent = ({ navigation }) => {
    return (
        <>
            <View style={{ marginTop: "50%" }}>
                <Button title="Redux Saga" onPress={() => navigation.navigate('Redux')} />
                <Button title="Firebase" onPress={() => navigation.navigate('Firebase')} />
                <Button title="Webview" onPress={() => navigation.navigate('Webview')} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
});

export default HomeComponent;
