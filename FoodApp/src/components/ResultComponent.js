import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import ListComponent from './ListComponent';

const ResultComponent = ({ title, responce, navigation }) => {

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>{title}</Text>
            <ListComponent title={title} responce={responce} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#F0EEEE",
        borderRadius: 5,
        height: 280,
        backgroundColor: "#FF4500"
    },
    title: {

        textAlign: "center",
        margin: 10,
        borderColor: "black",
        borderRadius: 5,
        backgroundColor: "#FFA07A",
        fontSize: 18,
        fontWeight: "bold"
    },
    icon: {
        alignSelf: "center",
        marginHorizontal: 10
    }
});

export default ResultComponent;