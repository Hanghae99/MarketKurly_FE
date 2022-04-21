import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from '../../redux/modules/cart';

const CartOrderBtn = (props) => {
    const dispatch = useDispatch();
    const cart_list = useSelector(state => state.cart.list);
    const choice_item = cart_list.findIndex(v => v.checked === false);
    
    const clickOrder = () => {
        window.alert("주문이 완료되었습니다.");
        dispatch(deleteAll());
        localStorage.removeItem("baskets");
    };

    if(choice_item !== 0){
        return (
            <OrderContainer type="submit" onClick={clickOrder}>
                <span>주문하기</span>
            </OrderContainer>
        );
    }else{
        return (
            <Container type="submit">
                <span>상품을 담아주세요</span>
            </Container>
        );
    };
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