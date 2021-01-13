
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../components/Login'
import Home from '../components/Home';
import Category from '../components/Category';
import Drawernavigator from './DrawerNavigator'

const Stack = createStackNavigator();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ name: 'Krishna' }}
      />

      <Stack.Screen
        name="Category"
        component={Drawernavigator}
        options={{ title: 'Category-Details' }}
      />
    </Stack.Navigator>
  );
};

const CategoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ title: 'Category-Details' }}
      />
    </Stack.Navigator>
  );
}

export default MyStackNavigator;
export { CategoryNavigator };
