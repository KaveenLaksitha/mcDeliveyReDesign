import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TextInput , TouchableHighlight} from 'react-native';

export default function ResetpasswordEmail({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
     <StatusBar hidden/>  
      <View style={styles.square1}>   
         <Image 
          style={styles.mcImage}
          source={{
          uri: "https://i.ibb.co/smnnGpk/Daco-5018553.png"
        }}  
        />
        <View style={styles.newdiv}>
          <Text style={styles.love}>I’m loving it</Text>
        </View>
        <View style={styles.underlinelogin}>
          <Text style={styles.login} 
            onPress={() => navigation.navigate("Loginfragment")}>
            Login
          </Text>
        </View> 
        <View  style={styles.underlineregister}>
          <Text style={styles.reg}  
            onPress={() => navigation.navigate("Loginfragment")} >
              I'am New
          </Text> 
        </View>
        </View> 
        <View style={styles.contentody} >
          <View style={styles.passwordemailresetdiv}>
            <Text style={styles.passwordemailreset}>Password Reset Request (Email)</Text>
          </View>
            <Text style={styles.passwordemailresetdetails}>Password reset instructions will be sent to your email address provided below.</Text>
            
          <View style={styles.emailAddressdiv}>
             <Text style={styles.password}>Email Address</Text>
          </View>
              <TextInput  style={styles.inputpassword} ></TextInput>
          <TouchableHighlight style={styles.submitbutton}
              onPress={() => Alert.alert('Login Successfully')}>
              <Text style={styles.submittext}>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.resetbutton}
              onPress={() => navigation.navigate("ResetpasswordMobile")}>
              <Text style={styles.resettext}>Reset Using  Mobile</Text>
          </TouchableHighlight>
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
    height: 400,
    width:412,
    borderRadius: 50,
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
    width: 140,
    height: 115,
    marginTop:180,
    marginLeft: 140,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  love: {
    marginTop: 0,
    marginLeft: 105,
    fontSize: 18,
    color:"white",
    letterSpacing: 4,

  },


  contentody: {
    //backgroundColor: "pink",
    height: 400,
    width : 350,
    marginTop:40,
    marginLeft:22,
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
    marginTop: -120,
    height: 100,
    width: 90,
 },

 login: {
    marginTop: 70,
    marginLeft: 17,
    height: 30,
    width: 70,
    color:"white",
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
    paddingBottom : 2,
  },


  passwordemailresetdiv: {
    marginTop: -70,
    marginLeft: -86,
  },

  passwordemailreset: {
    marginTop: 0,
    marginLeft: 0,
    fontSize: 18,
    color: "black",
    fontWeight: "bold" 
  },

  passwordemailresetdetails: {
    marginTop: 10,
    marginLeft: 0,
    fontSize: 16,
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
    marginTop: 30,
    marginLeft: -190,
  },

  password: {
    marginTop: 0,
    marginLeft: 0,
    fontSize: 16,
    color: "#707070"
  },



  inputpassword: {
    height: 40,
    width: 290,
    margin: 12,
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

  submitbutton: {
    //position: "absolute",
    width: 220,
    height: 45,
    marginTop: 30,
    marginLeft: 8,
    backgroundColor: "#FF3133",
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 100,
    shadowRadius: 50,
    elevation: 20,
  },

  submittext: {
    marginTop: 5,
    padding: 5,
    //marginLeft: 40,
    fontSize: 18,
    color: "white",
    textAlign: 'center',
  },

  resetbutton: {
     width: 220,
    height: 45,
    marginTop: 10,
    marginLeft: 8,
    backgroundColor: "#FFC300",
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 100,
    shadowRadius: 50,
    elevation: 20,
  },

  resettext: {
    marginTop: 5,
    padding: 5,
    //marginLeft: 40,
    fontSize: 18,
    color: "white",
    textAlign: 'center',

  }
  
});
