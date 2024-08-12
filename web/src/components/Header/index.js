import HeaderStyle, {CardContainer} from "./HeaderStyle";

function Header() {
  
  return (
    <HeaderStyle>
      <h1>COGNYFOOD</h1>
      <CardContainer>
        <p className="title-cart">Meu carrinho</p>
        <p>3 items</p>
      </CardContainer>
    </HeaderStyle>
  );
}

export default Header;
