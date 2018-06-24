import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class LoginForm extends Component 
{
    render() {
        return (
        // HEADER
            <View style={styles.header}>
                <Text style={styles.headerTitleStyle}>IREA</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {                     // HEADER
        height: 90,
        paddingTop: 40,
        backgroundColor: '#00aeef',
        justifyContent: 'center',
        alignItems: 'center'
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: 2
      }
});