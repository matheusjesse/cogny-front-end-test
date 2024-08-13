import React, { useContext } from 'react';
import { CartContext } from '../../utils/CartContext';
import CartContainer from './style';
import Header from '../../components/Header';

const Cart = () => {
  const { cart, updateItemQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    updateItemQuantity(id, newQuantity);
  };

  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const itemPrice = item.price * item.quantity; 
      total += itemPrice
    })
    return total.toFixed(2);
  }

  return (
    <>
    <Header />
    <CartContainer>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="tableContainer">
        <table >
            <thead>
                <tr>
                <th scope="col"></th>
                <th className="tableTitle" scope="col">PRODUTO</th>
                <th className="tableTitle" scope="col">QTD</th>
                <th className="tableTitle" scope="col">PREÇO</th>
                </tr>
            </thead>
            <tbody>
        {cart.map((item) => (
                <tr key={item.id}>
                    <td className="tableRow"><img src={item.imgUrl} alt={item.description} /></td>
                    <td className="tdDescription tableRow">
                        <div>
                            <p className="foodDescription">{item.description} </p>
                            <p className="foodUnitPrice">{`R$ ` + item.price}</p>
                        </div>
                    </td>
                    <td className="tdQuantity tableRow">
                    <label for="itemQTT">
                    <input
                      className="inputNumberQTT"
                      type="number"
                      id={`itemQTT-${item.id}`}
                      name="itemQTT"
                      min="0"
                      max="100"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    />
                    </label>
                    </td>
                    <td className="tdPrice tableRow">{`R$ ` + item.totalPrice.toFixed(2)}</td>
                </tr>        
        ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="2" className="saleButtonContainer"><button className="finishSale">FINALIZAR PEDIDO</button></th>
            <td></td>
            <td></td>
            <td className="totalValue"><span className="totalText">TOTAL </span><span className="totalNumber">{`R$ ` + handleTotalPrice()}</span></td>
          </tr>
        </tfoot>
        </table>
        </div>
    )}
    </CartContainer>
    </>
  );
};

export default Cart;
