import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';

// Import your pages/screens
import Home from './screens/Home';
import Game from './screens/Game';
import Ranks from './screens/Ranks';
import Result from './screens/Result';

// Create a native stack navigator
const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

// Define the navigation structure
const Nav = () => {
    console.log("Splash screen gone...."); // An optional comment
    return (
        <>
            <StatusBar backgroundColor={"transparent"} translucent />
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName={"Home"} screenOptions={{
                    headerShown: false, // Hide the header
                    animation: "flip", // Set the animation type
                    gestureDirection: "horizontal", // Set the gesture direction
                    fullScreenGestureEnabled: true // Enable full-screen gestures
                }}>
                    <Stack.Screen component={Home} name='Home' />
                    <Stack.Screen component={Game} name='Game' />
                    <Stack.Screen component={Ranks} name='Ranks' />
                    <Stack.Screen component={Result} name='Result' />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Nav;
