import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.square2}>

        <View style={styles.contentody} >

          <View style={styles.emailaddressdiv}>

            <Text style={styles.emailaddress}>Email Address</Text>

          </View>

          <TextInput style={styles.inputemail} 
            onChangeText={text => setTextInputValue(text)}
            value={textInputValue}
          placeholder="abc@gmail.com"
          pattern = '/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g'
          ></TextInput>

          <View style={styles.passworddiv}>
            <Text style={styles.password}>Password</Text>
          </View>

          <TextInput style={styles.inputpassword} 
             secureTextEntry={true} 
             maxLength={10}
             minLength= {6}
          ></TextInput>

          <View style={styles.forgetdiv}>

            <Text style={styles.forget} onPress={() => navigation.navigate("Reset Password Using Email")}>Forgot password?</Text>

          </View>

          <TouchableHighlight style={styles.loginbutton}
            onPress={() => Alert.alert('Login Successfully')}>

            <Text style={styles.logintext}>Login</Text>

          </TouchableHighlight>

        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  square1: {
    marginTop: -120,
    marginLeft: 0,
    backgroundColor: "#FF3133",
    height: 400,
    width: 412,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // borderRadius: 50,
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
  },


  love: {
    marginTop: 0,
    marginLeft: 105,
    fontSize: 18,
    color: "white",
    letterSpacing: 4,

  },

  contentody: {
    //backgroundColor: "pink",
    height: 400,
    width: 350,
    marginTop: 40,
    marginLeft: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },

  newdiv: {
    marginTop: 0,
    height: 125,
    width: 340,
    marginLeft: 30,

  },

  underlinelogin: {
    borderBottomWidth: 2,
    borderColor: 'yellow',
    marginLeft: 45,
    marginTop: -50,
    height: 100,
    width: 90,
  },

  login: {
    marginTop: 70,
    marginLeft: 17,
    height: 30,
    width: 70,
    color: "white",
    fontSize: 18,
  },

  underlineregister: {
    borderBottomWidth: 2,
    borderColor: '#FF3133',
    marginLeft: 273,
    marginTop: -28,
    width: 90,

  },

  reg: {
    marginLeft: 7,
    color: "white",
    fontSize: 18,
    width: 80,
    paddingBottom: 2,
  },

  emailaddressdiv: {
    marginTop: -70,
    marginLeft: -190,
  },

  emailaddress: {
    marginTop: 0,
    marginLeft: 0,
    fontSize: 16,
    color: "#707070"
  },

  inputemail: {
    height: 40,
    width: 310,
    margin: 12,
    marginLeft: 28,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#707070'
  },

  passworddiv: {
    marginTop: 20,
    marginLeft: -220,
  },

  password: {
    marginTop: 0,
    marginLeft: 0,
    fontSize: 16,
    color: "#707070"
  },

  inputpassword: {
    height: 40,
    width: 310,
    margin: 12,
    marginLeft: 28,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#707070'
  },

  forgetdiv: {
    marginTop: 0,
    marginLeft: -170,
  },

  forget: {
    marginTop: 0,
    marginLeft: 0,
    fontSize: 16,
    color: "#FF3131"
  },

  loginbutton: {
    //position: "absolute",
    width: 190,
    height: 45,
    marginTop: 30,
    marginLeft: 17,
    backgroundColor: "#FF3133",
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 7,
  },

  logintext: {
    marginTop: 5,
    padding: 5,
    //marginLeft: 40,
    fontSize: 18,
    color: "white",
    textAlign: 'center',
  },

});

export default Login;
