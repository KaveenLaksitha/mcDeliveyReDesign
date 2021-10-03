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
// import Login from '../Login';
import Register from '../Register';
import ResetpasswordEmail from '../ResetpasswordEmail';
import ResetpasswordMobile from '../ResetpasswordMobile';
import NewUser from '../NewUser';
import Loginfragment from '../Loginfragment';
import TrackOrder from '../TrackOrder';
import CheckoutCOD from '../CheckoutCOD';
import CheckoutTK from '../CheckoutTK';
import GreetCOD from '../GreetCOD';
import ThankYou from '../ThankYou';
import DeliveryOptions from '../DeliveryOptions';
import PastOrders from '../PastOrders';
import TopTabNavigation from './TopTabNavigation';
import SingleFoodItem from '../SingleFoodItem';
import McFries from '../FoodItems/McFries'


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Loginfragment} options={{ headerTitleAlign: 'center', headerShown: false }} /> */}
            <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome back user!' }} />
            <Stack.Screen name="All Food Categories" component={TopTabNavigation} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Favourites" component={Favourites} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="FoodMenu" component={FoodMenu} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Menu" component={Menu} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Add New Card" component={NewCard} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Security" component={MainSecurity} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Address Form" component={AddressForm} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Make A Review" component={FeedBack} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="My Cards" component={MyCards} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Delivery Address Book" component={AddressBook} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="NewUser" component={NewUser} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Register" component={Register} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Reset Password Using Email" component={ResetpasswordEmail} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Reset Password Using Mobile" component={ResetpasswordMobile} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="TrackOrder" component={TrackOrder} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Checkout" component={CheckoutCOD} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="ThankYou" component={GreetCOD} options={{ headerShown: false }} />
            <Stack.Screen name="Select Option" component={DeliveryOptions} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="My Orders" component={PastOrders} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="View Item" component={SingleFoodItem} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="Checkout Take Away" component={CheckoutTK} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name="ThankYouTK" component={ThankYou} options={{ headerTitleAlign: 'center' }, { headerShown: false }} />
            <Stack.Screen name="Mc Fries" component={McFries} options={{ headerTitleAlign: 'center' }, { title: 'Mc French Fries' }} />
        </Stack.Navigator>
    )
}

export default StackNavigator
