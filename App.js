import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import firebase from 'firebase';
import Login from './scenes/Authentication/Login';
import Register from './scenes/Authentication/Register';
import CartItems from './scenes/Store/CartItems';

const Navigation = createStackNavigator({
  cart: {screen: CartItems,
    navigationOptions:{
      headerLeft: null
    },
  },
  Login: {screen: Login,
          navigationOptions:{
            header: false,
          }
        },
  register: {screen: Register},
  
});
export default Navigation;




