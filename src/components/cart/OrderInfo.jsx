import React from 'react';
import styled from 'styled-components';

const OrderInfo = (props) => {
    return (
        <Container>
            <Text><span>·</span>{`[배송준비중] 이전까지 주문 취소 가능합니다.`}</Text>
            <Text><span>·</span>{`[마이컬리 > 주문내역 상세페이지]에서 직접 취소하실 수 있습니다.`}</Text>
        </Container>
    )
}
 
const Container = styled.div`
    margin-top: 34px;
    text-align: left;
`;

const Text = styled.span`
    position: relative;
    display: block;
    position: relative;
    padding: 6px 0 0 10px;
    font-size: 12px;
    color: #666;
    line-height: 18px;
    letter-spacing: -.5px;
    white-space: pre-wrap;

    & span{
        position: absolute;
        left: 0;
    }
`;
export default OrderInfo;