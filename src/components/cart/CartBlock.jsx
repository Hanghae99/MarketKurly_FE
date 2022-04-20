import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Text } from '../../elements';
import CartCountBtn from './CartCountBtn';

const CartBlock = (props) => {
    const { brand, name, imgUrl, quantity, sum, id } = props;
    const locale_price = sum.toLocaleString('ko-KR') + "원";
    
    return (
        <Grid 
            flex
            position="relative"
            justify=""
        >
            <CheckBox type="button" />
            <StyledLink1 to="#" imgurl={imgUrl}>상품이미지</StyledLink1> 
            <StyledLink2 to="#">
                {brand 
                    ? `[${brand}] ${name}`
                    : `${name}`}
            </StyledLink2>
            <CartCountBtn quantity={quantity} id={id}/>
            <Text
                bold="500"
                lineHeight="24px"
                width="120px"
                text={locale_price}
                size="16px"
                textAlign="right"
                padding="0 10px 0 0"   
            />
            <DeleteBtn type="button"/>
        </Grid>
    );
};

const CheckBox = styled.button`
    position: absolute;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border: none;
    outline: none;
    margin: 0 12px 0 0;
    background-image: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg');
    /* background-image: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg'); */
    background-color: transparent;
    background-repeat: no-repeat;     
    background-size: 24px 24px;
    background-position: 50% 50%;
`;

const StyledLink1 = styled(Link)`
    position: absolute;
    left: 50px;
    width: 60px;
    height: 78px;
    background-image: url('${props => props.imgurl}');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-color: #f4f4f4;
    font-size: 0;
    text-indent: -9999px;
`;

const StyledLink2 = styled(Link)`
    display: flex;
    align-items: center;
    width: 463px;
    min-height: 128px;
    padding: 19px 0 18px 136px;
    text-decoration: none;
    max-height: 54px;
    font-weight: 500;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #333;
    line-height: 22px;
    word-break: break-all;
`;

const DeleteBtn = styled.button`
    right: 5px;
    top: 50%;
    width: 30px;
    height: 30px;
    padding: 0;
    border: none;
    cursor: pointer;
    background-image: url('https://res.kurly.com/pc/service/cart/2007/ico_delete.svg');
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: 50% 50%;
`;

export default CartBlock;