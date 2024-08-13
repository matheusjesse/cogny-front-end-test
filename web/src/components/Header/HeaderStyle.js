import styled from 'styled-components';

const HeaderStyle = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;    
    margin: 22px 12px 22px 12px;    

    h1 {
        color: white;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100px;
    justify-content: right;
    color: white;
.title-cart {
    font-weight: 800;
}
`

export default HeaderStyle;
export {CardContainer}