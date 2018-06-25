import React, { Component } from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TouchableHighlight, Modal, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

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
                <View key={index}>
                <View style={styles.productSmall}>
                  <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
                    <Image source={{uri: item.image}} style={{height: 150 , width: 130}} />
                  </TouchableOpacity>
                  <Text style={styles.productTitleSmall}>{item.name}</Text>
                  <Text style={styles.productPriceSmall}>${item.price}</Text>
                  <TouchableOpacity onPress={()=>this.hello(item)} style={styles.addToCartSmall}>
                    <Text>Add to Cart</Text>
                  </TouchableOpacity>
                </View>

                <Modal animationType="slide" transparent={false} modal={item.index} visible={this.state.modalVisible} >
                <ScrollView>
                  <StatusBar barStyle="default"/>
                  <View style={styles.productList}>
                    <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                      <Text style={{paddingTop:30}}>Back</Text>
                    </TouchableHighlight>
                    <Image source={{uri: item.image}} style={{height: 400, width: 'auto', marginTop: 20}} />
                    <Text style={styles.productTitle}>{item.name}</Text>
                    <Text style={styles.stockLevel}>{item.short_description}</Text>
                    <Text style={styles.productPrice}>${item.price}</Text>
                    <Text style={styles.stockLevel}>In-Stock - Usually ships within 24 hours.</Text>
                    <View style={{paddingTop: 15}}>
                      <Text style={styles.productTitleSmall}>DESCRIPTION</Text>
                      <Text style={styles.productDescription}>{item.long_description}</Text>
                    </View>
                    <View style={{paddingTop: 15}}>
                      <Text style={styles.productTitleSmall}>PRODUCT DIMENSIONS</Text>
                      <Text style={styles.productDescription}>{item.dimensions}</Text>
                    </View>
                    <View style={{paddingTop: 15, paddingBottom: 25}}>
                      <Text style={styles.productDescription}>{item.instructions}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.hello(item)} style={styles.addToCart}>
                      <Text>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </Modal>
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
          justifyContent: 'center',
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
          color: 'grey',
          paddingBottom: 10
        }
      }
  );