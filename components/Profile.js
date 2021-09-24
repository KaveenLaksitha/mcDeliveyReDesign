
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, CheckBox, Alert, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';



function Profile({ navigation }) {

    const [userName, onChangeUserName] = React.useState(null);
    const [salutation, onChangeSalutation] = React.useState(null);
    const [name, onChangeName] = React.useState(null);
    const [contactNo, onChangeContactNo] = React.useState(null);
    const [dob, onChangeDob] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [isSelected, setSelection] = useState(false);

    return (

        <SafeAreaView style={styles.container}>



            <View style={styles.square1}>

                <View style={[styles.cardInsert, styles.shadowguestUser]}>
                    <Text style={styles.position}>
                        <Ionicons name="wallet" size={30} color="black" />

                    </Text>
                    <TouchableOpacity style={styles.card}
                        onPress={() => navigation.navigate('My Cards')}>
                        <Text style={styles.cardText}>Cards </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.cardInsert2, styles.shadowguestUser]}>
                    <Text style={styles.position}>
                        <Ionicons name="location" size={30} color="black" />
                    </Text>
                    <TouchableOpacity style={styles.card2}
                        onPress={() => navigation.navigate('Delivery Address Book')}>
                        <Text style={styles.cardText}>Address </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.cardInsert3, styles.shadowguestUser]}>
                    <Text style={styles.position}>
                        <Ionicons name="ios-person" size={30} color="#900" />
                    </Text>
                    <TouchableOpacity style={styles.card3}
                        onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.cardText}>Profile </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.cardInsert4, styles.shadowguestUser]}>
                    <Text style={styles.position}>
                        <Ionicons name="md-lock-open-outline" size={30} color="black" />
                    </Text>
                    <TouchableOpacity style={styles.card4}
                        onPress={() => navigation.navigate('Security')}>
                        <Text style={styles.cardText}>Security</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.square2}>
                <Text style={styles.MakeAReviewHeadLine}>Personal Information</Text>

                <Text style={styles.textValues}>UserName :</Text>
                <TextInput style={styles.inputs}
                    onChangeText={onChangeUserName}
                    value={userName}
                    keyboardType="default"
                />

                <View style={styles.reviewView}>
                    <Text style={styles.textValue}>Salutation </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeSalutation}
                        value={salutation}
                        keyboardType="default"
                    />
                </View>
                <View style={styles.suggestView}>
                    <Text style={styles.textValue}>Name</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        keyboardType="default"
                    />
                </View>
                <View style={styles.complaintView}>
                    <Text style={styles.textValue}>Contact No </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeContactNo}
                        value={contactNo}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.rateView}>
                    <Text style={styles.textValue}>Date Of Birth </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeDob}
                        value={dob}
                    />
                </View>
                <View style={styles.email}>
                    <Text style={styles.textValue}>Email Address </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>

                <TouchableHighlight style={styles.submitButton}
                    onPress={() => Alert.alert('Saved The Changes!')}>
                    <Text style={styles.submitText}>Save Changes </Text>
                </TouchableHighlight>
                <View style={styles.checkboxContainer}>
                    <Text>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>I want to delete my account and hereby take all the consequences of deleteing the account</Text>
                    </Text>
                </View>


            </View>




        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },



    square1: {
        marginTop: -120,
        marginLeft: 0,
        height: 300,
        width: 412,
    },

    cardInsert: {
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 0,
        marginTop: 150,
        marginLeft: 15,
        width: 80,
        height: 80

    },
    cardInsert2: {
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 0,
        marginTop: -80,
        marginLeft: 115,
        width: 80,
        height: 80

    },
    cardInsert3: {
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 0,
        marginTop: -80,
        marginLeft: 215,
        width: 80,
        height: 80

    },
    cardInsert4: {
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 0,
        marginTop: -80,
        marginLeft: 315,
        width: 80,
        height: 80

    },

    shadowguestUser: {
        shadowColor: "#52006A",
        elevation: 5,
        paddingBottom: 10,
    },

    position: {
        position: "absolute",
        width: 30,
        height: 30,
        marginTop: 18,
        marginLeft: 25,

    },
    card: {
        position: "absolute",
        width: 60,
        height: 20,
        marginTop: 50,
        marginLeft: 18,
    },
    card2: {
        position: "absolute",
        width: 60,
        height: 20,
        marginTop: 50,
        marginLeft: 12,
    },
    card3: {
        position: "absolute",
        width: 60,
        height: 20,
        marginTop: 50,
        marginLeft: 18,
    },
    card4: {
        position: "absolute",
        width: 60,
        height: 20,
        marginTop: 50,
        marginLeft: 12,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "justify"
    },
    square2: {
        marginTop: -50,
        marginLeft: 0,
        height: 430,
        width: 393,
        backgroundColor: "#FFFFFF",
        borderRadius: 30
    },

    MakeAReviewHeadLine: {
        position: "absolute",
        marginTop: 20,
        marginLeft: 35,
        fontWeight: 'bold',
        fontSize: 18,
        fontStyle: 'italic',

    },

    body: {
        position: "absolute",
        width: 290,
        height: 100,
        marginTop: 52,
        marginLeft: 50,
        fontSize: 16,
        textAlign: "justify"
    },

    orderIdView: {
        position: "absolute",
        width: 300,
        height: 35,
        marginTop: 65,
        marginLeft: 30,
        //backgroundColor: "orange"
    },

    reviewView: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 110,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    suggestView: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 155,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    complaintView: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 200,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    rateView: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 245,
        marginLeft: 40,
        //backgroundColor: "orange"
    },
    email: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 290,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    submitButton: {
        position: "absolute",
        width: 200,
        height: 45,
        marginTop: 370,
        marginLeft: 110,
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

    link: {
        position: "absolute",
        width: 350,
        height: 50,
        marginTop: 445,
        marginLeft: 20,
        //backgroundColor: "orange"
    },

    textValue: {
        marginTop: 8,
        padding: 6,
        fontSize: 14,
        color: "black",
    },

    input: {
        marginTop: -45,
        marginLeft: 100,
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
    text1: {
        marginTop: 25,
        padding: 5,
        marginLeft: 95,
        fontSize: 14,
        color: "black",
        fontStyle: "italic"
    },
    text2: {
        marginTop: -30,
        padding: 5,
        marginLeft: 220,
        fontSize: 14,
        color: "#CCCC00",
        fontWeight: 'bold',
    },
    textValues: {
        marginTop: 54,
        width: 320,
        padding: 6,
        marginLeft: 35,
        fontSize: 14,
        color: "black",
    },

    inputs: {
        marginTop: -15,
        marginLeft: 40,
        height: 38,
        width: 320,
        margin: 12,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 340,


    },




});

export default Profile