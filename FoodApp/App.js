import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from './src/screens/HomeScreen';
import ListClickScreen from './src/screens/ListClickScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen
          name="BusinessSearch"
          component={HomeScreen}
        />
        <Stack.Screen
          name="ListClickScreen"
          component={ListClickScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
