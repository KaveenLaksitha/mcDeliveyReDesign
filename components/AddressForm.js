import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground, ScrollView, Alert, TextInput, TouchableHighlight } from 'react-native';

export default function AddressForm({ navigation }) {
    const [deliveryAddress, onChangeDeliveryAddres] = React.useState(null);
    const [city, onChangeCity] = useState("Colombo");
    const [locationType, onChangeLocationType] = useState("Home");
    const [floor, onChangeFloor] = React.useState(null);
    const [apartmentNo, onChangeApartmentNo] = React.useState(null);
    const [landMark, onChangeLandMark] = React.useState(null);
    const [companyName, onChangeCompanyName] = React.useState(null);
    const [department, onChangeDepartment] = React.useState(null);
    const [instruct, onChangeinstruct] = React.useState(null);
    const [autoFocus, onChangeAutoFocus] = React.useState(false);
    const [trues, onChangeSetTrue] = useState(true);

    return (

        <SafeAreaView style={styles.container}>
            <View >

                <View style={styles.contentody} >
                    <ScrollView vertical={true}>
                        <Text style={styles.textValue}>Delivery Address: * </Text>
                        <TextInput style={styles.input}
                            onChangeText={onChangeDeliveryAddres}
                            value={deliveryAddress}
                            multiline={true}
                            autoFocus={autoFocus}
                            numberOfLines={3}
                            require={true}
                            //placeholder="Delivery Address"
                            keyboardType="default"
                        />


                        <Text style={styles.textValue}>City: * </Text>
                        <Picker style={styles.pickerinput}
                            require={true}
                            selectedValue={city}
                            onValueChange={(itemValue, itemIndex) => onChangeCity(itemValue)}
                        >
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Aluthkade" value="Aluthkade" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Ambuldeniya" value="Ambuldeniya" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Angulana" value="Angulana" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Bambalapitiya" value="Bambalapitiya" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Baththaramulla" value="Baththaramulla" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo" value="Colombo" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 11" value="Colombo 11" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 01" value="Colombo 01" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 02" value="Colombo 02" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 03" value="Colombo 03" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 04" value="Colombo 04" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 05" value="Colombo 05" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Ethulkotte" value="Ethulkotte" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Koswatte" value="Koswatte" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Malabe" value="Malabe" />
                        </Picker>


                        <Text style={styles.textValue}>Location Type: * </Text>
                        <Picker style={styles.pickerinput}
                            selectedValue={locationType}
                            require={true}
                            onValueChange={(itemValue, itemIndex) => onChangeLocationType(itemValue)}
                        >
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontWeight: "bold-italic" }} label="Home" value="Home" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontStyle: "bold-italic" }} label="Apartment" value="Apartment" />
                            <Picker.Item style={{ fontSize: 14, color: "#8B0000", fontStyle: "bold-italic" }} label="Office" value="Office" />
                        </Picker>



                        <Text style={styles.textValueFloor}>Floor: </Text>
                        <TextInput style={styles.floor}
                            onChangeText={onChangeFloor}
                            value={floor}
                            keyboardType="decimal-pad"
                        />
                        <View style={styles.textValueApN}>
                            <Text >Apartment Number/Name: </Text>
                        </View>

                        <TextInput style={styles.apN}
                            onChangeText={onChangeApartmentNo}
                            value={apartmentNo}
                            keyboardType="decimal-pad"
                        />

                        <Text style={styles.textValue}>LandMark: *</Text>
                        <TextInput style={styles.input}
                            onChangeText={onChangeLandMark}
                            require={true}
                            value={landMark}
                            placeholder="land marks"
                            keyboardType="default"
                        />

                        <Text style={styles.textValue}>Company Name: </Text>
                        <TextInput style={styles.input}
                            onChangeText={onChangeCompanyName}
                            value={companyName}
                            placeholder="company name"
                            keyboardType="default"
                        />

                        <Text style={styles.textValue}>Department: </Text>
                        <TextInput style={styles.input}
                            onChangeText={onChangeDepartment}
                            value={department}
                            placeholder="department name"
                            keyboardType="default"
                        />

                        <Text style={styles.textValue}>Delivery Instruction: </Text>
                        <TextInput style={styles.input}
                            onChangeText={onChangeinstruct}
                            value={instruct}
                            require={true}
                            autoFocus={autoFocus}
                            multiline={true}
                            numberOfLines={3}
                            keyboardType="default"
                        />

                    </ScrollView>
                </View>
                <TouchableHighlight style={styles.submitButton1}
                    onPress={() => navigation.navigate('Delivery Address Book')}>
                    <Text style={styles.submitText}>Save</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ textAlign: 'center' }, styles.submitButton2}
                    onPress={() => Alert.alert('Reset Deatisl')}>
                    <Text style={styles.submitText}>Reset</Text>
                </TouchableHighlight>

                <ImageBackground source={{
                    uri: "https://i.ibb.co/cC9bKMK/Nice-Png-ronald-mcdonald-face-png-4130175.png",
                }} style={styles.image}>

                </ImageBackground>

            </View>

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

    image: {
        marginTop: 80,
        width: 412,
        height: 445,
        opacity: 0.15,
        position: 'absolute',
        zIndex: -9999,
    },

    textValue: {
        marginTop: 3,
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
        //height: 38,
        margin: 12,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey",
    },
    pickerinput: {
        marginTop: -5,
        marginLeft: 40,
        width: 300,
        height: 38,
        padding: 10,

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
        marginTop: 590,
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
        elevation: 3,

    },
    submitButton2: {
        position: "absolute",
        width: 90,
        height: 45,
        marginTop: 590,
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
        elevation: 5,

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