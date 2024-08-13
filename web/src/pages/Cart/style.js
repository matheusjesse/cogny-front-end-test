import styled from 'styled-components'

const CartContainer = styled.div`
height: 100vh;
background-color: #191920;
display: flex;
justify-content: center; 
align-items: start;

.finishSale {
    width: 163px;
    height: 42px;
    background-color: #F8375D;
    border-radius: 6px;
    font-weight: 800;
    color: white;
    margin-top: 34px;
}

.saleButtonContainer {
    display: flex;
}

table {
    border-collapse: collapse;
}

.tableContainer {
    padding: 18px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tableRow {
    border-bottom: 1px solid #e6eaf0;  
    padding-bottom: 12px ;
    padding-top: 12px ;
}

.totalValue {
    width: 180px;
}

.totalText {
    font-weight: 800;
    color: #999999;
    margin-top: 12px;
}

.totalNumber {
    font-size: 1.4em;
    font-weight: 700;
}

.tableTitle {
    color: #999999;
}

img {
    width: 100px;
}

table {
background-color: white;
}

.tdDescription {
    width: 400px;
    padding-left: 8px;
}

.tdQuantity {
width: 50px;
text-align: center;
}

.tdPrice {
width: 100px;
font-weight: 600;
text-align: center;
}

.inputNumberQTT {
    height: 30px;
    width: 51px;
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    padding: 4px;
}

.foodDescription {
    color: #333333;
    font-weight: 600;
}

.foodUnitPrice {
    font-weight: 600;
}

th {
    background-color: white;
}
td {
    background-color: white;
}
`



export default CartContainer;