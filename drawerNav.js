import React from 'react';
import { createDrawerNavigation, useIsDrawerOpen } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import App from './App';

const TabScreen = () => (
    <Tabs.Navigator>
        <Tabs.Screen name='Trang chủ'/>
        <Tabs.Screen name='Thông tin chung'/>
    </Tabs.Navigator>
);

const Drawer = createDrawerNavigation();

const DrawerNav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={TabScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNav;