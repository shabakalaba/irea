// Import a library tp help create components
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';

// Creating the Components
export default class Screen2 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#00aeef'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color:'white', paddingLeft: 20}}>Back</Text>
      </TouchableOpacity>
    )
  });
  
  render() {
    
    const { navigation } = this.props;
    const yourCart = navigation.getParam('theCart', 'Cart is empty');
    return (      
      <View style={styles.container}>
        <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1}}>
          <Text style={styles.title}>YOUR BASKET</Text>
        </View>
        <ScrollView style={styles.itemsContainer}>
          {/* This is where the loop starts to populate the cart items */}
          {this.props.screenProps.cartTest.map((item, index) => {
                return (
                    <View key={index} style={styles.cartItem}>
                    <View style={styles.itemImgContainer}>
                      <Image style={{height: 75, width: 75}} source={{uri: item.image}} />
                    </View>
                    <View style={styles.itemDescription}>
                      <Text>Item Name:</Text>
                      <Text>SKU:</Text>
                      <Text>Price:</Text>
                    </View>
                    <View style={styles.itemInfo}>
                      <Text style={{textAlign: 'right'}}>{item.name}</Text>
                      <Text style={{textAlign: 'right'}}>{index}</Text>
                      <Text style={{textAlign: 'right'}}>${item.price}</Text>
                      <Text> </Text>
                      <TouchableOpacity>
                        <Text style={{textAlign: 'right', color: 'blue'}}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )
            })}
          
          {/* This is where the loop ends */}

        </ScrollView>

        <View style={styles.totalContainer}>
          <View style={{flex: 2}}>
            <Text>Merchandise Subtotal:</Text>
            <Text>Flat Shipping & Handling:</Text>
            <Text>Tax:</Text>
          </View>
          <View style={{flex: 1}}>
            {/* This is where we calculate the total's */}
            <Text style={{textAlign: 'right'}}></Text>
            <Text style={{textAlign: 'right'}}></Text>
            <Text style={{textAlign: 'right'}}></Text>
          </View>
        </View>

        <View style={styles.paymentContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 1}}>Order Total:</Text>
            <Text style={{flex: 1, textAlign: 'right'}}></Text>
          </View>
          <View style={styles.checkoutButtons}>
            <TouchableOpacity onPress={() => 
              Alert.alert(
                'Confirm Order',
                'Are you sure you want to process this order?',
                [
                  {text: 'Confirm', onPress: () => Alert.alert('Thank you!', 'Your order is being processed')},
                  {text: 'Not Yet', onPress: () => console.log('Cancel Confirmation')},
                ],
                { cancelable: false }
                )} style={styles.checkoutButton}>
              <Text style={styles.checkout}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  itemCount: {
    textAlign: 'center',
    color: 'grey'
  },
  cartItem:{
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey'
  },
  itemImgContainer:{
    flex: 1
  },
  itemDescription:{
    flex: 1.5
  },
  itemInfo:{
    flex: 1,
    paddingRight: 15
  },
  paymentContainer: {
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  totalContainer: {
    flexDirection:'row',
    paddingBottom: 10,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderTopColor: 'lightgrey',
    borderTopWidth: 1
  },
  checkoutButton:{
    height: 60,
    backgroundColor: '#FFDB5E',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 10
  },
  checkout: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1
  }
});
