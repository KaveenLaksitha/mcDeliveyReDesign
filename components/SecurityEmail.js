import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';
// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, TouchableHighlight, Alert, TextInput, ScrollView } from 'react-native';
import { useToast } from 'react-native-styled-toast'

const SecurityEmail = () => {

    const [contactNo, onChangeContactNo] = React.useState(null);
    const [currentEmail, onChangeCurrentEmail] = React.useState(null);
    const [newEmail, onChangeNewEmail] = React.useState(null);

    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);

    const { toast } = useToast()

    const [data, setData] = React.useState({
        contactNo: '',
        currentEmail: '',
        newEmail: '',
        checkTextInputChange1: false,
        checkTextInputChange2: false,
        checkTextInputChange3: false,
        secureTextEntry: true,
        isValidNumber: true,
        isValidCurrEmail: true,
        isValidNewEmail: true,
    });

    const textInputChangeContactNumber = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                contactNo: val,
                checkTextInputChange1: true,
            })
            handleContactNumber(val);
        } else {
            setData({
                ...data,
                cardNumber: '',
                checkTextInputChange1: false,
            })
            handleContactNumber(val);
        }

    }

    const handleContactNumber = (value) => {
        let pattern = value;
        if (value.trim().length == 10) {
            if (pattern.match('[0-9]{10}')) {
                setData({
                    ...data,
                    isValidNumber: true,
                    checkTextInputChange1: true
                })
            }
        }
        else {
            setData({
                ...data,
                isValidNumber: false,
                checkTextInputChange1: false
            })
        }
    }

    const textInputChangeCurrentEmail = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                currentEmail: val,
                checkTextInputChange2: true
            })
            handleCurrentEmail(val);
        } else {
            setData({
                ...data,
                currentEmail: '',
                checkTextInputChange2: false
            })
            handleCurrentEmail(val);
        }
    }

    const handleCurrentEmail = (value) => {
        let pattern = value;

        if (pattern.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)) {
            setData({
                ...data,
                isValidCurrEmail: true,
                checkTextInputChange2: true
            })
        }
        else {
            setData({
                ...data,
                isValidCurrEmail: false,
                checkTextInputChange2: false
            })
        }
    }

    const textInputChangeNewEmail = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                newEmail: val,
                checkTextInputChange3: true
            })
            handleNewEmail(val);
        } else {
            setData({
                ...data,
                newEmail: '',
                checkTextInputChange3: false
            })
            handleNewEmail(val);
        }
    }

    const handleNewEmail = (value) => {
        let pattern = value;

        if (pattern.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)) {
            setData({
                ...data,
                isValidNewEmail: true,
                checkTextInputChange3: true
            })
        }
        else {
            setData({
                ...data,
                isValidNewEmail: false,
                checkTextInputChange3: false
            })
        }
    }


    function checkEmails() {
        if (currentEmail == newEmail) {
            toast({
                message: 'Current Email and New Email are the same cannot proceed!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
        } else {
            toast({ message: 'Emails changed Successfully!' })
        }
    }

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView vertical={true}>
                <View style={styles.square2}>

                    <Text style={styles.MakeAReviewHeadLine}>Change Email</Text>
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
                    <TextInput style={[styles.contactNo, { borderColor: isActive1 ? 'blue' : 'grey' }]}
                        onChangeText={(e) => { textInputChangeContactNumber(e); (e) => onChangeContactNo(e) }}
                        value={contactNo}
                        placeholder="Contact Number"
                        keyboardType="numeric"
                        onEndEditing={(e) => textInputChangeContactNumber(e.nativeEvent.text)}
                        onFocus={() => setActive1(true)}
                        onBlur={() => setActive1(false)}
                    />
                    {data.isValidNumber ? false :
                        <Text style={styles.errMsg1}>Phone Number includes 10 digits</Text>

                    }

                    {data.isValidCurrEmail && data.checkTextInputChange2 ?
                        <View style={styles.validCurrEmail}>
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}>
                            </Feather>
                        </View>
                        : <View style={styles.validCurrEmail}>
                            <Feather
                                name="star-of-life"
                                color="red"
                                size={10}>
                            </Feather>
                        </View>}

                    <TextInput style={[styles.email, { borderColor: isActive2 ? 'blue' : 'grey' }]}
                        onChangeText={(e) => { textInputChangeCurrentEmail(e); onChangeCurrentEmail(e) }}
                        value={currentEmail}
                        placeholder="Current Email"
                        keyboardType="email-address"
                        onEndEditing={(e) => textInputChangeCurrentEmail(e.nativeEvent.text)}
                        onFocus={() => setActive2(true)}
                        onBlur={() => setActive2(false)}
                    />
                    {data.isValidCurrEmail ? false :
                        <Text style={styles.errMsg2}>Email format is abcd@gmail.com</Text>

                    }

                    {data.isValidNewEmail && data.checkTextInputChange3 ?
                        <View style={styles.validNewEmail}>
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}>
                            </Feather>
                        </View>
                        : <View style={styles.validNewEmail}>
                            <Feather
                                name="star-of-life"
                                color="red"
                                size={10}>
                            </Feather>
                        </View>}

                    <TextInput style={[styles.newEmail, { borderColor: isActive3 ? 'blue' : 'grey' }]}
                        onChangeText={(e) => { textInputChangeNewEmail(e); onChangeNewEmail(e) }}
                        value={newEmail}
                        placeholder="New Email"
                        keyboardType="email-address"
                        onEndEditing={(e) => textInputChangeNewEmail(e.nativeEvent.text)}
                        onFocus={() => setActive3(true)}
                        onBlur={() => setActive3(false)}
                    />
                    {data.isValidNewEmail ? false :
                        <Text style={styles.errMsg3}>Email format is abcd@gmail.com</Text>

                    }


                    <TouchableHighlight style={styles.submitButton}
                        onPress={() => checkEmails()}>
                        <Text style={styles.submitText}>Change Email </Text>
                    </TouchableHighlight>


                </View>
            </ScrollView>

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
        height: 300,
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
    errMsg1: {
        color: "red",
        textAlign: "left",
        marginLeft: 50,
        marginTop: 2,
    },
    errMsg2: {
        color: "red",
        textAlign: "left",
        marginLeft: 50,
        marginTop: 52,
    },
    errMsg3: {
        color: "red",
        textAlign: "left",
        marginLeft: 50,
        marginTop: 100,
    },
    validNo: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 18,
        marginLeft: 300
    },
    validCurrEmail: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 70,
        marginLeft: 300
    },
    validNewEmail: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 120,
        marginLeft: 300

    }
});

export default SecurityEmail;