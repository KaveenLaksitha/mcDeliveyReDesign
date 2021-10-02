import React, { useState, useEffect } from 'react';
// import all the components we are going to use
import Feather from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView, Text, View, StyleSheet, TouchableHighlight, Alert, TextInput, ScrollView, TouchableOpacity } from 'react-native';


const SecurityPassword = () => {

    const [currentPwd, onChangeCurrentPwd] = React.useState(null);
    const [newPwds, onChangeNewPwd] = React.useState(null);
    const [rePwd, onChangeRePwd] = React.useState(null);
    const [icon, setIcon] = useState("eye-slash");
    const [secureTextEntry, setsecureTextEntry] = useState(true);
    const [password, setPasword] = useState(true);

    // function changeIcon(val) {
    //     if (val === 1) {
    //         setIcon("eye")
    //     }
    // }

    const [data, setData] = React.useState({
        currentPwd: '',
        newPwd: '',
        renewPwd: '',
        errorMsg: '',
        checkTextInputChange1: false,
        checkTextInputChange2: false,
        checkTextInputChange3: false,
        secureTextEntry: true,
        isValidCpwd: true,
        isValidNpwd: true,
        isValidRpwd: true,
        isvalidCompare: false,
        iconName: "eye-slash"
    });

    const textInputChangeCurrentPwd = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                currentPwd: val,
                checkTextInputChange1: true,
            })
            handleCurrentPwd(val);
        } else {
            setData({
                ...data,
                currentPwd: '',
                checkTextInputChange1: false,
            })
            handleCurrentPwd(val);
        }

    }

    const handleCurrentPwd = (value) => {
        let pattern = value;
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (pattern.match(strongRegex)) {
            setData({
                ...data,
                isValidCpwd: true,
                checkTextInputChange1: true,
            })
        }

        else {
            setData({
                ...data,
                isValidCpwd: false,
                checkTextInputChange1: false,
            })
        }
    }

    const textInputChangeNewPwd = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                newPwd: val,
                checkTextInputChange2: true,
            })
            handleNewPwd(val);
        } else {
            setData({
                ...data,
                newPwd: '',
                checkTextInputChange2: false,
            })
            handleNewPwd(val);
        }

    }

    const handleNewPwd = (value) => {
        let pattern = value;
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (pattern.match(strongRegex)) {
            setData({
                ...data,
                isValidNpwd: true,
                checkTextInputChange2: true,

            })
        }

        else {
            setData({
                ...data,
                isValidNpwd: false,
                checkTextInputChange2: false,
            })
        }
    }

    const textInputChangeReNewPwd = (val) => {
        if (val.trim().length != 0) {
            setData({
                ...data,
                renewPwd: val,
                checkTextInputChange3: true,
            })
            handleReNewPwd(val);
        } else {
            setData({
                ...data,
                renewPwd: '',
                checkTextInputChange3: false,
            })
            handleReNewPwd(val);
        }

    }

    const handleReNewPwd = (value) => {
        console.log("passwors", newPwds + " " + rePwd)
        let pattern = value;
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (pattern.match(strongRegex)) {
            setData({
                ...data,
                isValidRpwd: true,
                checkTextInputChange3: true,
            })


        }

        else {
            setData({
                ...data,
                isValidRpwd: false,
                checkTextInputChange3: false,
                errorMsg: 'Wrong format'
            })
        }
    }


    function checkPasswords() {
        if (newPwds === rePwd) {
            Alert.alert("Passwords match")
        }
    }

    function changeSecurity() {

        if (icon == "eye") {
            setsecureTextEntry(false);
            setPasword(false)
            setIcon("eye-slash")
        } else {
            setsecureTextEntry(true);
            setPasword(true);
            setIcon("eye")
        }
    }


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView vertical={true}>
                <View style={styles.square2}>
                    <Text style={styles.MakeAReviewHeadLine}>Change Password</Text>


                    {data.isValidCpwd && data.checkTextInputChange1 ?
                        <View style={styles.validNo}>
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}>
                            </Feather>
                        </View>
                        : <View style={styles.validNo}>
                            <Feather
                                name="star-of-life"
                                color="red"
                                size={10}>
                            </Feather>
                        </View>}

                    <TextInput style={styles.cPwdInputs}
                        onChangeText={(e) => { textInputChangeCurrentPwd(e); onChangeCurrentPwd(e); }}
                        //value={currentPwd}
                        secureTextEntry={secureTextEntry}
                        password={password}
                        placeholder="Current Password"
                        maxLength={8}
                        minLength={8}
                        onEndEditing={(e) => textInputChangeCurrentPwd(e.nativeEvent.text)}
                    />
                    {data.isValidCpwd ? false :
                        <Text style={styles.errMsg1}>Follow the correct format mentioned</Text>

                    }
                    <View style={styles.hide}>
                        <TouchableOpacity onPress={() => { setIcon("eye"); changeSecurity() }}>
                            <Feather color="black" size={15} name={icon}>
                            </Feather>
                        </TouchableOpacity>
                    </View>
                    {data.isValidNpwd && data.checkTextInputChange2 ?
                        <View style={styles.validCurrEmail}>
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}>
                            </Feather>
                        </View>
                        : <View style={styles.validCurrEmail}>
                            <Feather
                                name="star-of-life"
                                color="red"
                                size={10}>
                            </Feather>
                        </View>}
                    <TextInput style={styles.nPwdInputs}
                        onChangeText={(e) => { textInputChangeNewPwd(e); onChangeNewPwd(e); }}
                        //value={newPwd}
                        secureTextEntry={secureTextEntry}
                        password={password}
                        placeholder="New Password"
                        maxLength={8}
                        minLength={8}
                        onEndEditing={(e) => textInputChangeNewPwd(e.nativeEvent.text)}
                    />
                    {data.isValidNpwd ? false :
                        <Text style={styles.errMsg2}>Follow the correct format mentioned</Text>

                    }
                    <View style={styles.hide2}>
                        <TouchableOpacity onPress={() => { setIcon("eye"); changeSecurity() }}>
                            <Feather color="black" size={15} name={icon}>
                            </Feather>
                        </TouchableOpacity>
                    </View>

                    {data.isValidRpwd && data.checkTextInputChange3 ?
                        <View style={styles.validNewEmail}>
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}>
                            </Feather>
                        </View>
                        : <View style={styles.validNewEmail}>
                            <Feather
                                name="star-of-life"
                                color="red"
                                size={10}>
                            </Feather>
                        </View>}


                    <TextInput style={styles.rPwdinputs}
                        onChangeText={(e) => { textInputChangeReNewPwd(e); onChangeRePwd(e) }}
                        //value={rePwd}
                        placeholder="Re enter Password"
                        secureTextEntry={secureTextEntry}
                        password={password}
                        maxLength={8}
                        minLength={8}
                        onEndEditing={(e) => textInputChangeReNewPwd(e.nativeEvent.text)}
                    />
                    {data.isValidRpwd ? false :
                        <Text style={styles.errMsg3}>{data.errorMsg}</Text>

                    }
                    <View style={styles.hide3}>
                        <TouchableOpacity onPress={() => { setIcon("eye"); changeSecurity() }}>
                            <Feather color="black" size={15} name={icon}>
                            </Feather>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.condition}>Password must be 8 charcters including uppercase, lowercase, digit and special character </Text>

                    <TouchableHighlight style={styles.submitButton}
                        onPress={() => checkPasswords()}>
                        <Text style={styles.submitText}>Change Password </Text>
                    </TouchableHighlight>


                </View>

            </ScrollView>
        </SafeAreaView >
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
        height: 300,
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
        marginTop: 165,
        marginLeft: 10,
        fontSize: 14,
        textAlign: "center"
    },
    errMsg1: {
        color: "red",
        textAlign: "left",
        marginLeft: 50,
        marginTop: 2,
    },
    errMsg2: {
        color: "red",
        textAlign: "left",
        marginLeft: 50,
        marginTop: 52,
    },
    errMsg3: {
        color: "red",
        textAlign: "left",
        marginLeft: 50,
        marginTop: 100,
    },
    validNo: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 18,
        marginLeft: 300
    },
    validCurrEmail: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 70,
        marginLeft: 300
    },
    validNewEmail: {
        position: "absolute",
        width: 20,
        height: 10,
        //backgroundColor: "green",
        marginTop: 120,
        marginLeft: 300

    },
    hide: {
        position: "absolute",
        width: 20,
        height: 10,
        marginTop: 16,
        marginLeft: 320
    },
    hide2: {
        position: "absolute",
        width: 20,
        height: 10,
        marginTop: 70,
        marginLeft: 320
    },
    hide3: {
        position: "absolute",
        width: 20,
        height: 10,
        marginTop: 120,
        marginLeft: 320
    },


});

export default SecurityPassword;