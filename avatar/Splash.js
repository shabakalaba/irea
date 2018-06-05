import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Avatar</Text>
                </View>
                <Text style={styles.subtitle}>Powered by React Native.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fab1a0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    title: { 
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        paddingBottom: 20
    }
  });