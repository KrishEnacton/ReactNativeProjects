import React, { useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

import CounterComponent from './components/CounterComponent';
import UserComponent from './components/UserComponent';


// const reducer = (state = initState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 }

//     case "DECREMENT":    
//       return { count: state.count - 1 }

//     default:
//       return state;
//   }
// }

//const store = createStore(reducer);

const App = () => {
  return (
    <>
      <CounterComponent />
      <UserComponent />
      {/* // <Home store={store} /> */}
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
