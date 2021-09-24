import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput, TouchableHighlight } from 'react-native';

function MyCards({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>



            <View style={styles.contentody} >


                <Text style={styles.textValue}>Select your card or add new Card : </Text>
            </View>
            <TouchableHighlight style={styles.submitButton}
                onPress={() => navigation.navigate('Add New Card')}>
                <Text style={styles.submitText}>+</Text>
            </TouchableHighlight>




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

});

export default MyCards
