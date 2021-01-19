import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableHighlight
} from 'react-native';

const ListComponent = ({ title, responce, navigation }) => {


    const navigateClick = (data) => {
        navigation.navigate("ListClickScreen", { data: data });
    }

    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={responce}
            horizontal={true}
            renderItem={({ item }) => {
                return (
                    <TouchableHighlight
                        onPress={() => navigateClick(item)}
                        underlayColor='black'
                    >
                        <View style={styles.parentView}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: item.image_url }}
                                style={styles.img}
                            />
                            <Text style={styles.title}>{item.name}</Text>
                        </View>
                    </TouchableHighlight>

                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    img: {
        height: 150,
        width: 100,
        margin: 5
    },
    title: {
        margin: 5
    },
    parentView: {
        marginHorizontal: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        width: 115
    }
});

export default ListComponent;