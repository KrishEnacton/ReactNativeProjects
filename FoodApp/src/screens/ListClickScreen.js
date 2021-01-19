import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,

} from 'react-native';


const ListClickComponent = ({ route }) => {

    const [data, setData] = useState("");

    useEffect(() => {
        setData(route.params.data);
        console.log("Data : ", route.params.data);
    }, []);

    return (
        <View style={styles.parentView}>
            <View style={styles.childView}>
                <Text style={styles.title}>{data.name}</Text>
                <View style={styles.imgView}>
                    <Image
                        style={styles.tinyLogo}
                        source={{ uri: data.image_url }}
                        style={styles.img}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.phone} >Phone : {data.phone}</Text>
                    <Text style={styles.rating} >Rating : {data.rating}/5</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        textAlignVertical: "center",
        borderColor: "black",
        borderRadius: 5,
        backgroundColor: "#FFA07A",
        fontSize: 18,
        fontWeight: "bold",
        height: "11%",
        marginBottom: "10%",
        marginVertical: "10%",
        marginHorizontal: "10%"
        //margin: "25%"
    },
    parentView: {
        backgroundColor: "black",
        flex: 1,
    },
    childView: {
        justifyContent: "center",
    },
    imgView: {
        height: "50%",
        marginHorizontal: "10%"
    },
    img: {
        height: "100%",
        width: "100%",
        borderRadius: 5
    },
    phone: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
        marginHorizontal: "10%",
        marginTop: "5%"
    },
    rating: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
        marginHorizontal: "10%",
        marginTop: "5%",
        marginBottom: "5%"
    },
    info: {

        borderRadius: 5,
        marginHorizontal: "10%",
        marginTop: "10%",
        backgroundColor: "#FFA07A"
    }
});

export default ListClickComponent;