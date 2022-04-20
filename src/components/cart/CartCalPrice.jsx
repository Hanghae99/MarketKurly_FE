import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Text } from '../../elements';

const CartCalPrice = (props) => {
    const cart_list =useSelector(state => state.cart.list);
    const sum_arr = cart_list.map(v => v.sum);
    
    const prevprice = sum_arr.reduce((acc, cur) => acc + cur, 0);
    const locale_price = prevprice.toLocaleString('ko-KR') + "원";
    
    const post_price = prevprice >= 40000 ? 0 : 3000;
    const post_price_locale = post_price.toLocaleString('ko-KR')
    
    const free_post_price_rest = prevprice >= 40000 ? "" : 40000-prevprice;
    const free_post_price_rest_locale = free_post_price_rest.toLocaleString('ko-KR') + "원 추가주문 시, 무료배송";
    
    const expected_payment = post_price + prevprice;
    const expected_payment_locale = expected_payment.toLocaleString('ko-KR')
    
    return (
        <Container>
            <Calculate>
                <Span>상품금액</Span>
                <Span>{locale_price}</Span>
            </Calculate>
            <Calculate>
                <Span>상품할인금액</Span>
                <Span>0원</Span>
            </Calculate>
            <Calculate>
                <Span>배송비</Span>
                {post_price
                    ? <Span>+{post_price_locale}원</Span>
                    : <Span>0원</Span>
                }
            </Calculate>
            {free_post_price_rest 
                &&  <Text
                        text={free_post_price_rest_locale}
                        padding="3px 0 0 0"
                        textAlign="right"
                        color="#5f0080"
                        size="12px"
                        lineHeight="18px"
                    />
            }
            <Line />
            <Calculate>
                <Span>결제예정금액</Span>
                <Sum>{expected_payment_locale}원</Sum>
            </Calculate>
        </Container>
    )
}

const Container = styled.div`
    padding: 9px 18px 18px 20px;
    background-color: #fafafa;
`;

const Calculate = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 9px 0 0 0;
`;

const Line = styled.div`
    margin: 17px 0 0 0;
    padding-top: 8px;
    border-top: 1px solid #eee;
`;

const Span = styled.div`
    font-size: 16px;
    line-height: 27px;
    color: #4c4c4c;
`;

const Sum = styled.div`
    font-size: 22px;
    line-height: 27px;
    color: #4c4c4c;
`;

export default CartCalPrice;