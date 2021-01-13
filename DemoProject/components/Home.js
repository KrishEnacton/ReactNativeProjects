import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


const Home = ({ navigation, route = null }) => {

    const onCategoryClick = () => {
        navigation.navigate('Category');
    }
    console.log(route);

    return (

        <View>

            <Text>Home : {route?.params?.name ? route.params.name : ""}</Text>
            <Button title="Show Category" onPress={onCategoryClick} />
        </View>

    );
}

export default Home;