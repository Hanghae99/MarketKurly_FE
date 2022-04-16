import React from 'react';
import styled from 'styled-components';

const CartOrderBtn = (props) => {
    return (
        <Container type="submit">
            <span>상품을 담아주세요</span>
        </Container>
    );
};

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
    cursor: pointer;
    & span {
        color: white;
        font-size: 16px;
        font-weight: 500;
    }
`;
export default CartOrderBtn;