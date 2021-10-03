import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ToastAndroid, Image, SafeAreaViewBase, Alert, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {addRegister} from '../service/registerService'
import axios from "axios";

const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register , setRegister] =useState([]);


  function sendData(e){
    if(email !="" && password != ""){
      var passw = /^(?=.*\d)(?=.*[a-z]).{6,10}$/;
      if(passw.test(password) ){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)){
          // axios.get(`http://10.0.2.2:4000/register/get/${email}/${password}`).then((response) => {
          //   console.log(response.data);
          //   setRegister(response.data);
          //   if (response.data === null) {
          //     ToastAndroid.show(
          //       'User not available', ToastAndroid.SHORT
          //     );
          //   } else {
          //     ToastAndroid.show(
          //       'User available', ToastAndroid.SHORT
          //     );             
          //       if (response.data.email == email) {
          //         navigation.navigate('Home');
          //       }
          //   }
          //  }).catch((err) => {
          //   ToastAndroid.show(
          //     'Invalid Email Address', ToastAndroid.SHORT
          //   );

          //  })
          Alert.alert("Welcom to MC Delivery Home")
          navigation.navigate('Home');
        }else{
          ToastAndroid.show(
            'Invalid Email Address', ToastAndroid.SHORT
          );
        }

      }else{
        ToastAndroid.show(
          'Password not match', ToastAndroid.SHORT
        );
      }

    }else{
      ToastAndroid.show(
        'Please fill all the field', ToastAndroid.SHORT
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.square2}>

        <View style={styles.contentody} >

          <View style={styles.emailaddressdiv}>

            <Text style={styles.emailaddress}>Email Address</Text>

          </View>

          <TextInput style={styles.inputemail} 
            onChangeText={(e) => {setEmail(e)}}
            placeholder="abc@gmail.com"
            pattern ={[ /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g]}
          ></TextInput>

          <View style={styles.passworddiv}>
            <Text style={styles.password}>Password</Text>
          </View>

          <TextInput style={styles.inputpassword} 
             secureTextEntry={true} 
             maxLength={10}
             minLength= {6}
             onChangeText={(e) => {setPassword(e)}}
          ></TextInput>

          <View style={styles.forgetdiv}>

            <Text style={styles.forget} onPress={() => navigation.navigate("Reset Password Using Email")}>Forgot password?</Text>

          </View>

          <TouchableHighlight underlayColor='none' style={styles.loginbutton}
           onPress={sendData}>
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
