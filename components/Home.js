import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <ScrollView horizontal={true}>
        <Image
          source={{ uri: "https://i.ibb.co/6tdp6v1/1259171629786046593.jpg" }}
          style={styles.promo1}
        />
        <Image
          source={{
            uri: "https://i.ibb.co/DRgmNY4/promo-lk-promo-0768529705d14ae99a85d9520d8f9fae.jpg",
          }}
          style={styles.promo2}
        />
        <Image
          source={{ uri: "https://i.ibb.co/WzSkr4m/capture2.png" }}
          style={styles.promo3}
        />
      </ScrollView>
      <View style={[styles.dateTime, styles.elevation]}>
        <Text>Here's info as at HH:MM PM, Today</Text>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
        <View>
          <Text style={styles.headers}>Top Categories</Text>
          <View style={styles.headerLine}></View>
          <View style={styles.horizontal}>
            <Image
              source={{
                uri: "https://i.ibb.co/FwWQB37/sina-piryae-b-Bzj-Wth-Tqb8-unsplash.jpg",
              }}
              style={styles.img1}
            />
            <Image
              source={{
                uri: "https://i.ibb.co/MspD0M5/natalie-toombs-Kw-Ca-IGKdlps-unsplash.jpg",
              }}
              style={styles.img2}
            />
            <Image
              source={{
                uri: "https://i.ibb.co/1ncvYvn/meghan-hessler-yxp-JQ83-Dt-OM-unsplash.jpg",
              }}
              style={styles.img3}
            />
          </View>
        </View>
        <View>
          <Text style={styles.headers}>Popular Items</Text>
          <View style={styles.headerLine}></View>
          <View style={styles.horizontal}>
            <Image
              source={{
                uri: "https://i.ibb.co/HCc267J/amirali-mirhashemian-88-YAXjnpvr-M-unsplash.jpg",
              }}
              style={styles.img1}
            />
            <Image
              source={{
                uri: "https://i.ibb.co/7Jb39z5/brett-jordan-zee1ge-Zy6-H0-unsplash.jpg",
              }}
              style={styles.img2}
            />
            <Image
              source={{
                uri: "https://i.ibb.co/Pgg2NHc/brett-jordan-TEplq-AWp-CIs-unsplash.jpg",
              }}
              style={styles.img3}
            />
          </View>
        </View>
        <View>
          <Text style={styles.headers}>Today's Deals</Text>
          <View style={styles.headerLine}></View>
          <View style={styles.horizontal}>
            <Image
              source={{
                uri: "https://i.ibb.co/x8ckBS5/ashley-green-Ub-TUTDRqj-o-unsplash.jpg",
              }}
              style={styles.img1}
            />
            <Image
              source={{
                uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg",
              }}
              style={styles.img2}
            />
            <Image
              source={{
                uri: "https://i.ibb.co/RSZ7VMR/brett-jordan-Oe36z-Hp-Dpg4-unsplash.jpg",
              }}
              style={styles.img3}
            />
          </View>
        </View>
      </View>
    </View>
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
