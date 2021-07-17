/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState}  from 'react';
import type {Node} from 'react';
import Login from './src/Screens/LogIn';
import Home from './src/Screens/Home';
import Icon from 'react-native-vector-icons/AntDesign';

import {Alert, StyleSheet ,Text,View,TextInput,Button} from 'react-native';
import Routes from './src/Navigation/Routes';
// import { Icon } from 'react-native-elements'







// const App = () => {
//   return (
//    <Routes />
//   );
// };

// const HomeScreen = () => {
//   return (
//     <Home />
//   );
// };


const App = () => {
    return (
   <Routes />
  );

};

export default App;

