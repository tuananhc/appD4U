import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MainTabScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
    )
};