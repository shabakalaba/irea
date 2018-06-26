import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import firebase from 'firebase';
import Login from './src/Components/Login';
import Register from './src/Components/Register';

const Navigation = createStackNavigator({
    Login: {screen: Login,
            navigationOptions:{
              header: false,
            }
          },
    register: {screen: Register},
  
  });
  export default Navigation;