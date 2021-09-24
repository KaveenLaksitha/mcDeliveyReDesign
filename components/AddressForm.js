import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput, TouchableHighlight } from 'react-native';

export default function AddressForm({ navigation }) {
    const [deliveryAddress, onChangeDeliveryAddres] = React.useState(null);
    const [city, onChangeCity] = React.useState(null);
    const [locationType, onChangeLocationType] = React.useState(null);
    const [floor, onChangeFloor] = React.useState(null);
    const [apartmentNo, onChangeApartmentNo] = React.useState(null);
    const [landMark, onChangeLandMark] = React.useState(null);
    const [companyName, onChangeCompanyName] = React.useState(null);
    const [department, onChangeDepartment] = React.useState(null);
    const [instruct, onChangeinstruct] = React.useState(null);
    const [autoFocus, onChangeAutoFocus] = React.useState(false);


    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.contentody} >
                <Text style={styles.textValue}>Delivery Address : * </Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeDeliveryAddres}
                    value={deliveryAddress}
                    autoFocus={autoFocus}
                    multiline={true}
                    numberOfLines={3}
                    placeholder="Delivery Address"
                    keyboardType="default"
                />


                <Text style={styles.textValue}>City : * </Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeCity}
                    value={city}
                    placeholder="City"
                    keyboardType="default"
                />


                <Text style={styles.textValue}>Location Type : * </Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeLocationType}
                    value={locationType}
                    keyboardType="default"
                />


                <Text style={styles.textValueFloor}>Floor : </Text>
                <TextInput style={styles.floor}
                    onChangeText={onChangeFloor}
                    value={floor}
                    keyboardType="decimal-pad"
                />
                <View style={styles.textValueApN}>
                    <Text >Apartment Number/Name : </Text>
                </View>

                <TextInput style={styles.apN}
                    onChangeText={onChangeApartmentNo}
                    value={apartmentNo}
                    keyboardType="decimal-pad"
                />

                <Text style={styles.textValue}>LandMark : *</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeLandMark}
                    value={landMark}
                    keyboardType="default"
                />

                <Text style={styles.textValue}>Company Name : </Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeCompanyName}
                    value={companyName}
                    keyboardType="default"
                />

                <Text style={styles.textValue}>Department : </Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeDepartment}
                    value={department}
                    placeholder="2021/10/14"
                    keyboardType="default"
                />

                <Text style={styles.textValue}>Delivery Instruction : </Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeinstruct}
                    value={instruct}
                    autoFocus={autoFocus}
                    multiline={true}
                    numberOfLines={3}
                    keyboardType="default"
                />


            </View>
            <TouchableHighlight style={styles.submitButton1}
                onPress={() => navigation.navigate('Delivery Address Book')}>
                <Text style={styles.submitText}>Save</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{ textAlign: 'center' }, styles.submitButton2}
                onPress={() => Alert.alert('Reset Deatisl')}>
                <Text style={styles.submitText}>Reset</Text>
            </TouchableHighlight>




        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    contentody: {
        padding: 10,
        marginTop: 0
    },

    textValue: {
        marginTop: 6,
        width: 320,
        padding: 2,
        marginLeft: 40,
        fontSize: 14,
        color: "black",
    },

    input: {
        marginTop: -10,
        marginLeft: 40,
        width: 300,
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
    submitButton1: {
        position: "absolute",
        width: 90,
        height: 45,
        marginTop: 580,
        marginLeft: 260,
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
    submitButton2: {
        position: "absolute",
        width: 90,
        height: 45,
        marginTop: 580,
        marginLeft: 160,
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
        marginLeft: 20,
        fontSize: 18,
        color: "white",
    },
    textValueFloor: {
        marginTop: 6,
        width: 100,
        padding: 2,
        paddingBottom: 4,
        marginLeft: 40,
        fontSize: 14,
        color: "black",
    },
    floor: {
        marginTop: -5,
        marginLeft: 40,
        height: 38,
        margin: 12,
        padding: 4,
        width: 60,
        borderBottomWidth: 1,
        borderColor: "grey",

    },
    apN: {
        marginTop: -2,
        marginLeft: 150,
        height: 38,
        margin: 12,
        padding: 4,
        width: 190,
        borderBottomWidth: 1,
        borderColor: "grey",
    },
    textValueApN: {
        marginTop: -70,
        width: 230,
        padding: 2,
        marginLeft: 150,
        fontSize: 14,
        color: "black",
    }

});