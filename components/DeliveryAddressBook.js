import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, ImageBackground, SafeAreaViewBase, Alert, TextInput, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function AddressBook({ navigation }) {
    return (

        <SafeAreaView style={styles.container}>



            <View style={styles.contentody} >
                <ScrollView vertical={true}>

                    <Text style={styles.textValue}>Select your address or add new Address : </Text>

                    <View style={[styles.listItem, styles.elevation]}>
                        <View style={styles.horizontal}>
                            <Text style={styles.sendTo}>SEND TO</Text>

                            <Image style={styles.building}
                                source={{
                                    uri: "https://i.ibb.co/qrqtPbL/building.jpg"
                                }}></Image>
                            <Text style={styles.address}>My Office</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Address Form')}>
                                <Icon style={styles.pencil} name="pencil" color="#FF3133" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.listItem2, styles.elevation]}>

                        <View style={styles.horizontal}>
                            <Text style={styles.sendTo}>SEND TO</Text>
                            <Text style={styles.default}>default</Text>
                            <Icon style={styles.home} name="home" size={50} />
                            <Text style={styles.address}>My Home</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Address Form')}>
                                <Icon style={styles.pencil} name="pencil" color="#FF3133" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.listItem, styles.elevation]}>

                        <View style={styles.horizontal}>
                            <Text style={styles.address2}>No 149/6A, Mirihana Road,
                                Embuldeniya,
                                Jayawardhanepura, Kotte</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Address Form')}>
                                <Icon style={styles.pencil} name="pencil" color="#FF3133" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        marginLeft: -45,
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
