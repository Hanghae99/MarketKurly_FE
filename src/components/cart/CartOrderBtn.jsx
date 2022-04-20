import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CartOrderBtn = (props) => {
    const cart_list = useSelector(state => state.cart.list);
    const quantity_arr = cart_list.map(v => v.quantity);
    const total_num = quantity_arr.reduce((acc, cur) => acc + cur, 0);
   
    if(total_num > 0){
        return (
            <OrderContainer type="submit">
                <span>주문하기</span>
            </OrderContainer>
        );
    }
    return (
        <Container type="submit">
            <span>상품을 담아주세요</span>
        </Container>
    );
};

const OrderContainer = styled.button`
    width: 100%;
    border: none;
    outline: none;
    margin: 20px 0 0 0;
    height: 56px;
    padding-bottom: 2px;
    line-height: 54px;
    border-radius: 6px;
    background-color: #5f0080;;
    cursor: pointer;
    & span {
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
`;

const Container = styled.button`
    width: 100%;
    border: none;
    outline: none;
    margin: 20px 0 0 0;
    height: 56px;
    padding-bottom: 2px;
    line-height: 54px;
    border-radius: 6px;
    background-color: #ddd;
    & span {
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
`;
export default CartOrderBtn;