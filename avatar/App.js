import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';
import Login from './src/Login/Login';

export default class App extends React.Component {
  componentDidMount(){
    var config = {
      apiKey: "AIzaSyALzXI6YeeJSjXNoz6DEfdKA8mNRA2m3zc",
      authDomain: "teambs-258e2.firebaseapp.com",
      databaseURL: "https://teambs-258e2.firebaseio.com",
      projectId: "teambs-258e2",
      storageBucket: "teambs-258e2.appspot.com",
      messagingSenderId: "536082052207"
    };
    firebase.initializeApp(config);
    // console.log(firebase); // Checking connection and version of firebase


    // INSERT INTO DATABASE
    firebase.database().ref('products/001').set(
      {
        name: '',
        short_descirption: '',
        description: '',
        price: 99.99,
        stock: 112,
        instructions: 'This product requires assembly.'
      }
    ).then(()=> {
      console.log('inserted');
    }).catch((errpr)=>{
      console.log(error);
    });

    // READ FROM DATABASE
    firebase.database().ref('user').on('value', (data) => { // .on is a listener to change on change of the table.
      // Callback function here
      console.log(data.toJSON());
    });

    // UPDATE FROM DATABASE
    firebase.database().ref('user/001').update({
      name: 'Michael Jordan',
      age: 55
    });

    // DELETE FROM DATABASE
    firebase.database().ref('user/004/name').remove().then(()=> {
      console.log('deleted');
    }); // Can remove specific items, or the entire row bases on what's put into the reference.
  }
  
  render() {
    return (
      //<Splash />
      <Login />
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
});
