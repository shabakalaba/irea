import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './scenes/Authentication/Login';
import Register from './scenes/Authentication/Register';

export default class App extends React.Component {

  render() {
    return (
      <Login />
    )
  }
}




