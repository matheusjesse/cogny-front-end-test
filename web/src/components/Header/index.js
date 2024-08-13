import HeaderStyle, {CardContainer} from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { CartContext } from '../../utils/CartContext';

function Header() {

    const [totalCartItem, setTotalCartItem] = useState(0);
    const { cart } = useContext(CartContext);

    const navigate = useNavigate();

    const handleAddToCart = () => {
        navigate("/cart");
    };

    const handleCartQuantity = () => {
        let totalProdut = 0;
        cart.forEach(element => {
        totalProdut += element.quantity;
        })
        setTotalCartItem(totalProdut);
    };

    useEffect(() => {
        handleCartQuantity();
    }, [cart]);
    
  return (
    <HeaderStyle>
        <h1>COGNYFOOD</h1>
        <button onClick={handleAddToCart}>
            <CardContainer>
                <p className="title-cart">Meu carrinho</p>
                <p>{totalCartItem} items</p>
            </CardContainer>
        </button>
    </HeaderStyle>
  );
}

export default Header;
