// Import a library tp help create components
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CartItems from '../Shop/CartItems';

// Creating the Components
export default class Screen1 extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#00aeef'
    },
    headerTitleStyle: {
      color: 'white'
    }
  };
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
  container: {
    flex: 1
  }
});
