import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ItemComponent from '../../components/ItemComponent';

import { firebaseRef } from '../../services/firebase';

let itemsRef = firebaseRef.database().ref('items');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B6A6BB',
    }
  })

export default class CartItems extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        itemsRef.once('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    
    render() {
        return (
            <View style={styles.container}>
                {
                    <ItemComponent items={this.state.items}/> 
                }
                <Text></Text>
            </View>
        )
    }
}