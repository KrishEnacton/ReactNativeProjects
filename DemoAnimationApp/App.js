import React, { useState, useEffect } from 'react';
import posed from 'react-native-pose';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

// Components
import AnimatedHeader from './components/AnimatedHeader';
import DATA from './Data';

const App = () => {

  //const leftValue = useState(new Animated.Value(0))[0];
  const offset = useState(new Animated.Value(0))[0];
  //const [flag, setFlag] = useState(0);

  // const moveBall = () => {
  //   Animated.timing(leftValue, {
  //     toValue: 300,
  //     duration: 1000,
  //     useNativeDriver: false
  //   }).start();
  //   console.log("Inside Fun Value: ", leftValue);
  // }

  // const moveBallWithSpring = () => {
  //   if (flag == 0) {
  //     Animated.spring(leftValue, {
  //       toValue: 295,
  //       useNativeDriver: false
  //     }).start();
  //     setFlag(1);
  //   }
  //   else {
  //     Animated.spring(leftValue, {
  //       toValue: 0,
  //       useNativeDriver: false
  //     }).start();
  //     setFlag(0);
  //   }

  //   console.log("Inside Fun Value: ", leftValue);
  // }

  // console.log("Value: ", leftValue);

  return (
    <SafeAreaProvider>
      {/* <View style={styles.container}>
        <TouchableOpacity onPress={moveBallWithSpring}>
          <Animated.View style={[styles.myView, { marginLeft: leftValue }]}>
          </Animated.View>
        </TouchableOpacity>
      </View> */}
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} />
        <ScrollView
          style={{ flex: 1, backgroundColor: 'white' }}
          contentContainerStyle={{
            alignItems: 'center',
            paddingTop: 220,
            paddingHorizontal: 20
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: offset
                }
              }
            }
          ],
            { useNativeDriver: false }
          )}
        >
          {DATA.map(item => (
            <View
              key={item.id}
              style={{
                marginBottom: 20
              }}
            >
              <Text style={{ color: '#101010', fontSize: 32 }}>
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  myView: {
    backgroundColor: "red",
    borderRadius: 50,
    height: 100,
    width: 100,

  }
});

export default App;
