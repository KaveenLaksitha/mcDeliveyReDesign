import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import { Root, Popup } from 'react-native-popup-confirm-toast'
import { StyleSheet, Text, View, SafeAreaView, CheckBox, Alert, TextInput, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome5'
let index1 = 0;

const setBorderColor = (choice) => {
    index1 = choice;
}

function Profile({ navigation }) {

    const [userName, onChangeUserName] = React.useState(null);
    const [salutation, onChangeSalutation] = useState("Mr");
    const [name, onChangeName] = React.useState(null);
    const [contactNo, onChangeContactNo] = React.useState(null);
    const [dob, onChangeDob] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [isSelected, setSelection] = useState(false);

    function getAlert() {
        Alert.alert("Are you sure that you want to delete the account")

    }

    const [data, setData] = React.useState({
        name: '',
        checkTextInputChange: false,
        isValidName: true
    });


    const textInputChange = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                name: val,
                checkTextInputChange: true
            })
            handleName(val)
        } else {
            setData({
                ...data,
                name: '',
                checkTextInputChange: false
            })
            handleName(val);
        }
    }

    const handleName = (value) => {
        let pattern = value;
        if (pattern.match(/^[a-zA-Z\s]*$/)) {
            setData({
                ...data,
                isValidName: true,
                checkTextInputChange: true
            })
        }
        else {
            setData({
                ...data,
                isValidName: false,
                checkTextInputChange: false
            })
        }
    }

    return (

        <SafeAreaView style={styles.container}>

            <Root>

                <View style={styles.square1}>

                    <View style={[styles.cardInsert, styles.shadowguestUser]}>
                        <Text style={styles.position}>
                            <Ionicons name="md-wallet-outline" size={30} color="black" />

                        </Text>
                        <TouchableOpacity style={styles.card}
                            onPress={() => { navigation.navigate('My Cards'); setBorderColor(1) }}>
                            <Text style={styles.cardText}>Cards </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.cardInsert2, styles.shadowguestUser]}>
                        <Text style={styles.position}>
                            <Icon name="location" size={30} color="black" />
                        </Text>
                        <TouchableOpacity style={styles.card2}
                            onPress={() => { navigation.navigate('Delivery Address Book'); setBorderColor(2) }}>
                            <Text style={styles.cardText}>Address </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.cardInsert3, styles.shadowguestUser]}>
                        <Text style={styles.position}>
                            <UserIcon name="user-cog" size={25} color="#FF3133" />
                        </Text>
                        <TouchableOpacity style={styles.card3}
                            onPress={() => { navigation.navigate('Profile'); setBorderColor(3) }}>
                            <Text style={[styles.cardText, { color: "#FF3133" }]}>Profile </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.cardInsert4, styles.shadowguestUser]}>
                        <Text style={styles.position}>
                            <Ionicons name="md-lock-open-outline" size={30} color="black" />
                        </Text>
                        <TouchableOpacity style={styles.card4}
                            onPress={() => { navigation.navigate('Security'); setBorderColor(4) }}>
                            <Text style={styles.cardText}>Security</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView vertical={true} >
                    <View style={styles.square2}>

                        <Text style={styles.MakeAReviewHeadLine}>Personal Information</Text>

                        <Text style={styles.textValues}>UserName :</Text>
                        <TextInput style={styles.inputs}
                            onChangeText={(e) => onChangeUserName(e)}
                            value={userName}
                            keyboardType="default"
                        />

                        <View style={styles.reviewView}>
                            <Text style={styles.textValue}>Salutation </Text>
                            <Picker style={styles.pickerinput}
                                selectedValue={salutation}
                                onValueChange={(itemValue) => onChangeSalutation(itemValue)}
                            >
                                <Picker.Item label="Mr" value="Mr" />
                                <Picker.Item label="Mrs" value="Mrs" />
                                <Picker.Item label="Miss" value="Miss" />
                            </Picker>
                        </View>
                        <View style={styles.suggestView}>
                            <Text style={styles.textValue}>Name</Text>
                            {data.isValidName && data.checkTextInputChange ?
                                <View style={styles.nameValid}>
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}>
                                    </Feather>
                                </View>
                                : null}
                            {data.isValidName ? false :
                                <View style={styles.errMsg}>
                                    <Text style={styles.errTxt}>Can use letters and spaces only</Text>
                                </View>
                            }
                            <TextInput style={styles.input}
                                onChangeText={(e) => { textInputChange(e); onChangeName(e) }}
                                value={name}
                                keyboardType="default"
                                onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
                            />

                        </View>
                        <View style={styles.complaintView}>
                            <Text style={styles.textValue}>Contact No </Text>
                            <TextInput style={styles.input}
                                onChangeText={(e) => onChangeContactNo(e)}
                                value={contactNo}
                                keyboardType="numeric"
                                editable={false}
                            />
                        </View>
                        <View style={styles.rateView}>
                            <Text style={styles.textValue}>Date Of Birth </Text>
                            <TextInput style={styles.input}
                                onChangeText={(e) => onChangeDob(e)}
                                value={dob}
                                editable={false}
                            />
                        </View>
                        <View style={styles.email}>
                            <Text style={styles.textValue}>Email Address </Text>
                            <TextInput style={styles.input}
                                onChangeText={onChangeEmail}
                                value={email}
                                editable={false}
                            //keyboardType="abc123@gmail.com"


                            />
                        </View>

                        <TouchableHighlight style={styles.submitButton}
                            onPress={() => Alert.alert('Saved The Changes!')}>
                            <Text style={styles.submitText}>Save Changes </Text>
                        </TouchableHighlight>



                        <View >

                            <View style={styles.checkboxContainer}>

                                <CheckBox
                                    value={isSelected}
                                    onValueChange={(e) => { setSelection(e); }}
                                    style={styles.checkbox}


                                />

                                <TouchableOpacity onPress={() =>
                                    Popup.show({
                                        type: 'confirm',
                                        title: 'Delete Confirm!',
                                        textBody: 'Are you sure that you want to permenantly delete the account ',
                                        buttonText: 'Confirm',
                                        confirmText: 'Cancel',
                                        modalContainerStyle: { width: '90%', backgroundColor: '#fff', borderRadius: 8, alignItems: 'center', overflow: 'hidden', position: 'absolute' },
                                        callback: () => Popup.hide()
                                    })
                                }>
                                    <Text style={styles.label}>I want to delete my account and hereby take all the consequences of deleteing the account</Text>
                                </TouchableOpacity>
                            </View>



                        </View>



                    </View>


                </ScrollView >
            </Root>

        </SafeAreaView >
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
        height: 250,
        width: 412,
    },

    cardInsert: {
        marginTop: 30,
        backgroundColor: "#F8F4F4",
        borderRadius: 20,
        padding: 0,
        marginTop: 150,
        marginLeft: 15,
        width: 80,
        height: 80

    },
    cardInsert2: {
        marginTop: 30,
        backgroundColor: "#F8F4F4",
        borderRadius: 20,
        padding: 0,
        marginTop: -80,
        marginLeft: 115,
        width: 80,
        height: 80

    },
    cardInsert3: {
        marginTop: 30,
        backgroundColor: "#F8F4F4",
        borderRadius: 20,
        padding: 0,
        marginTop: -80,
        marginLeft: 215,
        width: 80,
        height: 80

    },
    cardInsert4: {
        marginTop: 30,
        backgroundColor: "#F8F4F4",
        borderRadius: 20,
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
        backgroundColor: "#F8F4F4"
    },
    card2: {
        position: "absolute",
        width: 60,
        height: 20,
        marginTop: 50,
        marginLeft: 12,
        backgroundColor: "#F8F4F4"
    },
    card3: {
        position: "absolute",
        width: 60,
        height: 20,
        marginTop: 50,
        marginLeft: 18,
        backgroundColor: "#F8F4F4"
    },
    card4: {
        position: "absolute",
        width: 60,
        height: 20,
        marginTop: 50,
        marginLeft: 12,
        backgroundColor: "#F8F4F4"
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "justify",
        backgroundColor: "#F8F4F4"
    },
    square2: {
        marginTop: -15,
        marginLeft: 0,
        height: 480,
        width: 412,
        backgroundColor: "white",
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
        marginTop: 120,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    suggestView: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 165,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    complaintView: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 210,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    rateView: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 255,
        marginLeft: 40,
        //backgroundColor: "orange"
    },
    email: {
        position: "absolute",
        width: 333,
        height: 35,
        marginTop: 300,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    submitButton: {
        position: "absolute",
        width: 200,
        height: 45,
        marginTop: 355,
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
        elevation: 5,

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
        fontStyle: 'italic',
        fontWeight: 'bold'
    },


    input: {
        marginTop: -45,
        marginLeft: 100,
        height: 38,
        margin: 12,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey",

    },
    pickerinput: {
        marginTop: -35,
        marginLeft: 100,
        height: 38,
        margin: 12,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey",

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
        fontStyle: 'italic',
        fontWeight: 'bold'
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
        marginTop: 300

    },
    root: {
        height: 500,
        width: 300,
    },
    nameValid: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 10,
        marginLeft: 330
    },
    errMsg: {

        marginTop: -9,
        marginLeft: 105,
        position: "absolute",
        width: 255,
        height: 20,
    },
    errTxt: {
        fontSize: 12,
        color: "red",
        textAlign: "left",
        fontStyle: "italic",
        fontSize: 13
    }



});

export default Profile