import React, { useEffect, useState } from "react";
import fetchProducts from '../src/utils/fechDataProducts';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts(); 
        setProducts(products);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  
  return (
    <div>
    {loading ? (
      <p>Carregando</p>
    ) : (
      products.map((element, index) => <p key={index}>{element.description}</p>)
    )}
  </div>
  );
}

export default App;
