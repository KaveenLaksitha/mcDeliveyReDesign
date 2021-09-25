import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert } from 'react-native';

function ContactUs({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.square1}>
                <Image style={styles.mcSupportImage} source={{ uri: "https://i.ibb.co/BwNDgjY/pngarea-com-ronald-mcdonald-png-7071787.png" }} />
            </View>


            <View style={styles.square2}>
                <Text style={styles.ContactUsHeadLine}>Contact Us</Text>

                <Text style={styles.body}>If you have any questions , queries or issues regarding the deliveries please send us an email or call to our call center.</Text>
                <Text style={styles.callIcon}>
                    <Ionicons name="call-outline" size={30} color="black" />
                </Text>
                <Text style={styles.phone}>0115 555 555</Text>
                <Text style={styles.msgIcon}>
                    <Ionicons name="chatbubble-ellipses-outline" size={30} color="black" />
                </Text>
                <Text style={styles.msg}>0751 145 145</Text>
                <Text style={styles.mailIcon}>
                    <Ionicons name="md-mail-open-outline" size={30} color="black" />
                </Text>
                <Text style={styles.email}>customersupport@mcdelivery.lk</Text>

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
        height: 450,
        width: 412,
        borderRadius: 50
    },

    square2: {
        marginTop: 5,
        marginLeft: 0,
        height: 400,
        width: 393,
    },

    mcSupportImage: {
        width: 355,
        height: 300,
        position: "absolute",
        marginTop: 161,
        marginLeft: 45,

    },

    ContactUsHeadLine: {
        position: "absolute",
        marginTop: 20,
        marginLeft: 50,
        fontWeight: 'bold',
        fontSize: 18
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

    phone: {
        position: "absolute",
        marginTop: 150,
        marginLeft: 95,
        fontSize: 16,
    },
    msg: {
        position: "absolute",
        marginTop: 200,
        marginLeft: 95,
        fontSize: 16,
    },
    email: {
        position: "absolute",
        marginTop: 245,
        marginLeft: 95,
        fontSize: 16,
    },

    love: {
        marginTop: -110,
        marginLeft: 60,
        fontSize: 18,
        color: "white",
        marginLeft: 130,
        letterSpacing: 4,
    },



    login: {
        marginTop: -30,
        marginLeft: 60,
        color: "white",
        fontSize: 18,
    },



    reg: {
        marginTop: -30,
        marginLeft: 270,
        color: "white",
        fontSize: 18,
    },

    msgIcon: {
        position: "absolute",
        marginTop: 195,
        marginLeft: 50,
        fontSize: 14,
    },
    callIcon: {
        position: "absolute",
        marginTop: 148,
        marginLeft: 50,

    },
    mailIcon: {
        position: "absolute",
        marginTop: 240,
        marginLeft: 50,
        fontSize: 16,
    }
});


export default ContactUs