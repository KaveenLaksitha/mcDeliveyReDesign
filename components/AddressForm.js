import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground, ScrollView, Alert, TextInput, TouchableHighlight, ToastAndroid } from 'react-native';
import { createAddress } from '../service/addressService';
import { useToast } from 'react-native-styled-toast'

export default function AddressForm({ navigation }) {
    const [deliveryAddress, onChangeDeliveryAddres] = React.useState(" ");
    const [city, onChangeCity] = useState("Colombo");
    const [locationType, onChangeLocationType] = useState("Home");
    const [floor, onChangeFloor] = React.useState(" ");
    const [apartmentNo, onChangeApartmentNo] = React.useState(" ");
    const [landMark, onChangeLandMark] = React.useState(" ");
    const [companyName, onChangeCompanyName] = React.useState(" ");
    const [department, onChangeDepartment] = React.useState(" ");
    const [instruct, onChangeinstruct] = React.useState(" ");
    const [autoFocus, onChangeAutoFocus] = React.useState(false);
    const [trues, onChangeSetTrue] = useState(true);
    const [editFloor, setEditFloor] = useState(true);
    const [editApm, setEditApm] = useState(true);
    const [editCompany, setEditCompany] = useState(true);
    const [editDepartment, setEditDepartment] = useState(true);
    const [state, setState] = useState("");

    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);
    const [isActive5, setActive5] = useState(false);
    const [isActive6, setActive6] = useState(false);
    const [isActive7, setActive7] = useState(false);

    const { toast } = useToast()

    function resetAll() {
        toast({ message: 'Successfully Reset All Values !' })
        onChangeDeliveryAddres("");
        onChangeCity("Colombo");
        onChangeLocationType("Home");
        onChangeFloor("");
        onChangeApartmentNo("");
        onChangeLandMark("");
        onChangeCompanyName("");
        onChangeDepartment("");
        onChangeinstruct("")
        setDisables();
    }

    function setDisables(value) {
        if (value === "Home" || locationType === "Home") {
            setEditFloor(false);
            setEditApm(false);
            setEditCompany(false);
            setEditDepartment(false);
        } else if (value === "Apartment") {
            setEditFloor(true);
            setEditApm(true);
            setEditCompany(false);
            setEditDepartment(false);

        } else if (value === "Office") {
            setEditFloor(true);
            setEditApm(false);
            setEditCompany(true);
            setEditDepartment(true);

        }
    }


    const saveDeliveryAddress = () => {
        console.log(deliveryAddress + city + locationType + landMark + instruct)
        if (deliveryAddress === " " && city === "Colombo" && locationType === "Home" && landMark === " " && instruct === " ") {
            toast({
                message: 'Please fill all the fields before submitting!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
        } else if (deliveryAddress === " ") {
            toast({
                message: 'Please fill delivery address field!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
        } else if (city === " ") {
            toast({
                message: 'Please choose a City!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
        } else if (locationType === " ") {
            toast({
                message: 'Please choose a location type!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
        } else if (landMark === " ") {
            toast({
                message: 'Please insert a specific landmark!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
        } else if (instruct === " ") {
            toast({
                message: 'Please add delivery instructions!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
        } else {
            console.log(deliveryAddress + city + locationType + floor + apartmentNo)
            const newAddress = {
                userId: "UI002",
                deliveryAddress,
                city,
                locationType,
                floor,
                apartmentNo,
                landMark,
                companyName,
                department,
                instruct
            }

            createAddress(newAddress).then((res) => {
                console.log("responseeeeeeeeeee", res)
                if (res.ok) {
                    toast({ message: 'Delivery Address Added Successfully!' })
                    navigation.navigate("Delivery Address Book");
                } else {
                    Alert.alert("Error!", res.err);
                    console.log(res.err)
                }
            }).catch((err) => {
                Alert.alert("Error!", err);
            })
        }
    }


    return (

        <SafeAreaView style={styles.container}>
            <View >

                <View style={styles.contentody} >
                    <ScrollView vertical={true}>
                        <Text style={styles.textValue}>Delivery Address: * </Text>
                        <TextInput style={[styles.input, { borderColor: isActive1 ? 'blue' : 'grey' }]}
                            onChangeText={(e) => onChangeDeliveryAddres(e)}
                            value={deliveryAddress}
                            multiline={true}
                            numberOfLines={3}
                            require={true}
                            onFocus={() => setActive1(true)}
                            onBlur={() => setActive1(false)}
                            //placeholder="Delivery Address"
                            keyboardType="default"
                        />


                        <Text style={styles.textValue}>City: * </Text>
                        <Picker style={styles.pickerinput}
                            require={true}
                            selectedValue={city}
                            onValueChange={(itemValue) => onChangeCity(itemValue)}
                        >
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Aluthkade" value="Aluthkade" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Ambuldeniya" value="Ambuldeniya" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Angulana" value="Angulana" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Bambalapitiya" value="Bambalapitiya" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Battaramulla" value="Baththaramulla" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo" value="Colombo" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 11" value="Colombo 11" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 01" value="Colombo 01" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 02" value="Colombo 02" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 03" value="Colombo 03" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 04" value="Colombo 04" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Colombo 05" value="Colombo 05" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Ethulkotte" value="Ethulkotte" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Koswatte" value="Koswatte" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Malabe" value="Malabe" />
                        </Picker>


                        <Text style={styles.textValue}>Location Type: * </Text>
                        <Picker style={styles.pickerinput}
                            selectedValue={locationType}
                            require={true}
                            onValueChange={(itemValue) => { onChangeLocationType(itemValue); setDisables(itemValue) }}
                        >
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontWeight: "bold-italic" }} label="Home" value="Home" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontStyle: "bold-italic" }} label="Apartment" value="Apartment" />
                            <Picker.Item style={{ fontSize: 16, color: "#8B0000", fontStyle: "bold-italic" }} label="Office" value="Office" />
                        </Picker>



                        <Text style={styles.textValueFloor}>Floor: </Text>
                        <TextInput style={[styles.floor, { borderColor: isActive4 ? 'blue' : 'grey' }]}
                            onChangeText={(e) => onChangeFloor(e)}
                            value={floor}
                            keyboardType="decimal-pad"
                            maxLength={3}
                            editable={editFloor}
                            onFocus={() => setActive4(true)}
                            onBlur={() => setActive4(false)}
                        />
                        <View style={styles.textValueApN}>
                            <Text style={styles.apnName}>Apartment Number/Name: </Text>
                        </View>

                        <TextInput style={[styles.apN, { borderColor: isActive2 ? 'blue' : 'grey' }]}
                            onChangeText={(e) => onChangeApartmentNo(e)}
                            value={apartmentNo}
                            keyboardType="default"
                            maxLength={20}
                            editable={editApm}
                            onFocus={() => setActive2(true)}
                            onBlur={() => setActive2(false)}
                        />

                        <Text style={styles.textValue}>LandMark: *</Text>
                        <TextInput style={[styles.input, { borderColor: isActive3 ? 'blue' : 'grey' }]}
                            onChangeText={(e) => onChangeLandMark(e)}
                            require={true}
                            value={landMark}
                            onFocus={() => setActive3(true)}
                            onBlur={() => setActive3(false)}
                            placeholder="land marks"
                            keyboardType="default"
                        />

                        <Text style={styles.textValue}>Company Name: </Text>
                        <TextInput style={[styles.input, { borderColor: isActive5 ? 'blue' : 'grey' }]}
                            onChangeText={(e) => onChangeCompanyName(e)}
                            value={companyName}
                            placeholder="company name"
                            keyboardType="default"
                            editable={editCompany}
                            onFocus={() => setActive5(true)}
                            onBlur={() => setActive5(false)}
                        />

                        <Text style={styles.textValue}>Department: </Text>
                        <TextInput style={[styles.input, { borderColor: isActive6 ? 'blue' : 'grey' }]}
                            onChangeText={(e) => onChangeDepartment(e)}
                            value={department}
                            placeholder="department name"
                            keyboardType="default"
                            editable={editDepartment}
                            onFocus={() => setActive6(true)}
                            onBlur={() => setActive6(false)}
                        />

                        <Text style={styles.textValue}>Delivery Instruction: </Text>
                        <TextInput style={[styles.input, { borderColor: isActive7 ? 'blue' : 'grey' }]}
                            onChangeText={(e) => onChangeinstruct(e)}
                            value={instruct}
                            require={true}
                            autoFocus={autoFocus}
                            multiline={true}
                            numberOfLines={3}
                            keyboardType="default"
                            onFocus={() => setActive7(true)}
                            onBlur={() => setActive7(false)}
                        />

                    </ScrollView>
                </View>
                <TouchableHighlight style={styles.submitButton1}
                    onPress={() => saveDeliveryAddress()}>
                    <Text style={styles.submitText}>Save</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ textAlign: 'center' }, styles.submitButton2}
                    onPress={() => resetAll()}>
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
        fontSize: 16,
        color: "black",
        fontWeight: "bold"
    },

    input: {
        marginTop: -10,
        marginLeft: 40,
        width: 300,
        fontSize: 14,
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
        marginTop: 615,
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
        marginTop: 615,
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
        fontSize: 16,
        color: "black",
        fontWeight: "bold"
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
        fontSize: 14

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
        fontSize: 14


    },
    textValueApN: {
        marginTop: -70,
        width: 230,
        padding: 2,
        marginLeft: 150,
        fontSize: 14,
        color: "black",
        fontWeight: "bold"

    },
    apnName: {
        fontSize: 16,
        fontWeight: "bold"
    }

});