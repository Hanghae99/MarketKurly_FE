import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../elements';
import Item from '../Item';
import Text from './Text';

const Recommend = (props) => {
    return (
        <Grid margin="0 0 40px 0">
            <Container>
                <Text>이 상품 어때요?</Text>
                <ItemContainer>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemContainer>
            </Container>
        </Grid>
    );
};

const Container = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding: 32px 0px 40px 0px;
`;

const ItemContainer = styled.div`
    width: 1050px;
    display: flex;
    justify-content: center;
`;
export default Recommend;