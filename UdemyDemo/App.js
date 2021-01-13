
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeScreen from './screens/HomeScreen';
import ColorsScreen from './screens/ColorsScreen'
import ColorChangeScreen from './screens/ColorChangeScreen';
import APIScreen from './screens/APIScreen';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="Colors"
            component={ColorsScreen}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="ColorChange"
            component={ColorChangeScreen}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="API_Demo"
            component={APIScreen}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
