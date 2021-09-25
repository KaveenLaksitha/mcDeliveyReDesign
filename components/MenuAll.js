import React from 'react'
import { ScrollView, View,StyleSheet,Text,TouchableOpacity  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';

function MenuAll({Navigator}) {
    return (
        <NavigationContainer>
            <TopTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                    < TopTab.Screen name="Home" component={HomeScreen} />
                    <TopTab.Screen name="Settings" component={SettingsScreen} />
                    <TopTab.Screen name="Profile" component={ProfileScreen} />
            </TopTab.Navigator>
    </NavigationContainer>
    )


}
function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: 'row', paddingTop: 20 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          // modify inputRange for custom behavior
          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          });
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Animated.Text style={{ opacity }}>{label}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  
  const TopTab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    squre1:{

        backgroundColor:"red",
        height:60,
        width:150
    },
    squre2:{

        backgroundColor:"green",
        height:60,
        width:150
    },
    squre3:{

        backgroundColor:"blue",
        height:60,
        width:150
    },
    txt:{
        color:"white",
        alignItems:"center",
        padding:10,
        
        fontSize:13
    }
})

export default MenuAll
