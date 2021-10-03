//import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NewUser() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.square2}>
        {/* 
        <View style={styles.contentody} >
           */}
        <View style={[styles.passwordMobileresetdiv, styles.shadow]}>
          <Text style={styles.passwordMobilereset}>Create an account</Text>
          <Text style={styles.passwordMobileresetdetails}>
            Create an account will allow you to enjoy exclusive offers and
            promotions, retrieve saved orders and favourites, and faster checkout.</Text>
          <TouchableHighlight underlayColor='none' style={styles.submitbutton}
            onPress={() => navigation.navigate("Register")}>
            <Text style={styles.submittext}>Register</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.guestUserdiv, styles.shadowguestUser]}>
          <Text style={styles.guestUser}>Continue without an account</Text>
          <Text style={styles.guestUserText}>
            Express checkout with online payment as guest.</Text>
          <TouchableHighlight underlayColor='none' style={styles.guestUserbutton}
            onPress={() => navigation.navigate("Home")}>
            <Text style={styles.guestUsertext}>Guest Order</Text>
          </TouchableHighlight>
        </View>
        {/* </View> */}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 8
  },

  square1: {
    marginTop: -120,
    marginLeft: 0,
    height: 400,
    width: 412,
    // marginTop: -120,
    // marginLeft: 0,
    // backgroundColor: "#FF3133",
    // height: 400,
    // width:412,
    // borderRadius: 50,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowColor: '#000000',
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // elevation: 20,
  },

  mcImage: {
    width: 140,
    height: 115,
    marginTop: 180,
    marginLeft: 140,
    justifyContent: 'center',
    alignItems: 'center',

  },

  love: {
    marginTop: 0,
    marginLeft: 105,
    fontSize: 18,
    color: "white",
    letterSpacing: 4,

  },
  newdiv: {
    marginTop: 0,
    height: 125,
    width: 340,
    marginLeft: 30,

  },

  underlinelogin: {
    borderBottomWidth: 2,
    borderColor: '#FF3133',
    marginLeft: 45,
    marginTop: -120,
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
    borderColor: 'yellow',
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


  passwordMobileresetdiv: {
    marginTop: 10,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.25,
    borderColor: '#969696'

  },

  shadow: {
    shadowColor: "#52006A",
    elevation: 5,
  },

  passwordMobilereset: {
    marginTop: 0,
    marginLeft: 10,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    paddingTop: 20,
  },

  passwordMobileresetdetails: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14,
    color: "black",
  },

  inputemail: {
    height: 40,
    width: 290,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: '#707070'
  },

  emailAddressdiv: {
    marginTop: 50,
    marginLeft: -190,
  },


  submitbutton: {
    //position: "absolute",
    width: 220,
    height: 45,
    marginTop: 13,
    marginLeft: 65,
    backgroundColor: "#FF3133",
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 7,
  },

  submittext: {
    marginTop: 5,
    padding: 5,
    //marginLeft: 40,
    fontSize: 18,
    color: "white",
    textAlign: 'center',
  },

  guestUserdiv: {
    marginTop: 10,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.25,
    borderColor: '#969696'

  },

  shadowguestUser: {
    shadowColor: "#52006A",
    elevation: 5,
    paddingBottom: 10,
  },

  guestUser: {
    //marginTop: 0,
    //marginLeft: -20,
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    paddingTop: 20,
  },

  guestUserText: {
    marginTop: 10,
    //marginLeft: -20,
    fontSize: 14,
    color: "black",
  },

  guestUserbutton: {
    width: 220,
    height: 45,
    marginTop: 13,
    marginLeft: 65,
    backgroundColor: "#FF3133",
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 7,
  },

  guestUsertext: {
    marginTop: 5,
    padding: 5,
    //marginLeft: 40,
    fontSize: 18,
    color: "white",
    textAlign: 'center',
  },

});

export default NewUser;