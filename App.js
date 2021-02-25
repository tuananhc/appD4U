import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='name' component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}