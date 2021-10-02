import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Feather from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View, SafeAreaView, Button, ImageBackground, Alert, TextInput, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {createFeedBack} from '../service/feedBackService'



export default function FeedBack({ navigation }) {
    const [orderId, onChangeOrderId] = React.useState(null);
    const [reviewOn, onChangeReviewOn] = useState("Food");
    const [suggestion, onChangeSuggestion] = React.useState(null);
    const [complaint, onChangeComplaint] = React.useState(null);
    const [rate, onChangeRate] = React.useState(null);
    const [none, setNone] = useState(false);


    const [data, setData] = React.useState({
        orderId: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        isValidOrderId: true
    });

    const textInputChange = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                orderId: val,
                checkTextInputChange: true,
            })
            handleOrderId(val);
        } else {
            setData({
                ...data,
                orderId: '',
                checkTextInputChange: false,
            })
            handleOrderId(val);
        }

    }

    const handleOrderId = (value) => {
        let pattern = value;
        if (value.trim().length == 6) {
            if (pattern.match('OI-[0-9]{3}')) {
                setData({
                    ...data,
                    isValidOrderId: true,
                    checkTextInputChange: true
                })
            }
        }
        else {
            setData({
                ...data,
                isValidOrderId: false,
                checkTextInputChange: false
            })
        }
    }


    const saveReview = () => {
        
        console.log(orderId +reviewOn+suggestion +complaint +rate)
        const newFeedBack = {
          orderId,
          reviewOn,
          suggestion,
          complaint,
          rate
        }

        createFeedBack(newFeedBack).then((res) => {
            Alert.alert("draft saved")
            //navigation.navigate('draftList');
        }).catch((err) => {
            Alert.alert("draft NOT saved", err);
        })
    }






    return (

        <SafeAreaView style={styles.container}>
            {/* <StatusBar
                barStyle="light-content"
                hidden={true}
                backgroundColor="blue"
                translucent={true}
            /> */}


            <View style={styles.square1}>
                <ImageBackground source={{ uri: "https://i.ibb.co/RSDmDS8/food.jpg" }} resizeMode="cover" style={styles.Reviewimage} />
            </View>

            <ScrollView vertical={true}>
                <View style={styles.square2}>

                    <Text style={styles.MakeAReviewHeadLine}>Make A Review</Text>

                    <View style={styles.square3}>

                        <View style={styles.box}>
                            {data.isValidOrderId && data.checkTextInputChange ?
                                <View style={styles.validId}>
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}>
                                    </Feather>
                                </View>
                                : <View style={styles.validId}>
                                    <Feather
                                        name="star-of-life"
                                        color="red"
                                        size={10}>
                                    </Feather>
                                </View>}
                            {data.isValidOrderId ? false :
                                <Text style={styles.errMsg1}>Must follow the OI-000 pattern</Text>

                            }
                            <Text style={styles.textValue}>Order Id </Text>
                            <TextInput style={styles.input}
                                onChangeText={(e) => { textInputChange(e); onChangeOrderId(e) }}
                                value={orderId}
                                onEndEditing={(e) => textInputChange(e.nativeEvent.text)}
                            />

                        </View>
                        <View style={styles.box}>
                            <Text style={styles.textValue}>Review On </Text>
                            <Picker style={styles.pickerinput}
                                selectedValue={reviewOn}
                                onValueChange={(itemValue) => onChangeReviewOn(itemValue)}
                            >
                                <Picker.Item style={{ fontSize: 14 }} label="Food" value="Food" />
                                <Picker.Item style={{ fontSize: 14 }} label="Delivery" value="Delivery" />
                            </Picker>
                        </View>

                        <View style={styles.box}>
                            <Text style={styles.textValue}>Suggestions </Text>
                            <TextInput style={styles.input}
                                onChangeText={(e) => onChangeSuggestion(e)}
                                value={suggestion}
                                multiline={true}
                                numberOfLines={2}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.textValue}>Complaints </Text>
                            <TextInput style={styles.input}
                                onChangeText={(e) => onChangeComplaint(e)}
                                value={complaint}
                                multiline={true}
                                numberOfLines={2}
                            />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.textValue}>Order Rating </Text>
                            <Text style={styles.rateinput}>
                                <AirbnbRating
                                    ratingcount={5}
                                    // reviews={["Bad", "Meh", "OK", "Good", "Amazing"]}
                                    // defaultRating={5}
                                    showRating={none}
                                    onFinishRating={(e) => onChangeRate(e)}
                                    size={20}
                                />
                            </Text>

                        </View>

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
            </ScrollView>

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
        //backgroundColor: "#FF3133",
        height: 350,
        width: 393,
        borderRadius: 20
    },

    square2: {
        marginTop: 50,
        marginLeft: 0,
        height: 380,
        width: 412,
        backgroundColor: "white",
        borderRadius: 30,
        opacity: 0.9
    },

    square3: {
        marginTop: 50,
        marginLeft: 35,
        height: 250,
        width: 345,
        //backgroundColor: "yellow",


    },
    box: {
        marginLeft: 0,
        marginTop: 6,
        marginLeft: 5,
        marginRight: 5,
        padding: 3,

    },

    Reviewimage: {
        width: 420,
        height: 325,
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
        elevation: 5,

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
        marginTop: 1,
        marginLeft: 5,
        fontSize: 14,
        color: "black",
        fontWeight:"bold"
    },

    input: {
        marginTop: -35,
        marginLeft: 100,
        margin: 12,
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    rateinput: {
        marginTop: -30,
        marginLeft: 100,
        //height: 38,
        margin: 12,
        padding: 6,
        height: 20,
        width: 200
    },

    pickerinput: {
        marginTop: -29,
        marginLeft: 100,
        height: 38,
        margin: 12,
        padding: 6,

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
    },
    errMsg1: {
        color: "red",
        textAlign: "left",
        marginLeft: 100,
        marginTop: -15,
    },

    validId: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 5,
        marginLeft: 330
    },


});
