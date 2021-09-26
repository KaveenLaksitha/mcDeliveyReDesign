<<<<<<< HEAD
import React,{useState} from 'react'
import { View, Text, Button, Image ,TouchableHighlight,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Plus from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
=======
import React from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native'

export default function Favourites({ navigation }) {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('View Item')}>
                    <View style={[Styles.square1, Styles.elevation]}>
                        <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg" }}>

                        </Image>
                        <Text style={Styles.txt1}>Mc French Fries</Text>
                        <Text style={Styles.txt2}>From Rs.160.00</Text>
>>>>>>> 6d018ae08260ae514616c1d68f555161efa7552c

                    </View>
                </TouchableHighlight>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

<<<<<<< HEAD
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        
        <View style={{ flex: 1}}>
                      
            <Image  style={styles.image} source={{uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg"}}>
    
            </Image>
            <View style={styles.square}>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.Topic}>Mc French Fries</Text>
                <Icon style={styles.icon} name="favorite-outline" color='#FF3131' size={40} />
=======
>>>>>>> 6d018ae08260ae514616c1d68f555161efa7552c
                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>


                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
            </View>
<<<<<<< HEAD
            
            <Button
                title="Go to next comp"

                onPress={() => navigation.navigate("Home")}
                onPress={() => navigation.navigate("FoodMenu")}
            />

=======
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
                <View style={[Styles.square1, Styles.elevation]}>
                    <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                    </Image>
                    <Text style={Styles.txt1}>Big Mac</Text>
                    <Text style={Styles.txt2}>From Rs.800.00</Text>

                </View>
            </View>
>>>>>>> 6d018ae08260ae514616c1d68f555161efa7552c
        </View>
    )
}

const Styles = StyleSheet.create({

    square1: {

        width: 118,
        height: 180,
        backgroundColor: "white",
        borderColor: "#D8D8D8",
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 10,
        borderWidth: 1

    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    img1: {
        // marginTop: 2,
        // marginRight: 5,
        // marginLeft: 5,
        width: 117,
        height: 120,
        borderRadius: 10,
        resizeMode: "stretch",
        // borderWidth: 2,
        // borderRadius: 10,
    },
    txt1: {
        marginTop: 8,
        marginLeft: 6,
        fontWeight: "bold",

    },
    txt2: {
        marginTop: 2,
        marginLeft: 6,

    },




});


