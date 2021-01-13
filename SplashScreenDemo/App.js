
import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import BackgroundColor from 'react-native-background-color';

// class App extends Component {
//   componentDidMount() {
//     // do stuff while splash screen is shown
//     // After having done stuff (such as async tasks) hide the splash screen
//     BackgroundColor.setColor('#FFFFFF');
//     { SplashScreen.hide() };
//   }
//   render() {
//     return (
//       <View styles={styles.default}>
//         <Text >Hello, I am Krish!</Text>
//       </View>
//     );
//   }
// }

const App = () => {

  useEffect(() => {
    alert("Hello");
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Text>Hello</Text>
    </>
  );
};

const styles = StyleSheet.create({

  default: {
    backgroundColor: "white"
  }

});

export default App;
