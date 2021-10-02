import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Picker, SafeAreaView, Button, ImageBackground, SafeAreaViewBase, Alert, TextInput , TouchableHighlight, CheckBox} from 'react-native';

export default function Register({navigation}) {

  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

  const [selectedValue, setSelectedValue] = useState("mr");

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar hidden/>  
     <View>
        <View style={styles.bodycontent}>
          <Text style={styles.salutationText}>Salutation</Text>
          <Picker 
            selectedValue={selectedValue} style={styles.salutation}
            onValueChange={(itemValue,itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Mr" value ="mr"/>
            <Picker.Item label="Mrs" value ="mrs"/>
             <Picker.Item label="Ms" value ="ms"/>
            </Picker>
          
          <Text style={styles.nameText}>Name</Text>
          <TextInput style={styles.name}></TextInput>

          <Text style={styles.contactnoText}>Contact No</Text>
          <TextInput style={styles.contactno}></TextInput>

          <Text style={styles.dobText}>Date of Birth</Text>
          <TextInput style={styles.dob}></TextInput>

          <Text style={styles.emailText}>Email address</Text>
          <TextInput style={styles.email}></TextInput>

          <Text style={styles.passwordText}>Password</Text>
          <TextInput style={styles.password}></TextInput>

          <Text style={styles.cpText}>Confirm password</Text>
          <TextInput style={styles.cp}></TextInput>
          <Text style={styles.passworddetails}>Password must be 6-10 charcters with 1 numeric digit</Text>

          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox}  value={isSelected}
                          onValueChange={setSelection}/>

              <Text style={styles.privact1}>Yes, I have read and agre to following policies 
                                          <Text style={styles.underline1}> Terms & Conditions </Text> and 
                                          <Text style={styles.underline2}> Privacy Policy </Text> </Text>        
          </View>
          <View style={styles.checkboxContainer2}>
           <CheckBox style={styles.checkbox2}  value={isSelected2}
                          onValueChange={setSelection2}/>
              <Text style={styles.privact2}>I would like to subscribe for promotional emails and sms</Text>
          </View>
          <TouchableHighlight style={styles.resetbutton}
              onPress={() => navigation.navigate("Home")}>
              <Text style={styles.resettext}>Register</Text>
          </TouchableHighlight>        
        </View>    
        <ImageBackground source={{
          uri: "https://i.ibb.co/cC9bKMK/Nice-Png-ronald-mcdonald-face-png-4130175.png",
        }} style={styles.image}>

</ImageBackground>
     </View>           
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

 
image: {        
  marginTop: 80,        
  width: 412,        
  height: 445,        
  opacity: 0.15,        
  position: 'absolute', 
  zIndex:-9999,   
},

  bodycontent: {
    marginLeft: 30,
    marginTop: 70,
  },

  salutationText: {
    fontSize: 14,
    color: '#707070',
    marginTop: -25,
  },

  salutation: {
    width: 270,
    margin: 12,
    marginTop: -40,
    marginLeft:90,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#707070'  
  },

  nameText: {
    marginTop: 5,
    fontSize: 14,
    color: '#707070'
  },

  name: {
    width: 340,
    margin: 12,
    marginTop: -5,
    marginLeft:0,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#707070'  
  },

  contactnoText: {
    marginTop: 0,
    fontSize: 14,
    color: '#707070'
  },

  contactno: {
    width: 340,
    margin: 12,
    marginTop: -5,
    marginLeft:0,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#707070' 
  },

  dobText: {
    marginTop: 0,
    fontSize: 14,
    color: '#707070'
  },

  dob: {
     width: 340,
    margin: 12,
    marginTop: -5,
    marginLeft:0,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#707070' 
  },

  emailText: {
    marginTop: 0,
    fontSize: 14,
    color: '#707070'
  },

  email: {
     width: 340,
    margin: 12,
    marginTop: -5,
    marginLeft:0,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#707070' 
  },

passwordText: {
   marginTop:0,
    fontSize: 14,
    color: '#707070'
},

password: {
  width: 340,
    margin: 12,
    marginTop: -5,
    marginLeft:0,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#707070' 
},

cpText: {
   marginTop: 0,
    fontSize: 14,
    color: '#707070'
},
cp: {
  width: 340,
    margin: 12,
    marginTop: -5,
    marginLeft:0,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#707070' 
},

passworddetails: {
   marginTop: 0,
    fontSize: 13,
    color: '#707070'
},

privact1: {
   marginTop: 15,
    fontSize: 13,
    color: '#707070',
    marginLeft: 20,
    marginRight: 20
},

checkboxContainer: {
    flexDirection: "row",    
    marginBottom: 20,
    marginRight:20
  },

  checkbox: {
    marginLeft: -8,
    marginTop: 12,     
  },

privact2: {
   marginTop: -8,
    fontSize: 13,
    color: '#707070',
    marginLeft: 20,
    marginRight: 30,
    paddingBottom:0
},

 checkboxContainer2: {
    flexDirection: "row",
    marginBottom: 20,
    marginRight:20
  },

  checkbox2: {
    marginLeft: -8,
    marginTop: -10
  },
  

resetbutton: {
    width: 220,
    height: 45,
    //marginTop: 8,
    marginLeft: 60,
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

  resettext: {
    marginTop: 5,
    padding: 5,
    //marginLeft: 40,
    fontSize: 18,
    color: "white",
    textAlign: 'center',

  },

 underline1: {
   textDecorationLine: 'underline',
 },

 underline2: {
   textDecorationLine: 'underline',
 }

});
