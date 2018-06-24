// Import a library tp help create components
import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View, Alert } from 'react-native';
import CartItems from '../Shop/CartItems';

// Creating the Components
export default class Screen1 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#00aeef'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerRight: ( 
        <TouchableOpacity onPress={() => navigation.navigate('Screen2') } >
          <Text style={{paddingRight: 20, color:'white'}}>Cart</Text>
        </TouchableOpacity>
    )
  });

  render() {
    return (
        <ScrollView>
          <CartItems />
        </ScrollView>
    );
  }
}

// Styling
const styles = StyleSheet.create({
  button: {
    flex:1,
    height: 30,
    justifyContent: 'center'
  }
});
