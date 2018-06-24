import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ItemComponent from './Products';

import { firebaseRef } from '../Services/firebaseRef';

let itemsRef = firebaseRef.database().ref('products');

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
            <View>
                {
                    <ItemComponent items={this.state.items}/> 
                }
            </View>
        )
    }
}