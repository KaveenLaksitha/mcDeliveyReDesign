import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableHighlight, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native'
import HandIcon from 'react-native-vector-icons/FontAwesome5'
import VisaIcon from 'react-native-vector-icons/Fontisto'
import { RadioButton } from 'react-native-paper';

import { useToast } from 'react-native-styled-toast'

let index = 1;

const setBorderColor = (choice) => {
    index = choice;
}

function CheckoutCOD({ navigation, route }) {

    const [checked, setChecked] = useState('first');
    const [discount, setDiscount] = useState(0);
    const [input, setInput] = useState("")

    const { toast } = useToast()

    function calculateDiscount() {

        if (input.length > 0) {
            toast({ message: 'Promo code applied!' })
            setDiscount(300)
        } else {
            toast({
                message: 'promo code can\'t be empty!',
                toastStyles: {
                    borderColor: '#FF3131',
                },
                iconFamily: 'Entypo',
                iconName: 'info',
                iconColor: 'red',
                hideAccent: true,
                hideCloseIcon: true
            })
        }
    }

    return (
        <ScrollView>
            <View style={styles.compBody}>
                <Text style={styles.header1}>Payment Method</Text>

                <View style={[styles.listItemSelected, styles.elevation, { borderColor: index === 1 ? '#F79E1B' : 'white' }]}>
                    <View style={styles.horizontal}>
                        <VisaIcon name="visa" color='#00009c' size={40} />
                        <View style={{ marginLeft: 30, marginTop: 0, marginRight: 25 }}>
                            <Text style={styles.text}>Visa Card </Text>
                            <Text style={styles.textSub}>{"\n"}0000 **** **** **** 0000</Text>
                        </View>
                        <RadioButton
                            value="first"
                            color={'#FF3131'}
                            uncheckedColor={'#FF3131'}
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked('first'); setBorderColor(1) }}
                        />
                    </View>
                </View>
                <View style={[styles.listItem, styles.elevation, { borderColor: index === 2 ? '#F79E1B' : 'white' }]}>
                    <View style={styles.horizontal}>
                        <HandIcon name="hand-holding-usd" color='#F79E18' size={40} />
                        <View style={{ marginLeft: 30, marginRight: 90 }}>
                            <Text style={styles.text}>Cash On Delivery</Text>

                        </View>
                        <RadioButton
                            value="second"
                            color={'#FF3131'}
                            uncheckedColor={'#FF3131'}
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => { setChecked('second'); setBorderColor(2) }}
                        />
                    </View>
                </View>

                <Text style={styles.header2}>Delivery Address</Text>

                <View style={[styles.listItemAddress, styles.elevation]}>
                    <View style={styles.horizontal}>
                        <View style={{ width: 290 }}>
                            <Text style={styles.text}>3rd floor "Samagam Medura",400,{"\n"}D.R. Wijewardena Mawatha{"\n"}Colombo 10</Text>
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate("Delivery Address Book") }}>
                            <Text style={{ fontSize: 18, color: '#7E7E7E' }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.header2}>Promo Code</Text>
                <View style={styles.horizontal}>
                    <View style={[styles.promoInput, styles.elevation]}>
                        <TextInput style={styles.text}
                            placeholder="Code" onChangeText={(e) => { setInput(e) }} />
                    </View>

                    <TouchableHighlight underlayColor='none' onPress={() => calculateDiscount()}>
                        <View style={[styles.buttonEnter, styles.elevation]}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }} >Enter</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={[styles.container2, styles.elevation]}>
                <View style={styles.horizontal}>
                    <Text style={styles.textLeft}>
                        Items
                    </Text>
                    <Text style={styles.textRight}>
                        Rs.{route.params.price}.00
                    </Text>
                </View>
                <View style={styles.horizontal}>
                    <Text style={styles.textLeft}>
                        Delivery
                    </Text>
                    <Text style={styles.textRight}>
                        Rs.300.00
                    </Text>
                </View>
                <View style={styles.horizontal}>
                    <Text style={styles.textLeft}>
                        Discount
                    </Text>
                    <Text style={styles.textRight}>
                        Rs.{discount}.00
                    </Text>
                </View>
                <View style={styles.horizontal}>
                    <Text style={styles.textLeft}>
                        Total cost
                    </Text>
                    <Text style={[styles.textRight, { fontWeight: 'bold' }]}>
                        Rs.{(route.params.price + 300) - discount}.00
                    </Text>
                </View>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("ThankYou")}>
                    <View style={[styles.buttonConfirm, styles.elevation]}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Confirm & Pay</Text>
                        <HandIcon name="arrow-right" color='white' size={20} style={{ marginLeft: 30 }} />


                    </View>
                </TouchableHighlight>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    compBody: {
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20
    },
    header1: {
        fontSize: 18,
        fontWeight: "bold",
    },
    header2: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20
    },
    listItem: {
        backgroundColor: "white",
        marginTop: 20,
        width: 370,
        borderRadius: 10,
        paddingTop: 30,
        paddingRight: 20,
        paddingBottom: 30,
        paddingLeft: 20,
        borderWidth: 2

    },
    listItemSelected: {
        backgroundColor: "white",
        marginTop: 10,
        width: 370,
        borderRadius: 10,
        borderWidth: 2,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
    listItemAddress: {
        backgroundColor: "white",
        marginTop: 10,
        width: 370,
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
    },
    promoInput: {
        backgroundColor: "white",
        marginTop: 10,
        width: 255,
        borderRadius: 10,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderWidth: 0.5,
        borderColor: "#969696"

    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    text: {
        fontSize: 18,
    },
    textSub: {
        fontSize: 17,
    },
    textLeft: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'left',
        flex: 1
    },
    textRight: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'right',
        flex: 1
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
    },
    buttonEnter: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFC300",
        padding: 10,
        width: 95,
        height: 50,
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 15
    },
    buttonConfirm: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF3131",
        padding: 10,
        width: 290,
        height: 50,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 30
    },
    container2: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: 270,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 40
    },
})

export default CheckoutCOD
