import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        padding: 20,
        width: '100%',
        backgroundColor: '#00aeef',
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    }
});

export default class ItemComponent extends Component {
    constructor(props)
    {
        
        super(props)

        this.state = {
            cart: []
        }

        this.hello = this.hello.bind(this)
    }
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    hello(item)
    {   
        this.state.cart.push(item)
        console.log(this.state.cart)
    }

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            return (
                <View key={index}>
                    <Text style={styles.itemtext}>{item.title} {item.id}</Text>
                    <TouchableOpacity onPress={()=>this.hello(item)} style={styles.button}>
                        <Text style={styles.text}>Add {item.title} To Cart</Text>
                    </TouchableOpacity>
                </View>
            )
        })}
      </View>
    );
  }
}