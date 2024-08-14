import { View, Text, FlatList } from 'react-native';
import db from './firebaseConfig';
import {useEffect, useState} from 'react'
import fetchProducts from './firebaseConfig';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setData(products);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Dados da Coleção:</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}


