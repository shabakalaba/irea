// Import a library tp help create components
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import TabNav from './src/Components/TabNav';
// Creating the Components
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <StatusBar backgroundColor="green" barStyle="light-content"/>
        <TabNav />
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
