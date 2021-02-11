import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Animated
} from 'react-native';
import Search from './Search';
const Header = ({ animatedValue }) => {

    const headerHeight = animatedValue.interpolate({
        inputRange: [0, 250],
        outputRange: [200, 50],
        extrapolate: 'clamp'
    });

    return (

        <Animated.View style={[styles.header, { height: headerHeight }]}>
            <Search animatedValue={animatedValue} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    header: {

        backgroundColor: "red",
        height: 200,
        width: "100%",
        elevation: 50,
    }
});

export default Header;
