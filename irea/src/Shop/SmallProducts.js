import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TouchableHighlight, Modal, StatusBar } from 'react-native'
import PropTypes from 'prop-types';
export default class SmallProducts extends Component 
{

  constructor(props)
  {
      
      super(props)

      this.state = {
          cart: []
      }

      this.addCart = this.addCart.bind(this)
  }
  static propTypes = {
      items: PropTypes.array.isRequired
  };

  addCart(item)
  {   
      this.state.cart.push(item)
      console.log(this.state.cart)
  }

    // state = {
    //   modalVisible: false,
    // };
    
    // setModalVisible(visible) {
    //   this.setState({modalVisible: visible});
    // }

    render() {
      return (
        <View style={styles.smallContainer}>
        {this.props.items.map((item, index) => {
            return (
              <View>
          <View style={styles.productSmall}>
            <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
              <Image source={{uri: 'https://www.ikea.com/PIAimages/0243994_PE383246_S5.JPG'}} style={{height: 150 , width: 130}} />
            </TouchableOpacity>
            <Text style={styles.productTitleSmall}>Product Name</Text>
            <Text style={styles.productPriceSmall}>$0.00</Text>
            <TouchableOpacity style={styles.addToCartSmall}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {alert('Modal has been closed.');}}>
            <ScrollView>
              <StatusBar barStyle="default"/>
              <View style={styles.productList}>
                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                  <Text style={{paddingTop:30}}>Back</Text>
                </TouchableHighlight>
                <Image source={{uri: 'https://www.ikea.com/PIAimages/0243994_PE383246_S5.JPG'}} style={{height: 400, width: 'auto', marginTop: 20}} />
                <Text style={styles.productTitle}>Product Title</Text>
                <Text style={styles.stockLevel}>Shelf unit, white</Text>
                <Text style={styles.productPrice}>$0.00</Text>
                <Text style={styles.stockLevel}>In-Stock - Usually ships within 24 hours.</Text>
                <View style={{paddingTop: 15}}>
                  <Text style={styles.productTitleSmall}>DESCRIPTION</Text>
                  <Text style={styles.productDescription}>Choose whether you want to place it vertically or horizontally to use it as a shelf or bench.</Text>
                </View>
                <View style={{paddingTop: 15}}>
                  <Text style={styles.productTitleSmall}>PRODUCT DIMENSIONS</Text>
                  <Text style={styles.productDescription}>Width: 27 1/8"</Text>
                  <Text style={styles.productDescription}>Depth: 12 1/4"</Text>
                  <Text style={styles.productDescription}>Height: 52"</Text>
                </View>
                <View style={{paddingTop: 15, paddingBottom: 25}}>
                  <Text style={styles.productDescription}>This product requires assembly</Text>
                </View>
                <TouchableOpacity onPress={()=>this.addCart(item)} style={styles.addToCart}>
                  <Text>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>
          </View>
            )
        })}
        </View>
      )
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