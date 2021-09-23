import React from 'react'

import { View, Text, Button } from 'react-native';

function Favourites({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>

            <Button
                title="Go to next comp"
<<<<<<< HEAD
                onPress={() => navigation.navigate("Home")}
=======
                onPress={() => navigation.navigate("FoodMenu")}
>>>>>>> 43513c5a7166dda6bd5ad62a1b9421950bad843e
            />
        </View>
    )
}

export default Favourites
