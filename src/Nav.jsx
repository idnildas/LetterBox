import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';


// ------------ pages import ----------------------------------------- //

import Home from './screens/Home';
import Game from './screens/Game';
import Ranks from './screens/Ranks';
import Result from './screens/Result';


// ------------ pages import ----------------------------------------- //

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();


const Nav = () => {
      console.log("splash gone....")
      return (
            <>
      <StatusBar backgroundColor={"transparent"} translucent />
        <NavigationContainer ref={navigationRef}>
              <Stack.Navigator initialRouteName={"Home"} screenOptions={{headerShown:false,animation:"flip",gestureDirection:"horizontal",fullScreenGestureEnabled:true}}>
                  <Stack.Screen  component={Home}  name='Home'/>
                  <Stack.Screen  component={Game} name='Game'/>
                  <Stack.Screen  component={Ranks} name='Ranks'/>
                  <Stack.Screen  component={Result} name='Result'/>                  
            </Stack.Navigator>
      </NavigationContainer>
      </>
  )
}

export default Nav