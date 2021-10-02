import React from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'

function AlaCarte({ navigation }) {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Mc Fries')}>
                    <View style={[Styles.square1, Styles.elevation]}>
                        <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/cw4KRFK/goodeats-yqr-z-VTf-YVY9-HY0-unsplash.jpg" }}>

                        </Image>
                        <Text style={Styles.txt1}>Crispy Chicken</Text>
                        <Text style={Styles.txt2}>From Rs.200.00</Text>

                    </View>
                </TouchableHighlight>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/0rqhW4r/brian-chan-Nb-Xj-Zomy-NEM-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>McWings</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/JxmCLWM/leo-roza-CLMp-C9-Uhy-To-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Mc Drumlets</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/rHSwDTx/leo-roza-j2ofdcp-Pp-P0-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>McNuggests</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/30bmb0M/likemeat-8l-A4s3-Wj-Bds-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Chicken Wrap</Text>
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
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/rtBmVTB/christopher-alvarenga-r-QX9e-Vp-SFz8-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Mc Rice</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/dgJTqD6/amirali-mirhashemian-puc-P6j-ZSy-V4-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Cheese Burger</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/6rBnZC7/keriliwi-v-Jsw-ZL-s3k-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Mc Spicy Wings</Text>
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

export default AlaCarte
