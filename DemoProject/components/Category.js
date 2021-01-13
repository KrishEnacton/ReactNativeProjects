import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    TextInput,
    Button
} from 'react-native';


const Category = () => {

    const [cList, setcList] = useState([
        { CategoryName: "Cat-1", key: Math.floor(Math.random() * (1000 - 1 + 1)).toString() }
    ]);

    var tmpCname = "";

    const setData = (data) => {
        tmpCname = data;
    }

    const addCat = () => {
        if (tmpCname.trim() == "") {
            alert("Category can not be null");
        }
        else {
            setcList((old) => {
                return [
                    ...old,
                    { CategoryName: tmpCname, key: Math.floor(Math.random() * (1000 - 1 + 1)).toString() }
                ]
            });
        }

    }

    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 30 }}>Category</Text>
            <TextInput placeholder="Enter CategoryName" onChangeText={setData} />
            <Button title="Add Category" onPress={addCat} />
            <FlatList
                data={cList}
                renderItem={({ item }) => {
                    return (
                        <Text>Name : {item.CategoryName} Key : {item.key}</Text>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Category;