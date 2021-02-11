import React from 'react';
import { Animated, View, TextInput, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 200;

const AnimatedHeader = ({ animatedValue }) => {
    //console.log("Scroll X : ", animatedValue);
    const insets = useSafeAreaInsets();
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [HEADER_HEIGHT, 50],
        extrapolate: 'clamp'
    });
    const inputHeight = animatedValue.interpolate({
        inputRange: [100, 200],
        outputRange: [200, 40],
        extrapolate: 'clamp'
    });
    const inputMargin = animatedValue.interpolate({
        inputRange: [150, 200],
        outputRange: [50, 10],
        extrapolate: 'clamp'
    });
    return (
        <Animated.View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                elevation: 10,
                height: headerHeight,
                backgroundColor: 'lightblue'
            }}
        >
            <Animated.View style={[styles.parentView, { height: inputHeight, marginHorizontal: inputMargin }]}>
                <TextInput style={styles.input}></TextInput>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "black"
    },
    parentView: {
        marginHorizontal: "15%",
        marginTop: "1%",

    }
})

export default AnimatedHeader;