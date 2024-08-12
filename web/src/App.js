import React, { useEffect, useState } from "react";
import fetchProducts from '../src/utils/fechDataProducts';
import './App.css';
import AppStyle from "./styles/AppStyle";
import {ProductsContainer} from './styles/AppStyle';

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
    <AppStyle>
      <ProductsContainer>
        {loading ? (
          <p>Carregando</p>
        ) : (
          products.map((element, index) => (
          <div>
            <img src={element.imgUrl} alt={element.description}/>
            <p key={index}>{element.description}</p>
            <p>{ `R$ ` + element.price}</p>
          </div>
          ))
        )}
      </ProductsContainer>
    </AppStyle>
  );
}

export default App;
