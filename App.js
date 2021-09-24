// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./components/Home";
import Favourites from "./components/Favourites"
import FoodMenu from './components/foodMenu';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Profile from './components/Profile';
import ContactUs from './components/ContactUs';
import NewCard from './components/NewCard';
import MainSecurity from './components/MainSecurity';
import AddressForm from './components/AddressForm';
import FeedBack from './components/FeedBack';
import MyCards from './components/CardList';
import AddressBook from './components/DeliveryAddressBook';
import Login from './components/Login';
import NewUser from './components/NewUser';
import ResetpasswordEmail from './components/ResetpasswordEmail';
import ResetpasswordMobile from './components/ResetpasswordMobile';
import Register from './components/Register';
import TrackOrder from './components/TrackOrder';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#FF3131',
    text: 'white',
    background: 'white'
  },
};

function TabNav() {
  return (
    <Tab.Navigator

      // tabBarOptions={{
      //   showLabel: false,
      // }}

      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#FF3131' },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'FoodMenu') {
            iconName = focused ? 'reader' : 'reader-outline';
          }
          else if (route.name === 'Favourites') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'reorder-four' : 'reorder-four-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFC300',
        tabBarInactiveTintColor: 'white',
      })
      }
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="FoodMenu" component={FoodMenu} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>

  );
}

function App() {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="FoodMenu" component={FoodMenu} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Add New Card" component={NewCard} />
        <Stack.Screen name="Security" component={MainSecurity} />
        <Stack.Screen name="Address Form" component={AddressForm} />
        <Stack.Screen name="Make A Review" component={FeedBack} />
        <Stack.Screen name="My Cards" component={MyCards} />
        <Stack.Screen name="Delivery Address Book" component={AddressBook} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NewUser" component={NewUser} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetpasswordEmail" component={ResetpasswordEmail} />
        <Stack.Screen name="ResetpasswordMobile" component={ResetpasswordMobile} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;