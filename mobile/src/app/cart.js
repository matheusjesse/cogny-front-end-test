import React, { useContext } from 'react';
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../utils/CartContext';

const Cart = () => {
  const { cart, updateItemQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    updateItemQuantity(id, newQuantity);
  };

  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice = item.price * item.quantity;
      total += itemPrice;
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.imgUrl }} style={styles.image} />
              <View style={styles.detailsContainer}>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{`R$ ${item.price.toFixed(2)}`}</Text>
              </View>
              <TextInput
                style={styles.quantityInput}
                keyboardType="numeric"
                value={item.quantity.toString()}
                onChangeText={(value) => handleQuantityChange(item.id, parseInt(value, 10))}
              />
              <Text style={styles.totalPrice}>{`R$ ${item.totalPrice.toFixed(2)}`}</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <TouchableOpacity style={styles.finishButton}>
                <Text style={styles.finishButtonText}>FINALIZAR PEDIDO</Text>
              </TouchableOpacity>
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>TOTAL</Text>
                <Text style={styles.totalValue}>{`R$ ${handleTotalPrice()}`}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#555',
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  quantityInput: {
    width: 50,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  finishButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Cart;