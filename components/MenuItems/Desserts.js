import React from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native'

function Desserts({ navigation }) {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('View Item')}>
                    <View style={[Styles.square1, Styles.elevation]}>
                        <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg" }}>

                        </Image>
                        <Text style={Styles.txt1}>Mc French Fries</Text>
                        <Text style={Styles.txt2}>From Rs.160.00</Text>

                    </View>
                </TouchableHighlight>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>


                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

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

export default Desserts
