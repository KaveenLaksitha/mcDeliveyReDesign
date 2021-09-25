import React, { useState, useEffect } from 'react';


// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, TouchableHighlight, Alert, TextInput } from 'react-native';


const SecurityEmail = () => {

    const [contactNo, onChangeContactNo] = React.useState(null);
    const [currentEmail, onChangeCurrentEmail] = React.useState(null);
    const [newEmail, onChangeNewEmail] = React.useState(null);

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.square2}>

                <Text style={styles.MakeAReviewHeadLine}>Change Email</Text>

                <TextInput style={styles.contactNo}
                    onChangeText={onChangeContactNo}
                    value={contactNo}
                    onPress={() => console.log("CHANGE contact no")}
                    placeholder="Contact Number"
                    keyboardType="numeric"
                />



                <TextInput style={styles.email}
                    onChangeText={onChangeCurrentEmail}
                    value={currentEmail}
                    placeholder="Current Email"
                    keyboardType="email-address"
                />


                <TextInput style={styles.newEmail}
                    onChangeText={onChangeNewEmail}
                    value={newEmail}
                    placeholder="New Email"
                    keyboardType="email-address"
                />


                <TouchableHighlight style={styles.submitButton}
                    onPress={() => Alert.alert('Change the Email')}>
                    <Text style={styles.submitText}>Change Email </Text>
                </TouchableHighlight>


            </View>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    MakeAReviewHeadLine: {
        position: "absolute",
        marginTop: -30,
        marginLeft: 50,
        fontWeight: 'bold',
        fontSize: 20
    },
    square2: {
        marginTop: 60,
        marginLeft: 14,
        height: 200,
        width: 393,
        //backgroundColor: "yellow",

    },

    contactNo: {
        position: "absolute",
        width: 290,
        height: 38,
        margin: 12,
        marginTop: 10,
        marginLeft: 48,
        fontStyle: 'italic',
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    email: {
        position: "absolute",
        width: 290,
        height: 38,
        margin: 12,
        marginTop: 60,
        marginLeft: 48,
        fontStyle: 'italic',
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    newEmail: {
        position: "absolute",
        width: 290,
        height: 38,
        margin: 12,
        marginTop: 110,
        marginLeft: 48,
        fontStyle: 'italic',
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    submitButton: {
        position: "absolute",
        width: 200,
        height: 45,
        marginTop: 180,
        marginLeft: 100,
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
        marginLeft: 40,
        fontSize: 18,
        color: "white",
    },
});

export default SecurityEmail;