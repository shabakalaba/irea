// Import a library tp help create components
import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View, Alert, Image } from 'react-native';
import ItemComponent from '../Shop/Products';

import { firebaseRef } from '../Services/firebaseRef';

let itemsRef = firebaseRef.database().ref('products');

// Creating the Components
export default class Screen1 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#00aeef'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerRight: ( 
        <TouchableOpacity onPress={() => navigation.navigate('Screen2') }>
          <Text style={{paddingRight: 20, color:'white'}}>Cart</Text>
        </TouchableOpacity>
    )
  });

  constructor(props)
  {
      super(props)

      this.state = {
          items: []
      }

  }

  hello(item)
  {   
      Alert.alert(
        'Item Added',
        'This item has been added to your basket!')
        this.props.screenProps.cartTest.push(item)
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
        <ScrollView>
          <View style={styles.smallContainer}>
            {this.state.items.map((item, index) => {
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
        </ScrollView>
      )
  }
}

// Styling
const styles = StyleSheet.create({
  button: {
    flex:1,
    height: 30,
    justifyContent: 'center'
  },
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
});
