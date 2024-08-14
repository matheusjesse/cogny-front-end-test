import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, Button, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import fetchProducts from './firebaseConfig'; 
import { CartContext } from './src/utils/CartContext';


export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      } finally {
        setLoading(false);
      }
    };
    console.log(products)
    loadProducts();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View >
              <Image source={{ uri: item.imgUrl }} style={{ width: 100, height: 100, resizeMode: 'contain' }}/>
              <Text>{item.description}</Text>
              <Text>{`R$ ${item.price.toFixed(2)}`}</Text>
              <View >
                <Text>1</Text>
                <TouchableOpacity onPress={() => addItemToCart(item)} >
                  <Text >Adicionar ao carrinho</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}