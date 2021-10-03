import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableHighlight, ScrollView, Alert, ToastAndroid } from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome5'
import { createCard } from '../service/cardService';

// import DateTimePickerModal from "react-native-modal-datetime-picker";

function NewCard({ navigation }) {

    const [cardType, onChangeCardType] = useState("Visa");
    const [cardNumber, onChangeCardNumber] = useState();
    const [dcardNumber, onChangeDCardNumber] = useState();
    const [nameOnCard, onChangeNameOnCard] = useState();
    const [dnameOnCard, onChangeDNameOnCard] = useState();
    const [ExpiryDate, onChangeExpiryDate] = useState();
    const [dExpiryDate, onChangeDExpiryDate] = useState();
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);

    const [uri, setImageUri] = useState(" ")
    const [data, setData] = React.useState({
        cardNumber: '',
        nameOnCard: '',
        checkTextInputChange1: false,
        checkTextInputChange2: false,
        secureTextEntry: true,
        isValidNumber: true,
        isValidName: true
    });


    const textInputChange = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                cardNumber: val,
                checkTextInputChange1: true
            })
            handleCardNumber(val);
        } else {
            setData({
                ...data,
                cardNumber: '',
                checkTextInputChange1: false
            })
            handleCardNumber(val);
        }
    }

    const handleCardNumber = (value) => {
        let pattern = value;
        onChangeDCardNumber(value)
        if (value.trim().length == 19) {
            if (pattern.match('[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}')) {
                setData({
                    ...data,
                    isValidNumber: true,
                    checkTextInputChange1: true
                })
            }


        } else {
            setData({
                ...data,
                isValidNumber: false,
                checkTextInputChange1: false
            })
        }
    }

    const textInputChange2 = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                nameOnCard: val,
                checkTextInputChange2: true
            })
            handleName(val)
        } else {
            setData({
                ...data,
                nameOnCard: '',
                checkTextInputChange2: false
            })
            handleName(val);
        }
    }

    const handleName = (value) => {
        let pattern = value;
        onChangeDNameOnCard(value)

        if (pattern.match(/^[a-zA-Z\s]*$/)) {
            setData({
                ...data,
                isValidName: true,
                checkTextInputChange2: true
            })
        }
        else {
            setData({
                ...data,
                isValidName: false,
                checkTextInputChange2: false
            })
        }
    }

    function setCardImage(cardType) {
        if (cardType === "Master") {
            setImageUri("https://i.ibb.co/0KNQFf0/58482354cef1014c0b5e49c0.png")
        } else if (cardType === "Visa") {
            setImageUri("https://i.ibb.co/PmDYwrP/visa.jpg")
        } else if (cardType === "American Express") {
            setImageUri("https://i.ibb.co/wzYRpWW/am.png")
        }

    }

    function clearInputs() {
        onChangeCardNumber(" ");
        onChangeNameOnCard(" ");
        onChangeExpiryDate(" ");
    }

    const saveCard = () => {
        console.log("cardUri", uri);
        console.log(cardType + nameOnCard + cardNumber + ExpiryDate)
        if (cardType === " " || nameOnCard === " " || cardNumber === " " || ExpiryDate === " " || uri === " ") {
            ToastAndroid.show("Please fill all the fields before submitting", ToastAndroid.SHORT)
        } else {

            const newCard = {
                userId: "UI002",
                cardType,
                nameOnCard,
                cardNumber,
                ExpiryDate,
                uri
            }

            createCard(newCard).then((res) => {
                if (res.ok) {
                    ToastAndroid.show("Card Successfully Saved", ToastAndroid.SHORT);
                    clearInputs();
                    navigation.navigate("My Cards")
                } else {
                    Alert.alert("Error!", res.err);
                }

            }).catch((err) => {
                ToastAndroid.show("Card Could not be Saved", ToastAndroid.SHORT);
            })
        }
    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentody} >

                <ScrollView vertical={true}>
                    <View style={[styles.cardDisplay, styles.shadow]}>
                        <Image style={styles.visa}
                            source={{
                                uri: "https://i.ibb.co/PmDYwrP/visa.jpg"
                            }}></Image>

                        <TextInput style={styles.cardNo}
                            placeholder="XXXX XXXX XXXX 1425"
                            value={dcardNumber}
                            editable={false}
                        ></TextInput>
                        <Text style={styles.cardHolder}>Card Holder</Text>
                        <TextInput style={styles.Name}
                            placeholder="Andrew Wilson"
                            value={dnameOnCard}
                            editable={false}
                        ></TextInput>
                        <Text style={styles.validThru}>Valid Thru</Text>
                        <Text style={styles.date}>10/24</Text>
                    </View>

                    <View style={[styles.cardInsert, styles.shadowguestUser]}>

                        <Text style={styles.textValue}>Card Type </Text>
                        <Picker style={styles.pickerinput}
                            selectedValue={cardType}
                            onValueChange={(itemValue) => { onChangeCardType(itemValue); setCardImage(itemValue); }}

                        >
                            <Picker.Item label="Visa" value="Visa" />
                            <Picker.Item label="Master" value="Master" />
                            <Picker.Item label="American Express" value="American Express" />
                        </Picker>


                        <Text style={styles.textValue}>Card Number </Text>
                        {data.isValidNumber && data.checkTextInputChange1 ?
                            <View style={styles.validNo}>
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}>
                                </Feather>
                            </View>
                            : <View style={styles.validNo}>
                                <Feather
                                    name="star-of-life"
                                    color="red"
                                    size={10}>
                                </Feather>
                            </View>}
                        <TextInput style={[styles.input, { borderColor: isActive1 ? 'blue' : 'grey' }]}
                            onChangeText={(val) => { textInputChange(val); onChangeCardNumber(val) }}
                            value={cardNumber}
                            placeholder="xxxx xxxx xxxx xxxx"
                            keyboardType="numeric"
                            onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
                            onFocus={() => setActive1(true)}
                            onBlur={() => setActive1(false)}
                        />

                        {
                            data.isValidNumber ? false :
                                <Text style={styles.errMsg}>Card must include 16 numbers in correct format</Text>

                        }
                        < Text style={styles.textValue}>Name on Card </Text>
                        {data.isValidName && data.checkTextInputChange2 ?
                            <View style={styles.nameValid}>
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}>
                                </Feather>
                            </View>
                            : <View style={styles.nameValid}>
                                <Feather
                                    name="star-of-life"
                                    color="red"
                                    size={10}>
                                </Feather>
                            </View>}
                        <TextInput style={[styles.input, { borderColor: isActive2 ? 'blue' : 'grey' }]}
                            onChangeText={(val) => { textInputChange2(val); onChangeNameOnCard(val) }}
                            value={nameOnCard}
                            placeholder="Andrew Wilson"
                            keyboardType="default"
                            onEndEditing={(e) => textInputChange2(e.nativeEvent.text)}
                            onFocus={() => setActive2(true)}
                            onBlur={() => setActive2(false)}
                        />
                        {data.isValidName ? false :
                            <Text style={styles.errMsg}>Cannot use characters other than letters</Text>

                        }

                        <Text style={styles.textValue}>Expiry Date </Text>
                        <TextInput style={[styles.input, { borderColor: isActive3 ? 'blue' : 'grey' }]}
                            onChangeText={onChangeExpiryDate}
                            value={ExpiryDate}
                            placeholder="2021/10/14"
                            keyboardType="decimal-pad"
                            onFocus={() => setActive3(true)}
                            onBlur={() => setActive3(false)}
                        />

                    </View>
                </ScrollView>
                <TouchableHighlight style={styles.submitButton}
                    onPress={() => saveCard()}>
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
        height: 360

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
        fontWeight: 'bold',
        width: 250,
        color: "black"
        //height: 50
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
        marginTop: 135,
        marginLeft: 16,
        width: 250,
        fontSize: 14,
        fontWeight: 'bold',
        color: "black"
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
        fontSize: 16,
        color: "black",
    },

    input: {
        marginTop: -10,
        marginLeft: 10,
        height: 38,
        margin: 12,
        padding: 6,
        borderBottomWidth: 1,
        //borderColor: "grey"
        fontSize: 16
    },

    pickerinput: {
        marginTop: 5,
        marginLeft: 10,
        height: 35,
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

    validNo: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 120,
        marginLeft: 300
    },
    nameValid: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 200,
        marginLeft: 300
    },
    errMsg: {
        color: "red",
        textAlign: "left",
        marginLeft: 25,
        fontSize: 14
    }

});

export default NewCard



