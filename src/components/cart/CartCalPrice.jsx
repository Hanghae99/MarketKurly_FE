import React from 'react';
import styled from 'styled-components';

const CartCalPrice = (props) => {
    return (
        <Container>
            <Calculate>
                <Text>상품금액</Text>
                <Text>0원</Text>
            </Calculate>
            <Calculate>
                <Text>상품할인금액</Text>
                <Text>0원</Text>
            </Calculate>
            <Calculate>
                <Text>배송비</Text>
                <Text>0원</Text>
            </Calculate>
            <Line />
            <Calculate>
                <Text>결제예정금액</Text>
                <Sum>0원</Sum>
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

const Text = styled.div`
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