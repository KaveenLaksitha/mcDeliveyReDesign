import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground, SafeAreaViewBase, Alert, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';



export default function FeedBack({ navigation }) {
    const [orderId, onChangeOrderId] = React.useState(null);
    const [reviewOn, onChangeReviewOn] = React.useState(null);
    const [suggestion, onChangeSuggestion] = React.useState(null);
    const [complaint, onChangeComplaint] = React.useState(null);
    const [rate, onChangeRate] = React.useState(null);

    return (

        <SafeAreaView style={styles.container}>




            <View style={styles.square1}>
                <ImageBackground source={{ uri: "https://i.ibb.co/RSDmDS8/food.jpg" }} resizeMode="cover" style={styles.Reviewimage} />
            </View>

            <View style={styles.square2}>
                <Text style={styles.MakeAReviewHeadLine}>Make A Review</Text>

                <View style={styles.orderIdView}>
                    <Text style={styles.textValue}>Order Id </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeOrderId}
                        value={orderId}
                    />
                </View>
                <View style={styles.reviewView}>
                    <Text style={styles.textValue}>Review On </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeReviewOn}
                        value={reviewOn}
                    />
                </View>
                <View style={styles.suggestView}>
                    <Text style={styles.textValue}>Suggestions </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeSuggestion}
                        value={suggestion}
                    />
                </View>
                <View style={styles.complaintView}>
                    <Text style={styles.textValue}>Complaints </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeComplaint}
                        value={complaint}
                    />
                </View>
                <View style={styles.rateView}>
                    <Text style={styles.textValue}>Rate Order </Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeRate}
                        value={rate}
                    />
                </View>
                <TouchableHighlight style={styles.submitButton}
                    onPress={() => Alert.alert('Submit Pressed to make a review!')}>
                    <Text style={styles.submitText}>Submit </Text>
                </TouchableHighlight>
                <View style={styles.link}>
                    <Text style={styles.text1}>For furthur inquiries</Text>
                    <TouchableOpacity style={styles.text2}
                        onPress={() => navigation.navigate('ContactUs')}>
                        <Text style={{
                            fontSize: 14, color: "#CCCC00", fontWeight: 'bold'
                        }} >SupportServices </Text>
                    </TouchableOpacity>
                </View>

            </View>


        </SafeAreaView>

    );

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
        width: 393,
        borderRadius: 20
    },

    square2: {
        marginTop: -50,
        marginLeft: 0,
        height: 430,
        width: 412,
        backgroundColor: "#FFFFFF",
        borderRadius: 30
    },

    Reviewimage: {
        width: 420,
        height: 330,
        position: "absolute",
        marginTop: 120,
        marginLeft: -2,

    },

    MakeAReviewHeadLine: {
        position: "absolute",
        marginTop: 20,
        marginLeft: 26,
        fontWeight: 'bold',
        fontSize: 24
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
        width: 340,
        height: 35,
        marginTop: 65,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    reviewView: {
        position: "absolute",
        width: 340,
        height: 35,
        marginTop: 110,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    suggestView: {
        position: "absolute",
        width: 340,
        height: 35,
        marginTop: 155,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    complaintView: {
        position: "absolute",
        width: 340,
        height: 35,
        marginTop: 200,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    rateView: {
        position: "absolute",
        width: 340,
        height: 35,
        marginTop: 245,
        marginLeft: 40,
        //backgroundColor: "orange"
    },

    submitButton: {
        position: "absolute",
        width: 150,
        height: 45,
        marginTop: 300,
        marginLeft: 135,
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

    link: {
        position: "absolute",
        width: 350,
        height: 35,
        marginTop: 355,
        marginLeft: 20,
        //backgroundColor: "orange"
    },

    textValue: {
        marginTop: 8,
        padding: 6,
        fontSize: 14,
        color: "black",
    },

    input: {
        marginTop: -45,
        marginLeft: 100,
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
    text1: {
        marginTop: -5,
        padding: 5,
        marginLeft: 105,
        fontSize: 14,
        color: "black",
        fontWeight: 'bold',
        fontStyle: "italic"
    },
    text2: {
        marginTop: -30,
        padding: 5,
        marginLeft: 232,
        fontSize: 14,
        color: "#CCCC00",
        fontWeight: 'bold',
    }




});
