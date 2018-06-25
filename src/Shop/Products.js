import React, { Component } from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TouchableHighlight, Modal, StatusBar, Alert } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {
  static propTypes = {
      items: PropTypes.array.isRequired
  };

    state = {
        modalVisible: false,
    };
      
    setModalVisible (visible) {
        this.setState({modalVisible: visible});
    }




  render() {
    return (
      <View style={styles.smallContainer}>
        {this.props.items.map((item, index) => {
            return (
                <View key={index} style={styles.productSmall}>
                    <Image source={{uri: item.image}} style={{height: 150 , width: 130}} />
                    <Text style={styles.productTitleSmall}>{item.name}</Text>
                    <Text style={styles.stockLevel}>{item.short_description}</Text>
                    <Text style={styles.productPriceSmall}>${item.price}</Text>
                    <Text style={styles.stockLevel}>In-Stock</Text>
                    <TouchableOpacity onPress={()=> this.hello(item)} style={styles.addToCartSmall}>
                        <Text>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    productList: {                // LARGE PRODUCT LIST
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      justifyContent: 'center'
    },
    product: {
      padding: 20,
      height: 'auto',
      backgroundColor: '#F8F8F8'
    },
    productTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 20
    },
    addToCart: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFDB5E',
      height: 50,
      marginTop: 20,
      borderRadius: 3
    },
    productPrice: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop: 5
    },
    smallContainer: {                
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
      productSmall: {
        padding: 10,
        margin: 15,
        backgroundColor: '#F8F8F8'
      },
      productTitleSmall: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 5
      },
      productPriceSmall: {
        fontSize: 18,
        fontWeight: 'bold'
      },
      addToCartSmall: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDB5E',
        height: 35,
        marginTop: 10,
        borderRadius: 2
      },
      stockLevel: {
        fontSize: 12,
        color: 'grey'
      }
    }
  );