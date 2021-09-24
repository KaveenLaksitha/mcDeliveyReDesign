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
        backgroundColor: "#FFC300",
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        marginLeft: 25,
        width: 320,
        height: 180

    },

    shadow: {
        shadowColor: "#52006A",
        elevation: 5,
        paddingBottom: 10,
    },

    cardInsert: {
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 0,
        marginTop: 30,
        marginLeft: 25,
        width: 320,
        height: 340

    },

    shadowguestUser: {
        shadowColor: "#52006A",
        elevation: 5,
        paddingBottom: 10,
    },

    cardNo: {
        position: "absolute",
        marginTop: 60,
        marginLeft: 40,
        fontSize: 20
    },
    cardHolder: {
        position: "absolute",
        marginTop: 115,
        marginLeft: 20,
        fontSize: 14
    },
    Name: {
        position: "absolute",
        marginTop: 140,
        marginLeft: 16,
        fontSize: 14
    },
    validThru: {
        position: "absolute",
        marginTop: 115,
        marginLeft: 230,
        fontSize: 14
    },
    date: {
        position: "absolute",
        marginTop: 140,
        marginLeft: 243,
        fontSize: 14
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
        marginTop: 630,
        marginLeft: 120,
        backgroundColor: "#FF3133",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 3,
        shadowRadius: 3,
        elevation: 15,

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



