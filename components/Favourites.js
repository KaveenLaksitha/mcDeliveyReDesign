import React, { useEffect, useState } from 'react'
import { Alert, RefreshControl, Text, View, TouchableHighlight, ScrollView, StyleSheet, Image } from 'react-native'
import { getAllFav } from "../service/favService";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


export default function Favourites({ navigation }) {

    const [favData, setFavData] = useState([]);

    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
        getAllFav().then((res) => {

            if (res.ok) {
                setFavData(res.data);
            }
        }).catch((err) => {
            alert("error", err);
        })
    }, []);

    useEffect(() => {

        getAllFav().then((data) => {
            setFavData(data.data)
            console.log(img, name, price)
        })
    }, [img, name, setName, price])







    const navigate = () => {
        navigation.navigate('Mc Fries', {
            img, name, price, img
        })
    }

    const handlerLongClick = () => {
        //handler for Long Click
        Alert.alert("Delete Your Favourite!",
            "Hitting delete will wipe favorite meal from your favourite meals. This cannot be undone!",
            [
                { text: 'Delete', style: 'destructive' },
                { text: 'Cancel' },
            ],
            { cancelable: false }
        )
    };


    const List = () => {
        return favData.map((element) => {
            return (
                <View key={element._id}>

                    <TouchableHighlight underlayColor='none' onLongPress={handlerLongClick} onPress={() => { setImg(element.image); setName(element.name); setPrice(element.price); navigate(); }}>
                        <View style={[Styles.square1, Styles.elevation]}>
                            <Image style={Styles.img1} source={{ uri: element.image }}>

                            </Image>
                            <Text style={Styles.txt1}>{element.name}</Text>
                            <Text style={Styles.txt2}>Rs.{element.price}.00</Text>

                        </View>
                    </TouchableHighlight >
                    {/* <View style={[Styles.square1, Styles.elevation]}>
                            <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                            </Image>
                            <Text style={Styles.txt1}>{element.name}</Text>
                            <Text style={Styles.txt2}>{element.price}</Text>

                        </View>
                        <View style={[Styles.square1, Styles.elevation]}>
                            <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg" }}>

                            </Image>
                            <Text style={Styles.txt1}>{element.name}</Text>
                            <Text style={Styles.txt2}>{element.price}</Text>

                        </View> */}


                </View >
            )
        })


    }

    return (
        <View>
            <ScrollView
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh} />}
                style={{ zIndex: 9999 }}
            >
                <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center" }}>
                    {List()}
                </View>

                {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Mc Fries')}>
                    <View style={[Styles.square1, Styles.elevation]}>
                        <Image style={Styles.img1} source={{ uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg" }}>

                        </Image>
                        <Text style={Styles.txt1}>Mc French Fries</Text>
                        <Text style={Styles.txt2}>From Rs.160.00</Text>

                    </View>
                </TouchableHighlight>
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
            </View> */}

            </ScrollView>
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


