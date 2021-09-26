import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TextInput, Text, View, TouchableHighlight } from 'react-native';

export default function FoodMenu({ navigation }) {
  return (
    <SafeAreaView style={styles.container} >

      <View>



        <Image style={styles.image1} source={{

          uri: "https://i.ibb.co/8bYs2gQ/luc.jpg"

        }}>
        </Image>
        <Text style={styles.textH}>REGULAR MENU</Text>
        <Text style={styles.textH1}>Breakfast Menu Hours</Text>
        <Text style={styles.textH2}>7.00  A.M. - 10.30 A.M.</Text>
        <Text style={styles.textH3}>Regular Menu Hours</Text>
        <Text style={styles.textH4}>10.31 A.M. - 12.00 A.M.</Text>



      </View>

      <View style={{ padding: 10, width: 300 }}>

        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <TouchableHighlight underlayColor='none' onPress={() =>

            navigation.navigate('All Food Categories', {
              screen: 'AlaCarte',
              initial: true,
            })
          }>

            <View style={styles.cat1}>

              <Image style={styles.img1} source={{ uri: "https://i.ibb.co/tX7xqvX/likemeat-73-ob-A0-IB-0-unsplash.jpg" }}>

              </Image>
              <Text style={styles.textcat1} >ALA CARTE &</Text>
              <Text style={styles.textcat2} >OTHER MEALS</Text>

            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='none' onPress={() =>
            navigation.navigate('All Food Categories', {
              screen: 'Salads',
              initial: true,
            })

          }>

            <View style={styles.cat1}>

              <Image style={styles.img1} source={{ uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg" }}>

              </Image>
              <Text style={styles.textcat3} >SALADS</Text>


            </View>
          </TouchableHighlight>

        </View>


        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <TouchableHighlight underlayColor='none' onPress={() =>

            navigation.navigate('All Food Categories', {
              screen: 'Desserts',
              initial: true,
            })
          }>

            <View style={styles.cat1}>

              <Image style={styles.img1} source={{ uri: "https://i.ibb.co/BZBmnwP/slashio-photography-ARf-Bt51-WG2s-unsplash.jpg" }}>

              </Image>
              <Text style={styles.textcat3} > DESSERTS </Text>

            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='none' onPress={() =>

            navigation.navigate('All Food Categories', {
              screen: 'Beverages',
              initial: true,
            })
          }>

            <View style={styles.cat1}>

              <Image style={styles.img1} source={{ uri: "https://i.ibb.co/MspD0M5/natalie-toombs-Kw-Ca-IGKdlps-unsplash.jpg" }}>

              </Image>
              <Text style={styles.textcat3} >BEVERAGES</Text>


            </View>
          </TouchableHighlight>

        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <TouchableHighlight underlayColor='none' onPress={() =>

            navigation.navigate('All Food Categories', {
              screen: 'HappyMeals',
              initial: true,
            })
          }>

            <View style={styles.cat1}>

              <Image style={styles.img1} source={{ uri: "https://i.ibb.co/7Jb39z5/brett-jordan-zee1ge-Zy6-H0-unsplash.jpg" }}>

              </Image>
              <Text style={styles.textcat4} > HAPPY MEALS </Text>

            </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='none' onPress={() =>

            navigation.navigate('All Food Categories', {
              screen: 'Promotions & Bundle Meals',
              initial: true,
            })
          }>

            <View style={styles.cat1}>

              <Image style={styles.img1} source={{ uri: "https://i.ibb.co/CPMHTMw/karsten-winegeart-mft-VVfd-Xomc-unsplash.jpg" }}>

              </Image>
              <Text style={styles.textcat1} >PROMOTIONS &</Text>
              <Text style={styles.textcat2} >BUNDLE MEALS</Text>


            </View>
          </TouchableHighlight>

        </View>
      </View >




    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },



  image1: {

    width: 450,
    height: 192,

    //backgroundColor : "red",
    //marginLeft: 150,
    position: "absolute",
    resizeMode: "stretch",
  },

  textH: {
    color: "white",
    fontSize: 25,
    marginTop: 30,
    marginLeft: 10,
    fontWeight: "bold",



  },
  textH1: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    marginLeft: 10,

  },
  textH2: {
    color: "#ffcc00",
    fontSize: 13,
    marginTop: 10,
    marginLeft: 10,

  },
  textH3: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    marginLeft: 10,

  },
  textH4: {
    color: "#ffcc00",
    fontSize: 13,
    marginTop: 10,
    marginLeft: 10,

  },
  cat1: {
    width: 190,
    height: 140,
    backgroundColor: "white",
    borderColor: "#D8D8D8",
    marginTop: 15,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1



  },

  img1: {
    // marginTop: 2,
    // marginRight: 5,
    // marginLeft: 5,
    width: 190,
    height: 140,
    borderRadius: 10,
    resizeMode: "cover",
    // borderWidth: 2,
    // borderRadius: 10,
  },

  textcat1: {

    marginTop: -90,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  textcat2: {

    marginTop: 0,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  textcat3: {
    marginTop: -80,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  textcat4: {
    marginTop: -80,
    // marginLeft:25,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },


  cat2: {
    width: 180,
    height: 140,
    marginTop: -140,
    borderRadius: 10,
    marginLeft: 205,


  },
  cat3: {
    width: 180,
    height: 140,
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 5,


  },
});


