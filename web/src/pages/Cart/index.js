import React, { useContext } from 'react';
import { CartContext } from '../../utils/CartContext';

const Cart = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => removeItemFromCart(item.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
