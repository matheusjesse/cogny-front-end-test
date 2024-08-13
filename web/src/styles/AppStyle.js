import styled from 'styled-components';

const AppStyled = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #191920;
    flex-wrap: wrap;
`

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
    width: 1097px;
    margin-bottom: 44px;

    @media (max-width: 1400px) { 
        width: 1098px;
    }
    @media (max-width: 1124px) { 
        width: 725px;
    }
    @media (max-width: 760px) { 
        width: 353px;
    }
    

`

const ProductCard = styled.div`
background-color: white;
padding: 18px;
img {
    width: 260px;
    height: 240px;
    margin: 28px 28px 0px 28px;    
}

`
const ButtonContainer = styled.div`
    display: flex;
    p{
        background-color: #bf2846;
        width: 53px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px 0px 0px 8px;
        color: white;
    }
`
const ButtonStyle = styled.button`
    background-color: #F8375D;
    width: 260px;
    border-radius: 0px 8px 8px 0px;
    font-size: 1em;
    font-weight: 700;
    color: white;
`

export default AppStyled;
export { ProductsContainer, ProductCard, ButtonContainer, ButtonStyle }