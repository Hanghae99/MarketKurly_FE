import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text } from '../../elements';
import CountBtn from './CountBtn';

const ModalItem = (props) => {
    const product_list = useSelector(state => state.modal.list);
    const locale_price = product_list[0].price.toLocaleString('ko-KR');
    return (
        <Container>
            <Text
                lineHeight="20px"
                text={product_list[0].brand 
                    ? `[${product_list[0].brand }] ${product_list[0].name }`
                    : `${product_list[0].name}`}
            />
            <Grid padding="7px 0 0 0" flex>
                <Text 
                    padding="0 4px 0 0"
                    text={`${locale_price}원`}
                    bold="bold"
                />
                <CountBtn />
            </Grid>
        </Container>
    );
};

const Container = styled.div`
    width: 380px;
    padding: 11px 0;
    min-height: 118px;
    max-height: 325px;
`;

export default ModalItem;