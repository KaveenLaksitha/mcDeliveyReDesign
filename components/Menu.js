import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import ShopIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { StyleSheet, Text, View, SafeAreaView, Button, Image, SafeAreaViewBase, Alert, TouchableOpacity } from 'react-native';

function Menu({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={styles.square2}>
                <Text style={styles.Icon}>
                    <Ionicons name="ios-person-outline" size={30} color="black" />
                </Text>
                <TouchableOpacity style={styles.text}
                    onPress={() => navigation.navigate('Profile')}>
                    <Text style={{ fontSize: 16 }}>Profile</Text></TouchableOpacity>
                <Text style={styles.Icon}>
                    <Icon name="location" size={30} color="black" />
                </Text>
                <TouchableOpacity style={styles.text}
                    onPress={() => navigation.navigate('Delivery Address Book')}>
                    <Text style={{ fontSize: 16 }} >Delivery Address Book</Text></TouchableOpacity>
                <Text style={styles.Icon}>
                    <ShopIcon name="shopping-bag" size={30} color="black" />
                </Text>
                <TouchableOpacity style={styles.text}
                    onPress={() => navigation.navigate('My Orders')}>
                    <Text style={{ fontSize: 16 }}>My Orders</Text></TouchableOpacity>
                <Text style={styles.Icon}>
                    <Ionicons name="md-wallet-outline" size={30} color="black" />
                </Text>
                <TouchableOpacity style={styles.text}
                    onPress={() => navigation.navigate('My Cards')}>
                    <Text style={{ fontSize: 16 }}>My Cards</Text></TouchableOpacity>
                <Text style={styles.Icon}>
                    <AntDesignIcon name="customerservice" size={30} color="black" />
                </Text>
                <TouchableOpacity style={styles.text}
                    onPress={() => navigation.navigate('ContactUs')}>
                    <Text style={{ fontSize: 16 }}>Support Services</Text></TouchableOpacity>
                <Text style={styles.Icon}>
                    <Ionicons name="star-outline" size={30} color="black" />
                </Text>
                <TouchableOpacity style={styles.text}
                    onPress={() => navigation.navigate('Make A Review')}>
                    <Text style={{ fontSize: 16 }}>Make A Review</Text></TouchableOpacity>
                <Text style={styles.Icon}>
                    <Ionicons name="power" size={30} color="black" />
                </Text>
                <TouchableOpacity style={styles.text}
                    onPress={() => navigation.navigate('Profile')}>
                    <Text style={{ fontSize: 16 }}>Log Out</Text></TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    square2: {
        marginTop: -100,
        marginLeft: 0,
        height: 500,
        width: 393,
    },

    text: {
        marginTop: -52,
        marginLeft: 80,
        fontSize: 16,
        padding: 10,
        marginBottom: 5
    },
    Icon: {
        marginTop: 5,
        marginLeft: 20,
        padding: 10,
        marginBottom: 5

    }
});

export default Menu


