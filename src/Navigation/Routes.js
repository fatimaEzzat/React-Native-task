import React from 'react';
import {NavigationAction ,NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Text,
  View,
} from 'react-native';
import Login from '../Screens/LogIn'

import Home from '../Screens/Home'
const Stack = createStackNavigator();

const Routes =()=> {
  return (
   <NavigationContainer initialRouteName={'Login'} >
    <Stack.Navigator
    screenOptions={{headerShown:false,}}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>

   </NavigationContainer>
      
  );
};

export default Routes;

