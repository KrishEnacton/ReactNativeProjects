// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from '../components/Category';
import HomeScreen from '../components/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Category" component={CategoryScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} options={{ name: 'Krishna' }} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;