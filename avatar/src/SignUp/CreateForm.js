import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import CreateAccount from '../SignUp/CreatForm';


export default class LoginForm extends Component {
  _goCreateAccount() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <TextInput style={styles.input} placeholder="Username or Email" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} returnKeyType="next" onSubmitEditing={() => this.passwordInput.focus()} placeholderTextColor="rgba(255,255,255,0.7)"/>
        <TextInput style={styles.input} placeholder="Password" returnKeyType="go" ref={(input) => this.passwordInput = input} placeholderTextColor="rgba(255,255,255,0.7)" secureTextEntry />
        <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
        <Button onPress={this._goCreateAccount} 
                title="Create" 
                style={styles.createAccount} 
                onPress={() => navigate('CreateAccount')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 50
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 20
    },
    btnContainer: {
        backgroundColor: 'rgba(255, 118, 117, 0.7)'
    },
    btnText: {
        fontWeight: '700',
        color: '#fff',
        padding: 20,
        textAlign: 'center'
    },
    createAccount: {
      justifyContent: 'center',
      color: '#fff'
    }
  });