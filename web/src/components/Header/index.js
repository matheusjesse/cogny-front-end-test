import HeaderStyle, {CardContainer} from "./HeaderStyle";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        navigate("/cart");
    };
    
  return (
    <HeaderStyle>
        <h1>COGNYFOOD</h1>
        <button onClick={handleAddToCart}>
            <CardContainer>
                <p className="title-cart">Meu carrinho</p>
                <p>3 items</p>
            </CardContainer>
        </button>
    </HeaderStyle>
  );
}

export default Header;
