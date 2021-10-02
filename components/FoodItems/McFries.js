import React, { useState, useEffect } from 'react'


import { View, Text, Button, Image, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Picker } from '@react-native-picker/picker';

import Icon1 from 'react-native-vector-icons/Entypo';

export default function SingleFoodItem({ navigation }) {

    const [num, setNum] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [price, setPrice] = useState(140);


    useEffect(() => {


        if (selectedSize == "Large") {


            setPrice(num * 200)

        } else {
            setPrice(num * 140)
        }


    }, [num, setSelectedSize])

    useEffect(() => {
        console.log(price);
        setPrice(price);

    }, [setSelectedSize, price])


    const decreaseOne = () => {
        setNum(num - 1);
        if (num == 1) { setNum(1) }
    }

    const increaseOne = () => {
        setNum(num + 1);
    }









    return (

        <View style={{ flex: 1 }}>

            <View style={styles.image} >

                <Image style={styles.image1} source={{ uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg" }}>

                </Image>

            </View>




            <View style={styles.square}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.Topic}>Mc French Fries</Text>

                    <TouchableOpacity>
                        {/* <Icon style={styles.icon} name="favorite-outline" color='#FF3131' size={40} /> */}
                        <Icon style={styles.icon} name="heart-o" color='#FF3131' size={40} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.des}>McDonald's World Famous Fries® We use specially selected potatoes to make our long and thin, Crispy French Fries. Made simple with sunflower oil and our unique crispy coating</Text>
                <View style={[styles.picker, styles.elevation]}>
                    <Picker
                        selectedValue={selectedSize}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSize(itemValue)
                        }>
                        <Picker.Item label="Regular" value="Regular" />
                        <Picker.Item label="Large" value="Large" />


                    </Picker>
                </View>
                <View style={styles.horizontal}>
                    <TouchableOpacity onPress={decreaseOne} >
                        <Icon1 name="squared-minus" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.listItemQty}>0{num}</Text>
                    <TouchableOpacity onPress={increaseOne}>
                        <Icon1 name="squared-plus" size={30} />
                    </TouchableOpacity>
                    {/* <Text style={styles.listItemPrice}>Rs.{num1 * 740}.00</Text> */}
                </View>
                <TouchableHighlight style={styles.btn}>
                    <View style={[styles.buttonRed, styles.elevation]}>
                        <Text style={{ fontSize: 18, color: 'white' }}>Add to Cart - Rs.{price}.00</Text>
                    </View>
                </TouchableHighlight>

            </View>







        </View >
    );
}
const styles = StyleSheet.create({
    container: {

    },
    cat1: {
        width: 190,
        height: 140,
        marginTop: 15,
        borderRadius: 10,
        marginLeft: 6,

    },
    square: {
        marginTop: -280,

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        marginLeft: 0,
        backgroundColor: "white",
        height: 400,
        width: 415,

        borderRadius: 30,
    },
    image: {
        marginTop: 0,

        marginLeft: 0,
        backgroundColor: "#FF3133",
        height: 600,
        width: 415,

        // borderRadius: 50,
    },
    image1: {
        marginTop: 0,
        marginLeft: 0,
        backgroundColor: "#FF3133",
        height: 400,
        width: 415,

        // borderRadius: 50,
    },
    Topic: {
        fontWeight: "bold",
        //   marginLeft: 15,
        //   marginTop:20,
        marginRight: 20,
        fontSize: 35
    },
    des: {

        marginTop: 10,
        //   margin:20,
        //padding:20,
        fontSize: 17
    },
    btn: {
        marginLeft: 67,

        marginTop: 10

    },
    icon: {
        marginLeft: 50

    },
    buttonRed: {
        alignItems: "center",
        backgroundColor: "#FF3131",
        padding: 10,
        width: 250,
        borderRadius: 15,
        marginRight: 50,
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
    listItemQty: {
        // margin: 5,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 18,
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 134
    },
    picker: {
        width: 350,
        height: 40,
        padding: 10,
        backgroundColor: "white",
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 15,
        borderRadius: 10,
        borderColor: "#D8D8D8",
        borderWidth: 0.5

    }

})


