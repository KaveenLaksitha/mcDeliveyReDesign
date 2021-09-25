import React from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import HandIcon from 'react-native-vector-icons/FontAwesome5'

function GreetCOD({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://i.ibb.co/MPrc0gJ/pngjoy-com-ronald-mcdonald-ronald-mcdonald-png-transparent-png-download-1128656.png' }}
                style={styles.image} />
            <View>
                <Text style={styles.textGreet}>THANK YOU</Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 50 }}>
                <Text style={styles.msg}>We have received your order.{"\n"}Your order will be delivered within next{"\n"} 20 mins.</Text>
            </View>

            <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate("TrackOrder")}>
                <View style={[styles.buttonConfirm, styles.elevation]}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Track Your Order</Text>
                    <HandIcon name="arrow-right" color='black' size={20} style={{ marginLeft: 30 }} />


                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF3131',
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 400,
        marginTop: 100,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    textGreet: {
        fontSize: 28,
        color: '#FFC300'
    },
    msg: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    buttonConfirm: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFC300",
        padding: 10,
        width: 290,
        height: 50,
        borderRadius: 15,
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },
})

export default GreetCOD
