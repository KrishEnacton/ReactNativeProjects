import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeComponent from './components/HomeComponent';
import FirebaseComponent from './components/FirebaseComponent';
import ReduxComponent from './components/ReduxComponent';
import WebviewComponent from './components/WebviewComponent';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{
            title: 'Welcome', headerShown: true, headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />
        <Stack.Screen
          name="Firebase"
          component={FirebaseComponent}
          options={{
            title: 'Firebase', headerShown: true, headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />
        <Stack.Screen
          name="Redux"
          component={ReduxComponent}
          options={{
            title: 'Redux', headerShown: true, headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />
        <Stack.Screen
          name="Webview"
          component={WebviewComponent}
          options={{
            title: 'Redux', headerShown: true, headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleStyle: { alignSelf: 'center' },
          }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
