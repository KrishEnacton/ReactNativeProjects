import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

const Login = ({ navigation }) => {

    const [login, setLogin] = useState({
        Username: "admin",
        Password: "admin"
    });

    const [tmpUname, settmpUname] = useState("");
    const [tmpPwd, setTmpPwd] = useState("");

    const onLogin = () => {
        if (tmpUname == login.Username && tmpPwd == login.Password) {
            navigation.navigate('Home', { name: tmpUname });
        }
        else {
            alert("Invalid username or password")
        }
    }

    return (
        <>
            <Text style={{ margin: 50 }}></Text>
            <Text style={styles.header}>Login</Text>
            <Text style={{ margin: 10 }}></Text>
            <TextInput style={{ borderWidth: 1, width: 300, borderRadius: 10, textAlign: "center" }} placeholder="Username : e.g John Doe" onChangeText={settmpUname} />
            <Text style={{ margin: 10 }}></Text>
            <TextInput style={{ borderWidth: 1, width: 300, borderRadius: 10, textAlign: "center" }} secureTextEntry={true} placeholder="Password" onChangeText={setTmpPwd} />
            <Text style={{ margin: 10 }}></Text>
            <View style={{ width: 300, borderRadius: 10 }} >
                <Button style={{ width: 300 }} title="Login" onPress={onLogin}></Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center"
    },
    header: {
        fontSize: 40,
        color: "blue"
    }
})

export default Login;