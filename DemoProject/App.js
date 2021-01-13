import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MyStackNavigator from './navigation/MyStackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

// import Login from './components/Login'
// import Home from './components/Home';
// import Category from './components/Category';


const App = () => {
  return (
    <NavigationContainer>
      <MyStackNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>

  );
};

export default App;
