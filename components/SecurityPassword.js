import React, { useState, useEffect } from 'react';
// import all the components we are going to use
import Feather from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView, Text, View, StyleSheet, TouchableHighlight, Alert, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useToast } from 'react-native-styled-toast'

const SecurityPassword = () => {

    const [currentPwd, onChangeCurrentPwd] = React.useState(null);
    const [newPwds, onChangeNewPwd] = React.useState(null);
    const [rePwd, onChangeRePwd] = React.useState(null);
    const [icon, setIcon] = useState("eye-slash");
    const [secureTextEntry, setsecureTextEntry] = useState(true);
    const [password, setPasword] = useState(true);

    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);

    const { toast } = useToast()

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
            toast({ message: 'Passwords Match and are successfully changed!' })
        } else {
            toast({
                message: 'Passwords did not Match so cannot proceed!', toastStyles: { bg: '#FFF', borderRadius: 2 },
                color: '#0A0A0A', iconColor: '#FF3131', iconFamily: 'Entypo', iconName: 'circle-with-cross',
                closeButtonStyles: { px: 4, bg: 'darkgrey', borderRadius: 0 },
                closeIconColor: 'white', hideAccent: true
            })
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

                    <TextInput style={[styles.cPwdInputs, { borderColor: isActive1 ? 'blue' : 'grey' }]}
                        onChangeText={(e) => { textInputChangeCurrentPwd(e); onChangeCurrentPwd(e); }}
                        //value={currentPwd}
                        secureTextEntry={secureTextEntry}
                        password={password}
                        placeholder="Current Password"
                        maxLength={8}
                        minLength={8}
                        onEndEditing={(e) => textInputChangeCurrentPwd(e.nativeEvent.text)}
                        onFocus={() => setActive1(true)}
                        onBlur={() => setActive1(false)}
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
                    <TextInput style={[styles.nPwdInputs, { borderColor: isActive2 ? 'blue' : 'grey' }]}
                        onChangeText={(e) => { textInputChangeNewPwd(e); onChangeNewPwd(e); }}
                        //value={newPwd}
                        secureTextEntry={secureTextEntry}
                        password={password}
                        placeholder="New Password"
                        maxLength={8}
                        minLength={8}
                        onEndEditing={(e) => textInputChangeNewPwd(e.nativeEvent.text)}
                        onFocus={() => setActive2(true)}
                        onBlur={() => setActive2(false)}
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


                    <TextInput style={[styles.rPwdinputs, { borderColor: isActive3 ? 'blue' : 'grey' }]}
                        onChangeText={(e) => { textInputChangeReNewPwd(e); onChangeRePwd(e) }}
                        //value={rePwd}
                        placeholder="Re enter Password"
                        secureTextEntry={secureTextEntry}
                        password={password}
                        maxLength={8}
                        minLength={8}
                        onEndEditing={(e) => textInputChangeReNewPwd(e.nativeEvent.text)}
                        onFocus={() => setActive3(true)}
                        onBlur={() => setActive3(false)}
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
        borderColor: "grey",
        fontSize: 16
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
        borderColor: "grey",
        fontSize: 16
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
        borderColor: "grey",
        fontSize: 16
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
        fontSize: 15,
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