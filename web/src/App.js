import React, { useEffect, useState } from "react";
import fetchProducts from '../src/utils/fechDataProducts';
import './App.css';
import AppStyle from "./styles/AppStyle";
import {ProductsContainer, ProductCard, ButtonContainer, ButtonStyle} from './styles/AppStyle';
import Header from "./components/Header";

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
      <Header />
      <ProductsContainer>
        {loading ? (
          <p>Carregando</p>
        ) : (
          products.map((element, index) => (
          <ProductCard>
            <img src={element.imgUrl} alt={element.description}/>
            <p key={index}>{element.description}</p>
            <p>{ `R$ ` + element.price}</p>
            <ButtonContainer>
              <p>1</p>
              <ButtonStyle>Adicionar ao carrinho</ButtonStyle>
            </ButtonContainer>
          </ProductCard>
          ))
        )}
      </ProductsContainer>
    </AppStyle>
  );
}

export default App;
