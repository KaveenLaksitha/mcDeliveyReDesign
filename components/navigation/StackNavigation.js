import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from "../Home";
import Favourites from "../Favourites"
import FoodMenu from '../foodMenu';
import Cart from '../Cart';
import Menu from '../Menu';
import Profile from '../Profile';
import ContactUs from '../ContactUs';
import NewCard from '../NewCard';
import MainSecurity from '../MainSecurity';
import AddressForm from '../AddressForm';
import FeedBack from '../FeedBack';
import MyCards from '../CardList';
import AddressBook from '../DeliveryAddressBook';
import Login from '../Login';
import Register from '../Register';
import ResetpasswordEmail from '../ResetpasswordEmail';
import ResetpasswordMobile from '../ResetpasswordMobile';
import NewUser from '../NewUser';
import TrackOrder from '../TrackOrder';
import CheckoutCOD from '../CheckoutCOD';
import GreetCOD from '../GreetCOD';
import DeliveryOptions from '../DeliveryOptions';
import PastOrders from '../PastOrders';
import TopTabNavigation from './TopTabNavigation';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TopTabNav" component={TopTabNavigation} />
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
            <Stack.Screen name="Checkout" component={CheckoutCOD} />
            <Stack.Screen name="ThankYou" component={GreetCOD} options={{ headerShown: false }} />
            <Stack.Screen name="Select Option" component={DeliveryOptions} />
            <Stack.Screen name="My Orders" component={PastOrders} />
        </Stack.Navigator>
    )
}

export default StackNavigator
