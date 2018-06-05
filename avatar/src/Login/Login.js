import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, StatusBar } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.logoContainer}>
            <Image source={require('../../imgs/logo.png')} style={styles.logo}/>
            <Text style={styles.miniTitle}>Avatar Login</Text>
        </View>
        <View style={styles.loginForm}>
            <LoginForm />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fab1a0'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    miniTitle: {
      color: '#fff'
    }
  });