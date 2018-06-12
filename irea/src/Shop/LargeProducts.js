import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, ScrollView, TouchableHighlight, Picker } from 'react-native'
export default class LargeProducts extends Component 
{
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() {
        return (
        // MAIN BODY CONTENT: LARGE
        <View style={styles.productList}>
          <Text>For large item view.</Text>
          <View style={styles.product}>
            <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
              <Image source={{uri: 'https://www.ikea.com/PIAimages/0243994_PE383246_S5.JPG'}} style={{height: 300}} />
            </TouchableOpacity>
            <Text style={styles.productTitle}>Product Name</Text>
            <Text style={styles.productPrice}>$0.00</Text>
            <Text style={{paddingTop: 10}}>This is the short product desciption.</Text>
            <TouchableOpacity style={styles.addToCart}>
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>
          <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {alert('Modal has been closed.');}}>
                <ScrollView>
                    <View style={styles.productList}>
                        <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                <Text style={{paddingTop:30}}>Back</Text>
              </TouchableHighlight>
          <Image source={{uri: 'https://www.ikea.com/PIAimages/0243994_PE383246_S5.JPG'}} style={{height: 400, width: 'auto', marginTop: 20}} />
          <Text style={styles.productTitle}>Product Title</Text>
          <Text style={styles.stockLevel}>Shelf unit, white</Text>
          <Text style={styles.productPrice}>$0.00</Text>
          <Text style={styles.stockLevel}>In-Stock - Usually ships within 24 hours.</Text>
          <Text style={styles.productTitleSmall}>QUANTITY</Text>
          <Picker mode="dropdown">
            <Picker.Item label = "1" value = "1" />
            <Picker.Item label = "2" value = "1" />
            <Picker.Item label = "3" value = "1" />
            <Picker.Item label = "4" value = "1" />
            <Picker.Item label = "5" value = "1" />
            <Picker.Item label = "6" value = "1" />
            <Picker.Item label = "7" value = "1" />
            <Picker.Item label = "8" value = "1" />
          </Picker>
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
          <TouchableOpacity style={styles.addToCart}>
                <Text>Add to Cart</Text>
          </TouchableOpacity>
            </View>
            </ScrollView>
        </Modal>
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
      backgroundColor: 'yellow',
      height: 50,
      marginTop: 20,
      borderRadius: 8
    },
    productPrice: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop: 5
    },              // LARGE PRODUCT LIST
      smallContainer: {                   // SMALL PRODUCT LIST
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: 20
        },
        productSmall: {
          padding: 15,
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
          backgroundColor: 'yellow',
          height: 35,
          marginTop: 10,
          borderRadius: 8
        },
        stockLevel: {
          fontSize: 12,
          color: 'grey',
          paddingBottom: 10
        }
      }
  );