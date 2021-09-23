import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Cart() {
    return (
        <View style={styles.body}>
            <Text style={styles.headers}>hello this is cart component</Text>
            <View style={[styles.listItem, styles.elevation]}>
                <Text>Here's info as at HH:MM PM, Today</Text>
            </View>

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
        backgroundColor: "white",
        marginTop: 15,
        borderRadius: 10,
        padding: 10,
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    headers: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
export default Cart