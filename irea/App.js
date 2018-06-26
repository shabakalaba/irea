// Import a library tp help create components
import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import TabNav from './src/Components/TabNav';
import PropTypes from 'prop-types';
import Header from './src/Components/Header';
import Navigation from './dunno';
// Creating the Components
export default class App extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      cart: []
    }


  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <StatusBar backgroundColor="green" barStyle="light-content"/>
        <TabNav 
          screenProps={{ 
            cartTest: this.state.cart
          }}/>
      </View>
    );
  }
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
