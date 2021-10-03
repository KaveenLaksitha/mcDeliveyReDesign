import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, ImageBackground, TextInput, TouchableHighlight, TouchableOpacity, ScrollView, RefreshControl, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { getAllCards, deleteCardPermenantly } from '../service/cardService';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

let index = 0;

const setBorderColor = (card) => {
    index = card;
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function MyCards({ navigation }) {


    const [checked, setChecked] = useState('first');
    const [refreshing, setRefreshing] = React.useState(false);
    const [keyValue, setKeyValue] = useState("")
    const [validBoarder, setValidBoarder] = useState(false);
    const [validDelete, setValidDelete] = useState(false);

    // const [deliAdd, setDeliAdd] = useState("");
    const [cards, setCards] = useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
        getAllCards().then((res) => {

            if (res.ok) {
                setCards(res.data);
            }
        }).catch((err) => {
            alert("error", err);
        })
    }, []);

    useEffect(() => {

        getAllCards().then((data) => {
            setCards(data.data)
            console.log("CardsList", data.data)
        })
    }, [])

    function setBorders(userId, cardType) {
        console.log("id", userId)
        setKeyValue(userId);
        setChecked(userId);
        setValidBoarder(true);
        //setValidDelete(true)
        if (true) {
            setBorderColor(0);
        }
    }

    function changeValidity() {
        setValidBoarder(false)
    }

    function deleteCard(userId) {
        Alert.alert(
            // <AntDesignIcon name="delete" size={20} color="red"></AntDesignIcon>,
            "Delete A Card",
            "Are you sure that you want to delete this card?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        deletes(userId)

                    }
                }
            ]


        )

    }

    function deletes(userId) {
        if (validBoarder) {
            setValidDelete(true)
            if (validDelete) {
                deleteCardPermenantly(userId).then((res) => {
                    // Alert.alert("Successful")
                }).catch((err) => {
                    // Alert.alert("Unsuccessful")
                })
            }
        }
    }


    const List = () => {
        return cards.map((element) => {
            return (
                <View style={[styles.listItem, styles.elevation, { borderColor: keyValue === element.userId ? '#F79E1B' : 'white' }]} key={element._id}>
                    <TouchableOpacity onPress={() => { deleteCard(element.userId); console.log("ggg", validBoarder) }}>
                        <View style={styles.horizontal}>

                            <Text style={styles.cardNo}>{element.cardNumber}</Text>

                            <Text style={styles.default}></Text>
                            <Image style={styles.visa}
                                source={{
                                    uri: element.uri
                                }}></Image>
                            <Text style={styles.name}>{element.nameOnCard}</Text>
                            <Text style={styles.date}>{element.expiryDate}</Text>
                            <Text style={styles.radio}>
                                <RadioButton
                                    value={element.userId}
                                    color={'#FF3131'}
                                    uncheckedColor={'#FF3131'}
                                    status={checked === element.userId ? 'checked' : 'unchecked'}
                                    onPress={() => { setBorders(element.userId); console.log("ggg", validBoarder) }}
                                />
                            </Text>
                        </View>
                    </TouchableOpacity>
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
                    <Text style={styles.textValue}>Select your card or add new Card : </Text>
                    {List()}
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
        fontSize: 18,
        color: "black",
    },
    radio: {

        width: 35,
        height: 35,
        marginTop: 6,
        marginLeft: -5,
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
    visa: {
        width: 100,
        height: 80,
        marginTop: 10,
        marginLeft: -60,
    },

    // master: {
    //     width: 100,
    //     height: 78,
    //     marginTop: 10,
    //     marginLeft: -320,
    // },

    // american: {
    //     width: 100,
    //     height: 78,
    //     marginTop: 10,
    //     marginLeft: -320,
    // },

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
        fontSize: 16,
        //backgroundColor: "red"
    },

    name: {
        width: 150,
        height: 20,
        marginTop: 45,
        marginLeft: 15,
        //backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold"

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
