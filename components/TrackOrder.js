import React from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TrackOrder() {
    return (
        <View>
            <View style={styles.container}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 6.927079,
                    longitude: 79.861,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }} />
            </View>
            <View style={styles.container2}>
                <View style={styles.line}></View>
                <View style={styles.horizontal}>
                    <View style={styles.circle}>
                        <Icon name="delivery-dining" color='#FF3131' size={30} />
                    </View>
                    <Text style={{ marginRight: 30 }}><Text style={styles.text}>Delivery Person</Text>{"\n"}Est. Delivery Time : 20 mins</Text>
                    <TouchableHighlight underlayColor='none' onPress={() => { Linking.openURL('tel: 123456 ') }}>
                        <View style={styles.circleSmall}>
                            <Icon name="call" color='#FF3131' size={20} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='none' onPress={() => { Linking.openURL('sms: 123456 ') }}>
                        <View style={styles.circleSmall}>
                            <Icon name="message" color='#FF3131' size={20} />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.vertical}>
                    <View style={styles.c01} />
                    <View style={styles.c02} />
                    <View style={styles.c02} />
                    <View style={styles.c02} />
                    <View style={styles.c02} />
                    <View style={styles.c03} />
                    <View style={styles.c03} />
                    <View style={styles.c03} />
                    <View style={styles.c03} />
                    <View style={styles.c04} />

                </View>
                <View style={styles.horizontal}>
                    <Text style={{ marginLeft: 70, marginTop: 20 }}>
                        To
                        <Text style={styles.text}>
                            {"\n"}Home
                        </Text>
                        {"\n"}Lorem ipsum dolor sit amet,
                        {"\n"}consectetur adipiscing elit.
                        {"\n"}18.00PM
                        {"\n"}{"\n"}{"\n"}
                        From
                        <Text style={styles.text}>
                            {"\n"}McDonald's Colombo 10
                        </Text>
                        {"\n"}Lorem ipsum dolor sit amet,
                        {"\n"}consectetur adipiscing elit.
                    </Text>
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        height: 350,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    line: {
        height: 4,
        width: 100,
        borderRadius: 10,
        backgroundColor: '#F79E1B',
        marginLeft: 130,
        marginBottom: 10,
    },
    container2: {
        marginTop: 365,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: 350,
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25,
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
    },
    vertical: {
        flexDirection: "column",
        alignItems: "center",
        height: 'auto',
        width: 'auto',
        borderRadius: 50,
        position: 'absolute',
        marginLeft: 40,
        marginTop: 100
    },
    c01: {
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: '#FF3131',
        marginTop: -5
    },
    c02: {
        height: 5,
        width: 5,
        borderRadius: 50,
        backgroundColor: '#FF3131',
        marginTop: 10,
    },
    c03: {
        height: 5,
        width: 5,
        borderRadius: 50,
        backgroundColor: '#FFC300',
        marginTop: 10,
    },
    c04: {
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: '#FFC300',
        marginTop: 10
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF3131',
        borderWidth: 2,
        borderRadius: 500,
        width: 50,
        height: 50,
        marginRight: 20
    },
    circleSmall: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF3131',
        borderWidth: 2,
        borderRadius: 500,
        width: 35,
        height: 35,
        marginRight: 20
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});
export default TrackOrder
