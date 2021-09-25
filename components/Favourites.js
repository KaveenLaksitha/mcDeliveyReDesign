import React from 'react'

import { View, Text, Button } from 'react-native';

function Favourites({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>

            <Button
                title="Go to next comp"

                onPress={() => navigation.navigate("Home")}
                onPress={() => navigation.navigate("FoodMenu")}
            />
        </View>
    )
}

export default Favourites
