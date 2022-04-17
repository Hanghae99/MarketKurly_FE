import React from 'react';
import styled from 'styled-components';

const HoverList = (props) => {
    return (
        <Container>
            <ul>
                <li>공지사항</li>
                <li>자주하는 질문</li>
                <li>1:1 문의</li>
                <li>대량주문 문의</li>
                <li>상품제안</li>
                <li>에코포장 피드백</li>
            </ul>
        </Container>
    );
};

const Container = styled.div`
    display: none;
    position: absolute;
    z-index: 1000;
    right: 2px;
    top: 34px;
    width: 102px;
    padding: 3px 9px;
    border: 1px solid #ddd;
    background-color: #fff;

    ul li {
        padding: 0;
        font-size: 12px;
        color: #404040;
        line-height: 24px;
        white-space: nowrap;
        cursor: pointer;
    }
`;
export default HoverList;