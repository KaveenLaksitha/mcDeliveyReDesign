import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput, TouchableOpacity } from 'react-native';
import SecurityEmail from './SecurityEmail';
import SecurityPassword from './SecurityPassword';

function MainSecurity() {

    const [index, setIndex] = useState(1);

    const RenderElement = () => {
        //You can add N number of Views here in if-else condition
        if (index === 1) {
            //Return the FirstScreen as a child to set in Parent View
            return <SecurityEmail />;
        } else if (index === 2) {
            //Return the SecondScreen as a child to set in Parent View
            return <SecurityPassword />;
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container}>


                <View style={styles.square1}>
                    <Image
                        style={styles.mcImage}
                        source={{
                            uri: "https://i.ibb.co/x3shm4R/mcWhite.png"
                        }}
                    />
                    <View style={styles.underlinelogin}>
                        <TouchableOpacity
                            onPress={() => setIndex(1)}>
                            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold', textAlign: 'center', }}>Change Email</Text>
                        </TouchableOpacity>
                        {/*To set the SecondScreen*/}

                    </View>
                    <View style={styles.underlineregister}>
                        <TouchableOpacity
                            onPress={() => setIndex(2)}>
                            <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Change Password</Text>
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
        marginTop: -120,
        marginLeft: 0,
        backgroundColor: "#FF3133",
        height: 430,
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
        width: 210,
        height: 200,
        marginTop: 150,
        marginLeft: 100,
        justifyContent: 'center',
        alignItems: 'center',

    },

    underlinelogin: {
        borderBottomWidth: 4,
        borderColor: 'yellow',
        marginLeft: 40,
        marginTop: 54,
        width: 130,
    },

    underlineregister: {
        borderBottomWidth: 4,
        borderColor: 'yellow',
        marginLeft: 248,
        marginTop: -25,
        width: 130,


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

export default MainSecurity
