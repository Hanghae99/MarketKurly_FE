import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartAddress from '../components/cart/CartAddress';
import CartBlock from '../components/cart/CartBlock';
import CartCalPrice from '../components/cart/CartCalPrice';
import CartHeader from '../components/cart/CartHeader';
import CartOrderBtn from '../components/cart/CartOrderBtn';
import OrderInfo from '../components/cart/OrderInfo';
import { Grid } from '../elements';

const CartPage = (props) => {
    const cart_list = useSelector(state => state.cart.list);
    
    let all_check_btn;
    if(cart_list.findIndex(v => v.checked === false) === -1){
        all_check_btn = true;
    } else {
        all_check_btn = false;
    }; 
   
    return (
        <>
            <Text>장바구니</Text>
            <CartContainer>
                <CartLeft>
                    <CartHeader borderB check={all_check_btn}/>
                    {cart_list.length 
                        ?   cart_list.map((v,i) => 
                                <CartBlock                                     
                                    key={v.id} 
                                    {...v}
                                />
                            )
                        :   <CartContent>
                                <p style={{textAlign: "center"}}>장바구니에 담긴 상품이 없습니다.</p>
                            </CartContent>
                    }
                    <CartHeader check={all_check_btn}/>
                </CartLeft>
                <Grid width="284px">
                    <CartRight>
                        <CartAddress />
                        <CartCalPrice />
                    </CartRight>
                    <CartOrderBtn />
                    <OrderInfo />
                </Grid>
            </CartContainer>
        </>
    );
};

const CartContainer = styled.div`
    width: 1050px;
    min-height: 100vh;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`;

const CartLeft = styled.div`
    width: 730px;
`;

const CartRight = styled.div`
    margin-top: 60px;
    border: 1px solid #ddd;
`;

const Text = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding: 50px 0;
    font-weight: 500;
    font-size: 28px;
    color: #333;
    line-height: 35px;
    text-align: center;
    letter-spacing: -1px;
`;

const CartContent = styled.div`
    width: 100%;
    padding: 115px 0 116px;
    & p {
        font-weight: 500;
        font-size: 16px;
        color: #333;
    }
`;

export default CartPage;