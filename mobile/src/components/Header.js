import React, { useEffect, useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { CartContext } from '../utils/CartContext';

function Header() {
  const [totalCartItem, setTotalCartItem] = useState(0);
  const { cart } = useContext(CartContext);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    navigation.navigate('Cart');
  };

  const handleCartQuantity = () => {
    let totalProduct = 0;
    cart.forEach(element => {
      totalProduct += element.quantity;
    });
    setTotalCartItem(totalProduct);
  };

  useEffect(() => {
    handleCartQuantity();
  }, [cart]);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>COGNYFOOD</Text>
      <TouchableOpacity onPress={handleAddToCart} style={styles.cartButton}>
        <View style={styles.cardContainer}>
          <Text style={styles.cartTitle}>Meu carrinho</Text>
          <Text>{totalCartItem} items</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;