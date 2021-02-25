import React from 'react';
import { View, Text } from 'react-native';

export default function Splash() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, opacity: 0.6}}>Loading...</Text>
        </View>
    )
}