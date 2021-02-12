import React from 'react';
import {
    StyleSheet,
    Button,
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';

const WebviewComponent = ({ navigation }) => {

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{
                    uri: 'https://github.com/facebook/react-native'
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
});

export default WebviewComponent;
