import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated
} from 'react-native';

import Header from './components/Header';



const App = () => {

  const ScrollY = useState(new Animated.Value(0))[0];

  return (
    <>

      <Header animatedValue={ScrollY} />
      <ScrollView

        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: ScrollY
              }
            }
          }
        ],
          { useNativeDriver: false }
        )}
      >
        <Text style={styles.text}>Hello1</Text>
        <Text style={styles.text}>Hello2</Text>
        <Text style={styles.text}>Hello3</Text>
        <Text style={styles.text}>Hello4</Text>
        <Text style={styles.text}>Hello5</Text>
        <Text style={styles.text}>Hello6</Text>
        <Text style={styles.text}>Hello7</Text>
        <Text style={styles.text}>Hello8</Text>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 120
  }
});

export default App;
