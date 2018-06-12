// Import a library tp help create components
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ScrollView, Picker, Modal, TouchableHighlight } from 'react-native';
import Header from './src/Components/Header';
import LargeProducts from './src/Shop/LargeProducts';
import SmallProducts from './src/Shop/SmallProducts';
// Creating the Components
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="green" barStyle="light-content"/>
        <Header />
        <ScrollView>
          <LargeProducts />
          // MAIN BODY CONTEND: SMALL
          <Text style={{paddingTop: 30, paddingLeft: 20}}>For small item view.</Text>
          <SmallProducts />
        </ScrollView>
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
