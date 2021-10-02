import React from 'react'
import { View, StyleSheet, Text, Image, TouchableHighlight, StatusBar } from 'react-native'


function DeliveryOptions({ navigation }) {
    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'red'} />
            <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("Checkout Take Away")}>
                <View style={[styles.listItem, styles.elevation]}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1585759071429-1646f76ab8c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80' }}
                        style={styles.image} />
                    <Text style={styles.listItemText}>Take Away</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("Checkout")}>
                <View style={[styles.listItem, styles.elevation]}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80' }}
                        style={styles.image} />
                    <Text style={styles.listItemText}>Deliver Now</Text>
                </View>
            </TouchableHighlight>
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
        alignItems: "center",
        backgroundColor: "#FFC300",
        marginTop: 30,
        width: 370,
        borderRadius: 10,
        paddingBottom: 10,
    },

    listItemText: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    image: {
        borderRadius: 10,
        width: 370,
        height: 200,
        marginLeft: -25,
        marginRight: -25,
        marginBottom: 10,
        resizeMode: 'stretch'
    },
})
export default DeliveryOptions
