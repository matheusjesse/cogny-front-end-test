import React, { useEffect, useState, useContext } from "react";
import fetchProducts from '../src/utils/fechDataProducts';
import './App.css';
import AppStyle from "./styles/AppStyle";
import { ProductsContainer, ProductCard, ButtonContainer, ButtonStyle } from './styles/AppStyle';
import Header from "./components/Header";
import { CartContext } from '../src/utils/CartContext';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts(); 
        setProducts(products);
        console.log(products)
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
          products.map((element) => (
          <ProductCard key={element.id}>
            <img src={element.imgUrl} alt={element.description}/>
            <p className="productDescription">{element.description}</p>
            <p className="productPriceText">{ `R$ ` + element.price}</p>
            <ButtonContainer>
              <p>1</p>
              <ButtonStyle onClick={() => addItemToCart(element)}>Adicionar ao carrinho</ButtonStyle>
            </ButtonContainer>
          </ProductCard>
          ))
        )}
      </ProductsContainer>
    </AppStyle>
  );
}

export default App;
