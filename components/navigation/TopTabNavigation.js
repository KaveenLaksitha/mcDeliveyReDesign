import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Salads from '../../components/MenuItems/Salads';
import Desserts from '../../components/MenuItems/Desserts';
import AlaCarte from '../../components/MenuItems/AlaCarte';
import HappyMeals from '../../components/MenuItems/HappyMeals';
import Beverages from '../../components/MenuItems/Beverage';
import BundleMeals from '../../components/MenuItems/BundleMeals';

const TopTab = createMaterialTopTabNavigator();
function TopTabNavigation({ route }) {







    const [tab, setTab] = useState("");

    useEffect(() => {

        const { screen, initial } = route.params;
        console.log("tab view data", screen, initial);

        if (screen > 3) { }



    }, [route.params])





    return (
        <TopTab.Navigator
            initialRouteName="Beverages"

            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarStyle: {

                    height: 50,
                    width: 412
                },
                tabBarIndicatorStyle: {

                    backgroundColor: "#FFC300"
                }
            }}
        >

            <TopTab.Screen name="AlaCarte" component={AlaCarte} options={{ headerTitleAlign: 'center' }, { title: 'AlaCarte & Value Meals' }} />
            <TopTab.Screen name="Desserts" component={Desserts} />
            <TopTab.Screen name="Salads" component={Salads} options={{ headerTitleAlign: 'center' }, { title: 'Snacks/Sides' }} />
            <TopTab.Screen name="Beverages" component={Beverages} />
            <TopTab.Screen name="HappyMeals" component={HappyMeals} />
            <TopTab.Screen name="Promotions & Bundle Meals" component={BundleMeals} />



        </TopTab.Navigator >
    )
}

export default TopTabNavigation
