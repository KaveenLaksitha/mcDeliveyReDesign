import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigation';
import FoodMenu from '../foodMenu';
import Favourites from '../Favourites';
import Menu from '../Menu';
import Cart from '../Cart';



const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator
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
            <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="FoodMenu" component={FoodMenu} />
            <Tab.Screen name="Favourites" component={Favourites} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
    )
}

export default TabNavigation
