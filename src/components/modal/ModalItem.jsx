import React from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../elements';
import CountBtn from './CountBtn';

const ModalItem = (props) => {
    return (
        <Container>
            <Text
                lineHeight="20px"
                text="[브리미] 라코타 치즈"
            />
            <Grid padding="7px 0 0 0" flex>
                <Text 
                    padding="0 4px 0 0"
                    text="8,900원"
                    bold="bold"
                />
                <CountBtn />
            </Grid>
        </Container>
    )
};

const Container = styled.div`
    width: 380px;
    padding: 11px 0;
    min-height: 118px;
    max-height: 325px;
`;

export default ModalItem;