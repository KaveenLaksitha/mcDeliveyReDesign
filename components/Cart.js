import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, RefreshControl, ImageBackground, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { getAllItems } from '../service/cartService';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
function Cart({ navigation }) {

    const [data, setData] = useState([]);
    var arr = []
    var total = 0;

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

        getAllItems().then((res) => {
            setData(res.data)
        })

    }, [])

    useEffect(() => {
        arr = data.slice(0, data.length)
    }, [data, arr])


    //to find index
    const index = (qty) => data.findIndex(function (item, i) {
        if (item._id === qty._id) {
            return (i + 2)
        }
    })

    //to decrease quantity
    const decrease = (qty) => {
        data[index(qty)].quantity = qty.quantity - 1;
        if (data[index(qty)].quantity >= 0) {
            setData(arr)
            arr[index(qty)].price = (qty.quantity - 1) * arr[index(qty)].price;
        }
    }

    //to increase quantity
    const increase = (qty) => {
        data[index(qty)].quantity = qty.quantity + 1;
        if (data[index(qty)].quantity < 10) {
            setData(arr)
            arr[index(qty)].price = (qty.quantity - 1) * arr[index(qty)].price;
        }
    }

    //to calculate total price
    const calculateTotal = () => {
        data.forEach(function (item, i) {
            total = (total + data[i].price)
        })
        console.log(total)
        return total;
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
                            <TouchableOpacity
                                onPress={() => { decrease(element) }}
                            >
                                <Icon name="squared-minus" size={30} />
                            </TouchableOpacity>
                            <Text style={styles.listItemQty}>0{data[index(element)].quantity}</Text>
                            <TouchableOpacity
                                onPress={() => { increase(element) }}
                            >
                                <Icon name="squared-plus" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.priceAbsolute}>
                            <Text style={styles.listItemPrice}>Rs.{(data[index(element)].quantity) * element.price}.00</Text>
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
                    style={{ maxHeight: 535, minHeight: 535, marginBottom: 10, marginTop: 10 }}
                >
                    {List()}
                </ScrollView>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("Home")}>
                        <View style={[styles.buttonRed, styles.elevation]}>
                            <Text style={{ fontSize: 16, color: 'white' }}>Cancel</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("Select Option", { price: calculateTotal() })}>
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
        marginLeft: 52,
    }
    ,
    image: {
        zIndex: -1,
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