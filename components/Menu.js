import React from 'react'

import { View, Text, Button } from 'react-native'

function Menu({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>

            <Button
                title="Go Contact Us"
                onPress={() => navigation.navigate('ContactUs')}
            />
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Make A Review"
                onPress={() => navigation.navigate('Make A Review')}
            />
            <Button
                title="My Cards"
                onPress={() => navigation.navigate('My Cards')}
            />
            <Button
                title="Address Delivery Book"
                onPress={() => navigation.navigate('Delivery Address Book')}
            />
        </View>
    )
}

export default Menu
