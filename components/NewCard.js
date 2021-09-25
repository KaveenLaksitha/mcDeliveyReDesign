import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput, TouchableHighlight } from 'react-native';


function NewCard({ navigation }) {

    const [cardType, onChangeCardType] = React.useState(null);
    const [cardNumber, onChangeCardNumber] = React.useState(null);
    const [nameOnCard, onChangeNameOnCard] = React.useState(null);
    const [ExpiryDate, onChangeExpiryDate] = React.useState(null);


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentody} >
                <View style={[styles.cardDisplay, styles.shadow]}>
                    <Image style={styles.visa}
                        source={{
                            uri: "https://i.ibb.co/PmDYwrP/visa.jpg"
                        }}></Image>

                    <Text style={styles.cardNo}>XXXX  XXXX  XXXX  1425</Text>
                    <Text style={styles.cardHolder}>Card Holder</Text>
                    <Text style={styles.Name}>Andrew Wilson</Text>
                    <Text style={styles.validThru}>Valid Thru</Text>
                    <Text style={styles.date}>10/24</Text>
                </View>
                <View style={[styles.cardInsert, styles.shadowguestUser]}>

                    <Text style={styles.textValue}>Card Type </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeCardType}
                        value={cardType}
                        placeholder="Visa/Master"
                        keyboardType="default"
                    />


                    <Text style={styles.textValue}>Card Number </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeCardNumber}
                        value={cardNumber}
                        placeholder="xxxx xxxx xxxx xxxx"
                        keyboardType="numeric"
                    />


                    <Text style={styles.textValue}>Name on Card </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeNameOnCard}
                        value={nameOnCard}
                        placeholder="Andrew Wilson"
                        keyboardType="default"
                    />


                    <Text style={styles.textValue}>Expiry Date </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeExpiryDate}
                        value={ExpiryDate}
                        placeholder="2021/10/14"
                        keyboardType="decimal-pad"
                    />


                </View>
                <TouchableHighlight style={styles.submitButton}
                    onPress={() => navigation.navigate('My Cards')}>
                    <Text style={styles.submitText}>Save Card</Text>
                </TouchableHighlight>

            </View>


        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    contentody: {
        padding: 10,
    },

    cardDisplay: {
        backgroundColor: "#F8F4F4",
        opacity: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        marginLeft: 10,
        width: 360,
        height: 180,
        borderColor: 'blue',
        borderWidth: 3

    },

    shadow: {
        shadowColor: "#52006A",
        elevation: 5,
        paddingBottom: 10,
    },

    cardInsert: {
        marginTop: 10,
        backgroundColor: "#F8F4F4",
        borderRadius: 10,
        padding: 0,
        marginTop: 30,
        marginLeft: 20,
        width: 346,
        height: 340

    },

    shadowguestUser: {
        shadowColor: "#52006A",
        elevation: 5,
        paddingBottom: 10,
    },

    visa: {
        width: 110,
        height: 60,
        marginTop: 0,
        marginLeft: 10,
    },

    cardNo: {
        position: "absolute",
        marginTop: 70,
        marginLeft: 65,
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardHolder: {
        position: "absolute",
        marginTop: 115,
        marginLeft: 20,
        fontSize: 14,
        fontWeight: 'bold'
    },
    Name: {
        position: "absolute",
        marginTop: 140,
        marginLeft: 16,
        fontSize: 14,
        fontWeight: 'bold'
    },
    validThru: {
        position: "absolute",
        marginTop: 115,
        marginLeft: 260,
        fontSize: 14,
        fontWeight: 'bold'
    },
    date: {
        position: "absolute",
        marginTop: 140,
        marginLeft: 275,
        fontSize: 14,
        fontWeight: 'bold'
    },
    textValue: {
        marginTop: 8,
        width: 320,
        padding: 6,
        marginLeft: 10,
        fontSize: 14,
        color: "black",
    },

    input: {
        marginTop: -10,
        marginLeft: 10,
        height: 38,
        margin: 12,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    submitText: {
        marginTop: 5,
        padding: 5,
        marginLeft: 40,
        fontSize: 18,
        color: "white",
    },
    submitButton: {
        position: "absolute",
        width: 150,
        height: 45,
        marginTop: 580,
        marginLeft: 130,
        backgroundColor: "#FF3133",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 3,
        shadowRadius: 3,
        elevation: 5,

    },
    submitText: {
        marginTop: 5,
        padding: 5,
        marginLeft: 30,
        fontSize: 18,
        color: "white",
    },

});

export default NewCard


