import React, { useState, useEffect } from 'react';
// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, TouchableHighlight, Alert, TextInput } from 'react-native';

const SecurityPassword = () => {

    const [currentPwd, onChangeCurrentPwd] = React.useState(null);
    const [newPwd, onChangeNewPwd] = React.useState(null);
    const [rePwd, onChangeRePwd] = React.useState(null);
    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.square2}>
                <Text style={styles.MakeAReviewHeadLine}>Change Password</Text>


                <TextInput style={styles.cPwdInputs}
                    onChangeText={onChangeCurrentPwd}
                    value={currentPwd}
                    placeholder="Current Password"
                    keyboardType="visible-password"
                />
                <TextInput

                />

                <TextInput style={styles.nPwdInputs}
                    onChangeText={onChangeNewPwd}
                    value={newPwd}
                    placeholder="New Password"
                    keyboardType="visible-password"
                    maxLength={10}
                    minLength={6}
                />


                <TextInput style={styles.rPwdinputs}
                    onChangeText={onChangeRePwd}
                    value={rePwd}
                    placeholder="Re enter Password"
                    keyboardType="visible-password"
                    maxLength={10}
                    minLength={6}
                />

                <Text style={styles.condition}>Password must be 6-10 charcters with 1 numeric digit </Text>

                <TouchableHighlight style={styles.submitButton}
                    onPress={() => Alert.alert('Change the Password')}>
                    <Text style={styles.submitText}>Change Password </Text>
                </TouchableHighlight>


            </View>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    MakeAReviewHeadLine: {
        position: "absolute",
        marginTop: -30,
        marginLeft: 50,
        fontWeight: 'bold',
        fontSize: 20
    },

    square2: {
        marginTop: 60,
        marginLeft: 14,
        height: 200,
        width: 393,
        //backgroundColor: "yellow",

    },

    cPwdInputs: {
        position: "absolute",
        width: 290,
        height: 38,
        margin: 12,
        marginTop: 10,
        marginLeft: 48,
        fontStyle: 'italic',
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    nPwdInputs: {
        position: "absolute",
        width: 290,
        height: 38,
        margin: 12,
        marginTop: 60,
        marginLeft: 48,
        fontStyle: 'italic',
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    rPwdinputs: {
        position: "absolute",
        width: 290,
        height: 38,
        margin: 12,
        marginTop: 110,
        marginLeft: 48,
        fontStyle: 'italic',
        padding: 6,
        borderBottomWidth: 1,
        borderColor: "grey"
    },

    submitButton: {
        position: "absolute",
        width: 200,
        height: 45,
        marginTop: 210,
        marginLeft: 100,
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
    submitText: {
        marginTop: 5,
        padding: 5,
        marginLeft: 22,
        fontSize: 18,
        color: "white",
    },
    condition: {
        marginTop: 145,
        marginLeft: 22,
        fontSize: 14,
    }

});

export default SecurityPassword;