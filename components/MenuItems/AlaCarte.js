import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function AlaCarte() {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>

                </View>
            </View>
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

})

export default AlaCarte
