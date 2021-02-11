import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated,
    TextInput
} from 'react-native';

const HEADER_HEIGHT = 200;

const Search = ({ animatedValue }) => {

    const searchOpacity = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });

    return (
        <Animated.View style={[styles.search, { opacity: searchOpacity }]}>
            <TextInput placeholder="Search Here" />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    search: {

    }
});

export default Search;
