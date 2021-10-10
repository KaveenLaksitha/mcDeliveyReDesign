import React, { useState, useEffect } from "react";
import { TouchableHighlight, View, Text, Image, StyleSheet, ScrollView, RefreshControl, ToastAndroid } from "react-native";

function Home({ navigation }) {

  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [refreshState, setRefreshState] = useState(false)
  const [time, setTime] = useState()

  var today = new Date();

  useEffect(() => {
    setTime(today.getHours() + ":" + today.getMinutes())
  }, [])

  const refresh = () => {
    setRefreshState(true);
    ToastAndroid.show("Refreshing...", ToastAndroid.SHORT);
    setTime(today.getHours() + ":" + today.getMinutes())
    setTimeout(function () { setRefreshState(false) }, 2000)
  }

  const navigate = () => {
    navigation.navigate('Mc Fries', {
      img, name, price, img
    })
  }


  return (
    <ScrollView refreshControl={<RefreshControl onRefresh={refresh} refreshing={refreshState} />}>
      <ScrollView horizontal={true}>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('FoodMenu',)}>

          <Image
            source={{ uri: "https://i.ibb.co/6tdp6v1/1259171629786046593.jpg" }}
            style={styles.promo1}
          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('FoodMenu',)}>
          <Image
            source={{
              uri: "https://i.ibb.co/DRgmNY4/promo-lk-promo-0768529705d14ae99a85d9520d8f9fae.jpg",
            }}
            style={styles.promo2}
          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('FoodMenu',)}>
          <Image
            source={{ uri: "https://i.ibb.co/WzSkr4m/capture2.png" }}
            style={styles.promo3}
          />
        </TouchableHighlight>

      </ScrollView>
      <View style={[styles.dateTime, styles.elevation]}>
        <Text>Here's info as at {time} PM, Today</Text>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 20 }}>
        <View>
          <Text style={styles.headers}>Top Categories</Text>
          <View style={styles.headerLine}></View>
          <View style={styles.horizontal}>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://i.ibb.co/cw4KRFK/goodeats-yqr-z-VTf-YVY9-HY0-unsplash.jpg"); setName("Crispy Chicken"); setPrice(500); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/cw4KRFK/goodeats-yqr-z-VTf-YVY9-HY0-unsplash.jpg",
                }}
                style={styles.img1}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://i.ibb.co/30bmb0M/likemeat-8l-A4s3-Wj-Bds-unsplash.jpg"); setName("Chicken Wrap"); setPrice(800); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/30bmb0M/likemeat-8l-A4s3-Wj-Bds-unsplash.jpg",
                }}
                style={styles.img2}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals.jpg?$Category_Desktop$"); setName("Burger Combo"); setPrice(1000); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/1ncvYvn/meghan-hessler-yxp-JQ83-Dt-OM-unsplash.jpg",
                }}
                style={styles.img3}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <Text style={styles.headers}>Popular Items</Text>
          <View style={styles.headerLine}></View>
          <View style={styles.horizontal}>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://i.ibb.co/0rqhW4r/brian-chan-Nb-Xj-Zomy-NEM-unsplash.jpg"); setName("Mc Wings"); setPrice(800); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/0rqhW4r/brian-chan-Nb-Xj-Zomy-NEM-unsplash.jpg",
                }}
                style={styles.img1}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/regular/desktop/h-mcdonalds-Big-Mac-Extra-Value-Meals.jpg?$Category_Desktop$"); setName("BigMac Combo"); setPrice(1000); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/7Jb39z5/brett-jordan-zee1ge-Zy6-H0-unsplash.jpg",
                }}
                style={styles.img2}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://i.ibb.co/rtBmVTB/christopher-alvarenga-r-QX9e-Vp-SFz8-unsplash.jpg"); setName("Mc Rice"); setPrice(900); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/rtBmVTB/christopher-alvarenga-r-QX9e-Vp-SFz8-unsplash.jpg",
                }}
                style={styles.img3}
              />
            </TouchableHighlight>

          </View>
        </View>
        <View>
          <Text style={styles.headers}>Today's Deals</Text>
          <View style={styles.headerLine}></View>
          <View style={styles.horizontal}>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://i.ibb.co/rHSwDTx/leo-roza-j2ofdcp-Pp-P0-unsplash.jpg"); setName("McNuggets"); setPrice(500); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/rHSwDTx/leo-roza-j2ofdcp-Pp-P0-unsplash.jpg",
                }}
                style={styles.img1}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-fries-small.jpg?$Category_Desktop$"); setName("Mc Fries"); setPrice(800); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg",
                }}
                style={styles.img2}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='none' onPress={() => { setImg("https://i.ibb.co/dgJTqD6/amirali-mirhashemian-puc-P6j-ZSy-V4-unsplash.jpg"); setName("Cheese Burger"); setPrice(1500); navigate(); }}>
              <Image
                source={{
                  uri: "https://i.ibb.co/dgJTqD6/amirali-mirhashemian-puc-P6j-ZSy-V4-unsplash.jpg",
                }}
                style={styles.img3}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  promo1: {
    marginTop: 15,
    marginLeft: 20,
    width: 225,
    height: 125,
    resizeMode: "stretch",
    borderWidth: 2,
    borderRadius: 10,
  },
  promo2: {
    marginTop: 15,
    marginLeft: 10,
    width: 225,
    height: 125,
    resizeMode: "stretch",
    borderWidth: 2,
    borderRadius: 10,
  },
  promo3: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 20,
    width: 225,
    height: 125,
    resizeMode: "stretch",
    borderWidth: 2,
    borderRadius: 10,
  },
  dateTime: {
    backgroundColor: "white",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
  },
  elevation: {
    shadowColor: "#52006A",
    elevation: 5,
  },
  headers: {
    fontSize: 18,
  },
  headerLine: {
    backgroundColor: "#FF3131",
    width: 110,
    height: 4,
    borderRadius: 10,
  },
  img1: {
    marginTop: 2,
    marginRight: 5,
    width: 120,
    height: 120,
    resizeMode: "stretch",
    borderWidth: 2,
    borderRadius: 10,
  },
  img2: {
    marginTop: 2,
    marginRight: 5,
    width: 120,
    height: 120,
    resizeMode: "stretch",
    borderWidth: 2,
    borderRadius: 10,
  },
  img3: {
    marginTop: 2,
    width: 120,
    height: 120,
    resizeMode: "stretch",
    borderWidth: 2,
    borderRadius: 10,
  },
  horizontal: {
    marginTop: 5,
    flexDirection: "row",
  },
});

export default Home;
