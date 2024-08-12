import styled from 'styled-components';

const AppStyled = styled.div `
    width: 100vw;
    display: flex;
    justify-content: center;
`

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: red;
    justify-content: center;
    width: 940px;
`

export default AppStyled;
export { ProductsContainer }