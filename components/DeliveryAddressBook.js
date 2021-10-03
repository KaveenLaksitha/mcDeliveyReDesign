import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, ImageBackground, SafeAreaViewBase, Alert, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import BuildingIcon from 'react-native-vector-icons/FontAwesome5'
import { RadioButton } from 'react-native-paper';
import { getDeliveryAddresses } from '../service/addressService';


let index = 0;

const setBorderColor = (choice) => {
    index = choice;
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function AddressBook({ navigation }) {


    const [checked, setChecked] = useState('first');
    const [refreshing, setRefreshing] = React.useState(false);
    const [keyValue, setKeyValue] = useState("")
    const [validBoarder, setValidBoarder] = useState(false);

    // const [deliAdd, setDeliAdd] = useState("");
    const [addresses, setAddresses] = useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
        getDeliveryAddresses().then((res) => {

            if (res.ok) {
                setAddresses(res.data);
            }
        }).catch((err) => {
            alert("error", err);
        })
    }, []);

    useEffect(() => {

        getDeliveryAddresses().then((data) => {
            setAddresses(data.data)
            console.log("AddressList", data.data)
        })
    }, [])

    function setBorders(userId) {
        console.log("id", userId)
        setKeyValue(userId);
        setChecked(userId);
        setValidBoarder(true);
        if (true) {
            setBorderColor(0);
        }
    }

    function changeValidity() {
        setValidBoarder(false)
    }

    const List = () => {
        return addresses.map((element) => {
            return (
                <View style={[styles.listItem, styles.elevation, { borderColor: keyValue === element.userId ? '#F79E1B' : 'white' }]} key={element._id}>

                    <View style={styles.horizontal}>

                        <RadioButton
                            value={element.userId}
                            color={'#FF3131'}
                            uncheckedColor={'#FF3131'}
                            status={checked === element.userId ? 'checked' : 'unchecked'}
                            onPress={() => { setBorders(element.userId) }}
                        />

                        <Text style={styles.address2}>{element.deliveryAddress}</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Address Form')}>
                            <Icon style={styles.pencil3} name="pencil" color="#FF3133" size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        })
    }


    return (

        <SafeAreaView style={styles.container}>



            <View style={styles.contentody} >
                <ScrollView vertical={true}
                    refreshControl={<RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} />}>

                    <Text style={styles.textValue}>Select Your Address OR Add An Address : </Text>

                    <View style={[styles.listItem3, styles.elevation, { borderColor: index === 1 ? '#F79E1B' : 'white' }]}>
                        <View style={styles.horizontal}>
                            <Text style={styles.sendTo}>SEND TO</Text>

                            <BuildingIcon style={styles.building} name="building" size={50} />
                            <Text style={styles.address}>My Office</Text>
                            <Text style={styles.radio1}>
                                <RadioButton
                                    value="first"
                                    color={'#FF3131'}
                                    uncheckedColor={'#FF3131'}
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('first'); setBorderColor(1); changeValidity() }}
                                />
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Address Form')}>
                                <Icon style={styles.pencil1} name="pencil" color="#FF3133" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.listItem2, styles.elevation, { borderColor: index === 2 ? '#F79E1B' : 'white' }]}>

                        <View style={styles.horizontal}>
                            <Text style={styles.sendTo}>SEND TO</Text>
                            <Text style={styles.default}>default</Text>
                            <Text style={styles.radio}>
                                <RadioButton
                                    value="second"
                                    color={'#FF3131'}
                                    uncheckedColor={'#FF3131'}
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked('second'); setBorderColor(2); changeValidity() }}
                                />
                            </Text>
                            <Icon style={styles.home} name="home" size={50} />
                            <Text style={styles.address}>My Home</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Address Form')}>
                                <Icon style={styles.pencil} name="pencil" color="#FF3133" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {List()}
                </ScrollView>
            </View>
            <TouchableHighlight style={styles.submitButton}
                onPress={() => navigation.navigate('Address Form')}>
                <Text style={styles.submitText}>+</Text>
            </TouchableHighlight>


            <ImageBackground source={{
                uri: "https://i.ibb.co/cC9bKMK/Nice-Png-ronald-mcdonald-face-png-4130175.png",
            }} style={styles.image}>

            </ImageBackground>



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
        marginTop: 30
    },
    image: {
        marginTop: 80,
        width: 412,
        height: 445,
        opacity: 0.15,
        position: 'absolute',
        zIndex: -9999,
    },
    listItem: {
        opacity: 0.7,
        backgroundColor: "white",
        marginTop: 20,
        marginLeft: 12,
        width: 370,
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        borderColor: '#F79E1B',
        borderWidth: 2
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
    },
    listItem2: {
        opacity: 0.7,
        backgroundColor: "white",
        marginTop: 20,
        marginLeft: 12,
        width: 370,
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        borderColor: '#F79E1B',
        borderWidth: 2
    },
    listItem3: {
        opacity: 0.7,
        backgroundColor: "white",
        marginTop: 20,
        marginLeft: 12,
        width: 370,
        borderRadius: 10,
        paddingTop: 20,
        paddingRight: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        borderColor: '#F79E1B',
        borderWidth: 2
    },
    building: {
        width: 60,
        height: 60,
        marginTop: 0,
        marginLeft: -200,
    },

    home: {
        width: 50,
        height: 50,
        marginTop: 6,
        marginLeft: 5,
    },
    radio: {
        width: 35,
        height: 35,

        marginTop: 6,
        marginLeft: -75,
    },
    radio1: {
        width: 35,
        height: 35,

        marginTop: 6,
        marginLeft: -260,
    },
    sendTo: {
        width: 100,
        height: 20,
        marginTop: -50,
        marginLeft: 130,
        fontWeight: 'bold',
        fontSize: 18
    },
    pencil: {
        width: 30,
        height: 30,
        marginTop: -5,
        marginLeft: 50,
    },
    pencil1: {
        width: 30,
        height: 30,
        marginTop: -5,
        marginLeft: 280,
    },
    pencil3: {
        width: 30,
        height: 30,
        marginTop: -5,
        marginLeft: 20,
    },
    address: {
        width: 150,
        height: 40,
        marginTop: 25,
        marginLeft: 20,
        //backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 16

    },
    address2: {
        width: 230,
        height: 60,
        marginTop: 5,
        marginLeft: 20,
        //backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 16

    },
    default: {
        width: 45,
        height: 30,
        marginTop: -50,
        marginLeft: -200,
        fontStyle: 'italic',
        fontSize: 14
    },
    textValue: {
        margin: 4,
        width: 250,
        padding: 2,
        marginLeft: 40,
        fontSize: 18,
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
        width: 50,
        height: 45,
        marginTop: 40,
        marginLeft: 320,
        backgroundColor: "#FF3133",
        borderRadius: 200,
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
        marginTop: -8,
        padding: 5,
        marginLeft: 11,
        fontSize: 36,
        fontWeight: 'bold',
        color: "white",
    },

});

export default AddressBook
