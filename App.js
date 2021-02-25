import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState, useEffect } from 'react';
import  DrawerContent  from './screens/DrawerContent';
import HomeScreen from './screens/HomeScreen';
import Splash from './screens/Splash';
import SignInScreen from './screens/SignInScreen';

const Drawer = createDrawerNavigator();  

function App() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    if (isLoading) {
        return <Splash/>
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Signin" component={SignInScreen} />
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                <Drawer.Screen name="Splash" component={Splash} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;