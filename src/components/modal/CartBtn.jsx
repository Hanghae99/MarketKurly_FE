import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/modules/modal';

const CartBtn = (props) => {
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(setModal(true));
        // document.getElementById("root").style.position = "fixed";
    };

    return (
        <CartButton onClick={openModal}>
            <img
                src="https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"
                alt="장바구니 버튼"
                width="45px"
                height="45px"
            >
            </img>
        </CartButton>
    );
};

const CartButton = styled.button`
    position: absolute;
    z-index: 100;
    width: 45px;
    height: 45px;
    border: none;
    outline: none;
    background: none;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
`;

export default CartBtn;