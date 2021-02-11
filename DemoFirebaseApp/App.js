
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import firebase, { } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { fbConfig } from './config';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';


const App = () => {

  const [input, setInput] = useState("");

  const addCategory = () => {

    var key;

    const pObj = new Promise((resolve, reject) => {
      const snapshot = database().ref('/Categories').on('value', snapshot => {
        if (snapshot.val() !== null) {
          console.log("Length : ", Object.keys(snapshot.val()).length);
          key = Object.keys(snapshot.val()).length;
          resolve(key);
        }
        else {
          key = 0;
          resolve(key);
        }
      });
    });

    pObj.then((key) => {
      console.log("Key : ", key);
      const reference = database().ref('/Categories');
      const newReference = reference.child(`${key}`).child("CategoryName").set(input);
    });

  }

  const removeRecord = () => {

    const snapshot = database().ref('/Categories/{CategoryName:Cat-1}');
    snapshot.remove();

  }

  return (
    <>

      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input onChangeText={setInput} />
        </Item>

        <Button primary style={styles.btn} onPress={() => addCategory()}><Text> Submit </Text></Button>

        <Button primary style={styles.btn} onPress={() => removeRecord()}><Text> Remove </Text></Button>
      </Form>

    </>
  );
};

const styles = StyleSheet.create({
  btn: {

    marginTop: 10,
    width: "95%",
    marginHorizontal: 10,
    justifyContent: "center"
  }
});

export default App;
