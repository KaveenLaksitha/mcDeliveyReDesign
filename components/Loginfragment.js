import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput, TouchableOpacity } from 'react-native';
import Login from './Login';
import NewUser from './NewUser';

var cindex = 1;

function Loginfragment() {

    const [index, setIndex] = useState(1);
    const RenderElement = () => {
        if (index === 1) {
            cindex = 1;
            console.log("Hi", cindex);
            return <Login />;
        } else if (index === 2) {
            cindex = 2;
            console.log("Hi", cindex);
            return <NewUser />;
        }
    };

    // function setColor(num) {
    //     if (num == 1) {
    //         cindex = 1
    //     } else {
    //         cindex = 2;
    //     }
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.square1}>
                    <Image
                        style={styles.mcImage}
                        source={{
                            uri: "https://i.ibb.co/N1zyVSy/mcWhite.png"
                        }}
                    />
                    <View style={[styles.underlinelogin, { borderColor: cindex === 1 ? 'white' : '#FFC300', }]}>
                        <TouchableOpacity
                            onPress={() => { setIndex(1) }}>
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>
                        {/*To set the SecondScreen*/}
                    </View>
                    <View style={[styles.underlineregister, { borderColor: cindex === 2 ? 'white' : '#FFC300', }]}>
                        <TouchableOpacity
                            onPress={() => { setIndex(2) }}>
                            <Text style={styles.reg}>I'am New</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <RenderElement />
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
        marginTop: -50,
        marginLeft: 0,
        backgroundColor: "#FF3133",
        height: 400,
        width: 412,
        borderRadius: 50,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 20,
    },

    mcImage: {
        width: 250,
        height: 240,
        marginTop: 90,
        marginLeft: 80,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch'

    },

    underlinelogin: {
        borderBottomWidth: 3,
        marginLeft: 45,
        marginTop: -30,
        height: 100,
        width: 90,
    },

    login: {
        marginTop: 70,
        marginLeft: 17,
        height: 30,
        width: 70,
        color: "white",
        fontSize: 18,
    },

    underlineregister: {
        borderBottomWidth: 3,
        marginLeft: 273,
        marginTop: -28,
        width: 90,

    },

    reg: {
        marginLeft: 7,
        color: "white",
        fontSize: 18,
        width: 80,
        paddingBottom: 2,
    },


    contentody: {
        padding: 10,
    },

    passwordMobileresetdiv: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,

    },

    shadow: {
        shadowColor: "#52006A",
        elevation: 5,
        paddingBottom: 10,
    },

    passwordMobilereset: {
        marginTop: 0,
        marginLeft: 10,
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        paddingTop: 20,
    },

    passwordMobileresetdetails: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 14,
        color: "black",
    },

    submitbutton: {
        width: 220,
        height: 45,
        marginTop: 13,
        marginLeft: 75,
        backgroundColor: "#FF3133",
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 50,
        elevation: 20,
    },

    submittext: {
        marginTop: 5,
        padding: 5,
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    },

    guestUserdiv: {
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 0,

    },

    shadowguestUser: {
        shadowColor: "#52006A",
        elevation: 5,
        paddingBottom: 10,
    },

    guestUser: {
        marginTop: 0,
        marginLeft: 10,
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        paddingTop: 20,
    },

    guestUserText: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 14,
        color: "black",
    },

    guestUserbutton: {
        width: 220,
        height: 45,
        marginTop: 13,
        marginLeft: 75,
        backgroundColor: "#FF3133",
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 50,
        elevation: 20,
    },

    guestUsertext: {
        marginTop: 5,
        padding: 5,
        //marginLeft: 40,
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    },

});

export default Loginfragment;
