import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, ImageBackground, TextInput, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
function MyCards({ navigation }) {
    return (

        <SafeAreaView style={styles.container}>



            <View style={styles.contentody} >
                <ScrollView vertical={true} >

                    <Text style={styles.textValue}>Select your card or add new Card : </Text>

                    <View style={[styles.listItem2, styles.elevation]}>
                        <View style={styles.horizontal}>
                            <Text style={styles.cardNo}>XXXX XXXX XXXX XXXX</Text>
                            <Text style={styles.default}>default</Text>
                            <Image style={styles.visa}
                                source={{
                                    uri: "https://i.ibb.co/PmDYwrP/visa.jpg"
                                }}></Image>
                            <Text style={styles.name}>Andrew Wilson</Text>
                            <Text style={styles.date}>10/24</Text>

                        </View>
                    </View>
                    <View style={[styles.listItem, styles.elevation]}>
                        <View style={styles.horizontal}>
                            <Text style={styles.cardNo}>XXXX XXXX XXXX XXXX</Text>
                            <Image style={styles.master}
                                source={{
                                    uri: "https://i.ibb.co/0KNQFf0/58482354cef1014c0b5e49c0.png"
                                }}></Image>
                            <Text style={styles.name}>Andrew Wilson</Text>
                            <Text style={styles.date}>10/24</Text>

                        </View>
                    </View>
                    <View style={[styles.listItem, styles.elevation]}>
                        <View style={styles.horizontal}>
                            <Text style={styles.cardNo}>XXXX XXXX XXXX XXXX</Text>
                            <Image style={styles.american}
                                source={{
                                    uri: "https://i.ibb.co/wzYRpWW/am.png"
                                }}></Image>
                            <Text style={styles.name}>Andrew Wilson</Text>
                            <Text style={styles.date}>10/24</Text>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <TouchableHighlight style={styles.submitButton}
                onPress={() => navigation.navigate('Add New Card')}>
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

    textValue: {
        margin: 4,
        width: 320,
        padding: 2,
        marginLeft: 40,
        fontSize: 16,
        color: "black",
    },

    image: {
        marginTop: 80,
        width: 412,
        height: 445,
        opacity: 0.15,
        position: 'absolute',
        zIndex: -9999,
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
        marginTop: 35,
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
    visa: {
        width: 100,
        height: 60,
        marginTop: 10,
        marginLeft: -60,
    },

    master: {
        width: 100,
        height: 78,
        marginTop: 10,
        marginLeft: -320,
    },

    american: {
        width: 100,
        height: 78,
        marginTop: 10,
        marginLeft: -320,
    },

    home: {
        width: 50,
        height: 50,
        marginTop: 6,
        marginLeft: -45,
    },
    cardNo: {
        width: 200,
        height: 20,
        marginTop: -50,
        marginLeft: 120,
        fontWeight: 'bold',
        fontSize: 16
    },

    name: {
        width: 150,
        height: 20,
        marginTop: 45,
        marginLeft: 20,
        //backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 16

    },
    date: {
        width: 60,
        height: 20,
        marginTop: 45,
        marginLeft: -5,
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
        marginLeft: -300,
        fontStyle: 'italic',
        fontSize: 14
    },

});

export default MyCards
