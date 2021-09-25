import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function AlaCarte() {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={Styles.square1}>

                </View>
                <View style={Styles.square1}>

                </View>
                <View style={Styles.square1}>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={Styles.square1}>

                </View>
                <View style={Styles.square1}>

                </View>
                <View style={Styles.square1}>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={Styles.square1}>

                </View>
                <View style={Styles.square1}>

                </View>
                <View style={Styles.square1}>

                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({

    square1: {

        width: 150,
        height: 180,
        backgroundColor: "white",
        borderColor: "#D8D8D8",
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 10,
        borderWidth: 1

    }

})

export default AlaCarte
