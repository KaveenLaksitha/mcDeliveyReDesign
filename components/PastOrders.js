import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import DeleteIcon from 'react-native-vector-icons/AntDesign'
import Swipeable from 'react-native-gesture-handler/Swipeable';

function PastOrders() {

    const LeftSwipeActions = () => {
        return (
            <View
                style={{ flex: 1, height: 100, marginTop: 10, backgroundColor: '#FF3131', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}
            >
                <DeleteIcon name="delete" size={30} style={{ color: 'white' }} />
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        marginRight: 100
                    }}
                >
                    Removed
                </Text>
            </View>
        );
    };

    return (
        <ScrollView style={styles.body}>
            <Swipeable
                renderLeftActions={LeftSwipeActions}
            >
                <View style={[styles.listItem, styles.elevation, { flexDirection: 'row' }]}>
                    <View style={styles.horizontal}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80' }} style={styles.image} />
                        <View style={styles.vertical}>
                            <Text style={styles.listItemText}>Chicken Big Mac</Text>
                            <Text style={styles.listItemSub}>Rs.650.00</Text>
                            <Text style={styles.listItemSub}>22-08-2021</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 35 }}>
                        <Icon name="star-outlined" size={30} />
                    </View>
                </View>
            </Swipeable>
            <Swipeable
                renderLeftActions={LeftSwipeActions}
            // renderRightActions={RightSwipeActions}
            >
                <View style={[styles.listItem, styles.elevation, { flexDirection: 'row' }]}>
                    <View style={styles.horizontal}>
                        <Image source={{ uri: 'https://i.ibb.co/Pgg2NHc/brett-jordan-TEplq-AWp-CIs-unsplash.jpg' }} style={styles.image} />
                        <View style={styles.vertical}>
                            <Text style={styles.listItemText}>McSpicy Fillet</Text>
                            <Text style={styles.listItemSub}>Rs.450.00</Text>
                            <Text style={styles.listItemSub}>02-08-2021</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 35 }}>
                        <Icon name="star-outlined" size={30} />
                    </View>
                </View>
            </Swipeable>

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    body: {
        margin: 20
    },
    listItem: {
        backgroundColor: "white",
        marginTop: 10,
        width: 370,
        borderRadius: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    listItemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItemSub: {
        fontSize: 16,
    },
    elevation: {
        shadowColor: "#52006A",
        elevation: 5,
    },

    image: {
        borderRadius: 10,
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
    horizontal: {
        flex: 0.95,
        flexDirection: "row",
        alignItems: "center",
    },
    vertical: {
        marginLeft: 20,
        flexDirection: "column",
    }
})

export default PastOrders
