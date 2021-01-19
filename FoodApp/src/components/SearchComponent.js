import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchComponent = ({ searchData, applySearch }) => {

    return (
        <View style={styles.parent}>
            <Icon
                style={styles.icon}
                name="search"
                size={30}
                color="#000000"
            />
            <TextInput
                style={styles.input}
                onChangeText={searchData}
                placeholder="Search"
                onEndEditing={applySearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        margin: 25,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#F0EEEE",
        borderRadius: 5,
        height: 50,
    },
    input: {
        fontSize: 18,
        flex: 1
    },
    icon: {
        alignSelf: "center",
        marginHorizontal: 10
    }
});

export default SearchComponent;