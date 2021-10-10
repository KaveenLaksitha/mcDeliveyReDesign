import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView, ToastAndroid, ImageBackground, Alert, TextInput , TouchableHighlight, CheckBox} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {addRegister} from '../service/registerService'
import DatePicker from '@react-native-community/datetimepicker';
import { useToast } from 'react-native-styled-toast'
import Feather from 'react-native-vector-icons/FontAwesome5';


export default function Register({navigation}) {

  const [salutation, setSalutation] = useState("");
  const [name, setName] = useState("");
  const [contactno, setContactno] = useState("");
  const [dateofbirth, setDateofbirth] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");


  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const { toast } = useToast();

  const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate =  (tempDate.getDate() + 1) + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setDateofbirth(fDate);
        console.log("date coming", fDate)

    };

     const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


  const sendData = () => {
    console.log("date coming", dateofbirth)

    if(salutation != "" && name != "" && contactno != "" && email != "" && password != "" && confirmpassword != ""){

      if(isSelected != "" && isSelected2 !=""){

        var phone = /^(?=.*\d).{10,}$/;

        if(phone.test(contactno)){

          if(password == confirmpassword){

            var passw = /^(?=.*\d)(?=.*[a-z]).{6,10}$/;

            if(password.length>5 && password.length<11 && passw.test(password) ){

              var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              if(re.test(email)){

                const newRegister = {
                salutation,
                name,
                contactno,
                dateofbirth,
                email,
                password,
                confirmpassword
                }

                addRegister(newRegister).then((response) => {

                  console.log("email check",response)

                  if (response.ok) {
                    
                    toast({ message: 'Welcome to the MC delivery App !' })
                   
                   navigation.navigate('Home');
                  }
                  else {
                    toast({
                      message: 'User Already in this System',
                      toastStyles: {
                          borderColor: '#FF3131',
                      },
                      iconFamily: 'Entypo',
                      iconName: 'info',
                      iconColor: 'red',
                      hideAccent: true,
                      hideCloseIcon: true
                  })
                  }
              })
          
              }else{
                ToastAndroid.show(
                  'Invalid Email Address', ToastAndroid.SHORT
                );
                
              }
                
              }else{
                ToastAndroid.show(
                  'Password must be satisfy this condition', ToastAndroid.SHORT
                );
              
              }
             
            }else{
              ToastAndroid.show(
                'Sorry ! Password not match', ToastAndroid.SHORT
              );
  
            }  

        }else{
          ToastAndroid.show(
            'Invalid Phone Number', ToastAndroid.SHORT
          );

        }
      }else{
        ToastAndroid.show(
          'You must agree the teams & condition', ToastAndroid.SHORT
        );
      }
   
    }else{
      ToastAndroid.show(
        'Please fill all the field', ToastAndroid.SHORT
      );
    }
   
  };



  return (
    <SafeAreaView style={styles.container}>
    <StatusBar hidden/> 
    <ScrollView vertical={true}> 
     <View>
        <View style={styles.bodycontent}>
          <Text style={styles.salutationText}>Salutation</Text>
          <Picker 
            selectedValue={salutation} style={styles.salutation}
            onValueChange={(itemValue) => setSalutation(itemValue)}
            required
            >
              <Picker.Item label="Mr" value ="mr"/>
              <Picker.Item label="Mrs" value ="mrs"/>
              <Picker.Item label="Ms" value ="ms"/>
            </Picker>
          
          <Text style={styles.nameText}>Name</Text>
          <TextInput style={styles.name} onChangeText={(e) => {setName(e)}} required></TextInput>

          <Text style={styles.contactnoText}>Contact No</Text>
          <TextInput style={styles.contactno}
            keyboardType={'numeric'}
            onChangeText={(e) => {setContactno(e)}}
            required
          ></TextInput>

          <Text style={styles.dobText}>Date of Birth</Text>
          <TextInput style={styles.dob} 
          onChangeText={setDateofbirth}
                                value={dateofbirth}
                                //placeholder="2021/10/14"
                                //keyboardType="decimal-pad"
                                editable={false}
                                // onFocus={() => setActive3(true)}
                                // onBlur={() => setActive3(false)}
                                onPress={showDatepicker}>
          </TextInput>
              <Feather style={styles.calender}
                                name="calendar-day"
                                color="#FF3133"
                                size={20}
                                onPress={showDatepicker}
                            />

                            {show && (
                                <DatePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={false}
                                    display="default"
                                    onChange={onChange}
                                />
                            )}

          <Text style={styles.emailText}>Email address</Text>
          <TextInput style={styles.email}
             placeholder="abc@gmail.com"
             pattern ={[ /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g]}
             onChangeText={(e) => {setEmail(e)}}
             required
          ></TextInput>

          <Text style={styles.passwordText}>Password</Text>
          <TextInput style={styles.password}
             secureTextEntry={true} 
             maxLength={10}
             minLength= {6}
             onChangeText={(e) => {setPassword(e)}}
             required
          ></TextInput>

          <Text style={styles.cpText}>Confirm password</Text>
          <TextInput style={styles.cp}
             secureTextEntry={true} 
             maxLength={10}
             minLength= {6}
             onChangeText={(e) => {setConfirmPassword(e)}}
             required
          ></TextInput>

          <Text style={styles.passworddetails}>Password must be 6-10 charcters with 1 numeric digit</Text>

          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox}  value={isSelected}  onValueChange={setSelection}  required/>
              <Text style={styles.privact1}>Yes, I have read and agre to following policies 
                                          <Text style={styles.underline1}> Terms & Conditions </Text> and 
                                          <Text style={styles.underline2}> Privacy Policy </Text> </Text>        
          </View>

          <View style={styles.checkboxContainer2}>
            <CheckBox style={styles.checkbox2}  value={isSelected2} 
                          onValueChange={setSelection2}  required/>
              <Text style={styles.privact2}>I would like to subscribe for promotional emails and sms</Text>
          </View>

          <TouchableHighlight underlayColor='none' style={styles.resetbutton}
              onPress={() => sendData()}>
              <Text style={styles.resettext}>Register</Text>
          </TouchableHighlight>        
        </View> 

        <ImageBackground source={{
          uri: "https://i.ibb.co/cC9bKMK/Nice-Png-ronald-mcdonald-face-png-4130175.png",
        }} style={styles.image}>

</ImageBackground>
     </View>  
      </ScrollView>         
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
    marginTop: -20,
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
 },
   calender: {
        position: "absolute",
        marginTop: 160,
        marginLeft: 300,
        // backgroundColor: "blue",
        width: 40,
        height: 40
    }

});
