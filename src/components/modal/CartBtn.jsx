import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/modules/modal';

const CartBtn = (props) => {
    const { right, bottom } = props;
    const styles = { right, bottom };
    const dispatch = useDispatch();
    const product_list = props.list;
    const new_product_list = [{
        ...product_list,
        quantity: 0,
        sum: 0,
    }]
    // console.log(new_product_list)
    const openModal = () => {
        dispatch(setModal(true, new_product_list));
    };

    return (
        <CartButton onClick={openModal} {...styles}>
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

CartBtn.defaultProps = {
    bottom: "15px",
    right: "15px",
};

const CartButton = styled.button`
    position: absolute;
    z-index: 100;
    width: 45px;
    height: 45px;
    border: none;
    outline: none;
    background: none;
    bottom: ${props => props.bottom}; 
    right: ${props => props.right}; 
    cursor: pointer;
`;

export default CartBtn;