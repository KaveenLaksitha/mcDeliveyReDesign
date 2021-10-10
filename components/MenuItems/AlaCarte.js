import React, { useState, useEffect } from 'react'
import { Alert, RefreshControl, Text, View, TouchableHighlight, ScrollView, StyleSheet, Image } from 'react-native'
import { getAllFood } from "../../service/foodService"

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function AlaCarte({ navigation }) {

    const [FoodData, setData] = useState([]);

    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [state, setState] = useState('');



    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
        getAllFood(1).then((res) => {

            if (res.ok) {
                setData(res.data);
            }
        }).catch((err) => {
            alert("error", err);
        })
    }, []);

    useEffect(() => {
        try {
            getAllFood(1).then((res) => {

                setData(res.data);
                console.log("salad dataaaaaaaa", res.data)

            })
        } catch (err) {
            alert("error", err);
        }
    }, [])




    const navigate = () => {
        navigation.navigate('Mc Fries', {
            img, name, price, img
        })
    }

    const handlerLongClick = () => {
        //handler for Long Click
        Alert.alert("Delete Your Favourite!",
            "Hitting delete will wipe favorite meal from your favourite meals. This cannot be undone!",
            [
                { text: 'Delete', style: 'destructive' },
                { text: 'Cancel' },
            ],
            { cancelable: false }
        )
    };





    const List = () => {
        return FoodData.map((element) => {
            return (
                <View key={element._id}>

                    <TouchableHighlight underlayColor='none' onLongPress={handlerLongClick} onPress={() => { setImg(element.image); setName(element.name); setPrice(element.price); navigate(); }}>
                        <View style={[Styles.square1, Styles.elevation]}>
                            <Image style={Styles.img1} source={{ uri: element.image }}>

                            </Image>
                            <Text style={Styles.txt1}>{element.name}</Text>
                            <Text style={Styles.txt2}>Rs.{element.price}.00</Text>

                        </View>
                    </TouchableHighlight >

                </View >
            )
        })


    }





    return (
        <View>
            <ScrollView
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh} />}
                style={{ zIndex: 9999 }}
            >
                <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center" }}>
                    {List()}
                </View>

            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({

    square1: {

        width: 118,
        height: 180,
        backgroundColor: "white",
        borderColor: "#D8D8D8",
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 10,
        borderWidth: 1

    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    img1: {
        // marginTop: 2,
        // marginRight: 5,
        // marginLeft: 5,
        width: 117,
        height: 120,
        borderRadius: 10,
        resizeMode: "stretch",
        // borderWidth: 2,
        // borderRadius: 10,
    },
    txt1: {
        marginTop: 8,
        marginLeft: 6,
        fontWeight: "bold",

    },
    txt2: {
        marginTop: 2,
        marginLeft: 6,

    },




})

export default AlaCarte
