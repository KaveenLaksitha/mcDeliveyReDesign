import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';


function Cart({ navigation }) {


    return (
        <View>
            <View style={styles.body}>
                <Text style={styles.headers}>Your Order</Text>
                <View style={[styles.listItem, styles.elevation]}>
                    <View style={styles.horizontal}>
                        <Text style={styles.listItemText}>Ziinger Burger</Text>
                        <Icon name="squared-minus" size={30} />
                        <Text style={styles.listItemQty}>01</Text>
                        <Icon name="squared-plus" size={30} />
                        <Text style={styles.listItemPrice}>Rs.740.00</Text>
                    </View>
                </View>
                <View style={[styles.listItem, styles.elevation]}>

                    <View style={styles.horizontal}>
                        <Text style={styles.listItemText}>Cheese Burger</Text>
                        <Icon name="squared-minus" size={30} />
                        <Text style={styles.listItemQty}>01</Text>
                        <Icon name="squared-plus" size={30} />
                        <Text style={styles.listItemPrice}>Rs.540.00</Text>
                    </View>
                </View>
                <View style={[styles.listItem, styles.elevation]}>

                    <View style={styles.horizontal}>
                        <Text style={styles.listItemText}>Double Cheese</Text>
                        <Icon name="squared-minus" size={30} />
                        <Text style={styles.listItemQty}>01</Text>
                        <Icon name="squared-plus" size={30} />
                        <Text style={styles.listItemPrice}>Rs.640.00</Text>
                    </View>
                </View>
                <View style={{ marginTop: 270, flexDirection: 'row' }}>
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
    },
    listItemText: {
        fontSize: 16,
        marginRight: 40,
    },
    listItemPrice: {
        fontSize: 16,
        marginLeft: 45
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