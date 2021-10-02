import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, RefreshControl, ImageBackground, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { getAllItems } from '../service/cartService';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
function Cart({ navigation }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState()
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    const [num3, setNum3] = useState(1);
    const [data, setData] = useState([]);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
        getAllItems().then((res) => {

            if (res.ok) {
                setData(res.data);
            }
        }).catch((err) => {
            alert("error", err);
        })
    }, []);

    useEffect(() => {

        getAllItems().then((data) => {
            setData(data.data)
        })
    }, [num1])

    const decreaseOne = () => {
        setNum1(num1 - 1);
        if (num1 == 1) { setNum1(1) }
    }
    const increaseOne = () => {
        setNum1(num1 + 1);
    }
    const decreaseTwo = () => {
        setNum2(num2 - 1);
        if (num2 == 1) { setNum2(1) }
    }
    const increaseTwo = () => {
        setNum2(num2 + 1);
    }
    const decreaseThree = () => {
        setNum3(num3 - 1);
        if (num3 == 1) { setNum3(1) }
    }
    const increaseThree = () => {
        setNum3(num3 + 1);
    }

    const List = () => {
        return data.map((element) => {
            return (
                <View style={[styles.listItem, styles.elevation]} key={element._id}>
                    <View style={styles.horizontal}>
                        <View style={styles.textAbsolute}>
                            <Text style={styles.listItemText}>{element.name}</Text>
                        </View>
                        <View style={styles.quantity}>
                            <TouchableOpacity onPress={decreaseOne} >
                                <Icon name="squared-minus" size={30} />
                            </TouchableOpacity>
                            <Text style={styles.listItemQty}>0{num1}</Text>
                            <TouchableOpacity onPress={increaseOne}>
                                <Icon name="squared-plus" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.priceAbsolute}>
                            <Text style={styles.listItemPrice}>Rs.{element.price}.00</Text>
                        </View>
                    </View>
                </View>
            )
        })
    }

    return (
        <View>
            <View style={styles.body}>
                <Text style={styles.headers}>Your Order</Text>
                <ScrollView
                    refreshControl={<RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} />}
                    style={{ maxHeight: 550, minHeight: 550, zIndex: 9999 }}
                >
                    {List()}
                </ScrollView>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("Home")}>
                        <View style={[styles.buttonRed, styles.elevation]}>
                            <Text style={{ fontSize: 16, color: 'white' }}>Cancel</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("Select Option")}>
                        <View style={[styles.buttonYellow, styles.elevation]}>
                            <Text style={{ fontSize: 16, color: 'black' }}>Checkout</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
            <ImageBackground source={{
                uri: "https://i.ibb.co/cC9bKMK/Nice-Png-ronald-mcdonald-face-png-4130175.png",
            }} style={styles.image}>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

    body: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    listItem: {
        opacity: 0.8,
        backgroundColor: "white",
        marginTop: 20,
        width: 370,
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        zIndex: 1
    },
    listItemText: {
        fontSize: 16,
    },
    listItemPrice: {
        fontSize: 16,
    },
    listItemQty: {
        margin: 5,
        fontSize: 16,
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    headers: {
        fontSize: 18,
        fontWeight: "bold",
    },
    textAbsolute: {
        width: 135,
    },
    quantity: {
        flexDirection: "row",
        alignItems: "center",
    },
    priceAbsolute: {
        marginLeft: 55,
    }
    ,
    image: {
        marginTop: 80,
        width: 412,
        height: 445,
        opacity: 0.15,
        position: 'absolute',

    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",

    },
    buttonYellow: {
        alignItems: "center",
        backgroundColor: "#FFC300",
        padding: 10,
        width: 150,
        borderRadius: 15,
    },
    buttonRed: {
        alignItems: "center",
        backgroundColor: "#FF3131",
        padding: 10,
        width: 150,
        borderRadius: 15,
        marginRight: 70
    },
});
export default Cart