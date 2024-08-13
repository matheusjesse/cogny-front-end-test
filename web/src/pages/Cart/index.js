import React, { useContext,useEffect, useState } from 'react';
import { CartContext } from '../../utils/CartContext';

const Cart = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);
  const [groupedCart, setGroupedCart] = useState([]);


  useEffect(() => {
    const groupItems = (cartItems) => {
        const grouped = cartItems.reduce((acc, item) => {
          const existingItem = acc.find(product => product.id === item.id);
          if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice += item.price;
          } else {
            acc.push({ ...item, quantity: 1, totalPrice: item.price });
          }
          return acc;
        }, []);
        return grouped;
      };
  
      const groupedItems = groupItems(cart);
      setGroupedCart(groupedItems);
  },[]);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <table>
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">PRODUTO</th>
                <th scope="col">QTD</th>
                <th scope="col">PREÇO</th>
                </tr>
            </thead>
            <tbody>
        {groupedCart.map((item) => (
                <tr key={item.id}>
                    <th scope="row"><img src={item.imgUrl} alt={item.description} /></th>
                    <td>
                        <div>
                            <p>{item.description} </p>
                            <p>({item.price})</p>
                        </div>
                    </td>
                    <td>{item.quantity}</td>
                    <td>{item.totalPrice.toFixed(2)}</td>
                </tr>        
        ))}
        </tbody>
        </table>
    )}
    </div>
  );
};

export default Cart;
