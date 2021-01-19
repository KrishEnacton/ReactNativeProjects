import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import yelp from '../api/yelp';

import SearchComponent from '../components/SearchComponent';
import ResultComponent from '../components/ResultComponent'

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState("pizza");
    const [result, setResult] = useState([]);
    const [cheap, setCheap] = useState([]);
    const [normal, setNormal] = useState([]);
    const [expensive, setExpensive] = useState([]);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        searchApi();
    }, []);

    const searchApi = async () => {
        setFlag(true);
        const responce = await yelp.get("/search", {
            params: {
                limit: 50,
                term: search,
                location: 'san jose'
            }
        });

        setResult(responce.data.businesses);
        setData(responce.data.businesses);

    }

    const setData = (data) => {
        //console.log("Result : ", data);
        data.forEach((product) => {
            if (product.price == "$") {
                setCheap((old) => {
                    return [
                        product,
                        ...old
                    ]
                });
            }
            else if (product.price == "$$") {
                setNormal((old) => {
                    return [
                        product,
                        ...old
                    ]
                });
            }
            else {
                setExpensive((old) => {
                    return [
                        product,
                        ...old
                    ]
                });
            }
        });
        setFlag(false);
    }

    const filterResultByPrice = (price) => {
        //return 
    }

    return (
        <ScrollView style={styles.theme}>
            <View style={styles.theme}>
                <SearchComponent searchData={setSearch} applySearch={searchApi} />
                <Text style={styles.header}>Your serach is : {search} and result is : {result.length}</Text>
                {flag ? <ActivityIndicator style={{ marginTop: "10%" }} size="large" color="White" /> : <>
                    <ResultComponent title="Cheap" responce={cheap} navigation={navigation} />
                    <ResultComponent title="Normal" responce={normal} navigation={navigation} />
                    <ResultComponent title="Expensive" responce={expensive} navigation={navigation} />
                </>}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    theme: {
        backgroundColor: "black"
    },
    header: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
        color: "white"
    }
});


export default HomeScreen;