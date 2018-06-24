// Import a library tp help create components
import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, Text } from 'react-native';
import TabNav from './src/Components/TabNav';
// Creating the Components
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
