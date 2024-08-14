import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const itemExist = cart.find((element) => element.id === item.id);

    if (itemExist) {
      const newCart = cart.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1, totalPrice: (i.quantity + 1) * i.price }
          : i
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1, totalPrice: item.price }]);
    }
  };

  const updateItemQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map(item =>
          item.id === id
            ? { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
