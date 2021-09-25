import React,{useState} from 'react'
import { View, Text, Button, Image ,TouchableHighlight,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Plus from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';

function Favourites({ navigation }) {

    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        
        <View style={{ flex: 1}}>
                      
            <Image  style={styles.image} source={{uri: "https://i.ibb.co/4R9ZLcx/mak-tpai-Poi-AMMU-unsplash.jpg"}}>
    
            </Image>
            <View style={styles.square}>
                <View style={{flexDirection:"row"}}>
                <Text style={styles.Topic}>Mc French Fries</Text>
                <Icon style={styles.icon} name="favorite-outline" color='#FF3131' size={40} />
                </View>
              <Text style={styles.des}>McDonald's World Famous Fries® We use specially selected potatoes to make our long and thin, Crispy French Fries. Made simple with sunflower oil and our unique crispy coating</Text>
              <View style={[styles.picker,styles.elevation]}>
              <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Regular" value="Regular" />
                    <Picker.Item label="Large" value="Larger" />

                   
                </Picker>
                </View>
                <View style={styles.horizontal}>
                  <Plus  name="squared-minus" size={35} />
                        <Text style={styles.listItemQty}>01</Text>
                        <Plus name="squared-plus" size={35} />
                 </View>
                <TouchableHighlight style={styles.btn}>
                        <View style={[styles.buttonRed, styles.elevation]}>
                            <Text style={{ fontSize: 18, color: 'white' }}>Add to Cart - Rs.350.00</Text>
                        </View>
                </TouchableHighlight>
               
            </View>
            
            <Button
                title="Go to next comp"

                onPress={() => navigation.navigate("Home")}
                onPress={() => navigation.navigate("FoodMenu")}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container :{
        
    },
    cat1:{
        width:190,
        height:140,
        marginTop: 15,
        borderRadius:10,
        marginLeft: 6,
        
      },
      square :{
        marginTop: -280,
        
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20,
        marginLeft: 0,
        backgroundColor: "white",
        height: 400,
        width:415,
    
        borderRadius: 30,
      },
      image :{
        marginTop:0,
        
        marginLeft: 0,
        backgroundColor: "#FF3133",
        height: 600,
        width:415,
    
        // borderRadius: 50,
      },
      Topic :{
          fontWeight: "bold",
        //   marginLeft: 15,
        //   marginTop:20,
          marginRight:20,
          fontSize:35
      },
      des:{
        
         marginTop:10,
        //   margin:20,
          //padding:20,
          fontSize:17
    },
    btn:{
       marginLeft:67,
      
       marginTop:10

    },
    icon:{
        marginLeft:50
        
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
        marginLeft:15,
        marginRight:15,
        fontSize: 18,
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:10,
        marginLeft:134
    },
    picker:{
        width:350,
        height:40,
        padding:10,
        backgroundColor:"white",
        marginTop:20,
        marginBottom:10,
        marginLeft:15,
        borderRadius:10,
        borderColor:"#D8D8D8",
        borderWidth:0.5

    }

});

export default Favourites
