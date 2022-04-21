import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text } from '../../elements';

const ModalSum = (props) => {
    const sum = useSelector(state => state.modal.list[0].sum);
    const locale_price = sum.toLocaleString('ko-KR');
    return (
        <Grid>
            <Grid padding="20px 0 0 0" flex>
                <Text
                    text="합계"
                    bold="500"
                    size="16px"
                    lineHeight="24px"
                    letterSpacing="-.67px"
                />
                <Grid flex>
                    <Text
                        text={locale_price ? locale_price : "0"} 
                        size="24px"
                        lineHeight="24px"
                        padding="0 0 3px 0"
                        letterSpacing="-1px"
                    />
                    <Text
                        text="원"
                        margin="0 0 0 2px" 
                        size="16px"
                        lineHeight="24px"
                        bold="bold"
                        letterSpacing="-.67px"
                    />
                </Grid>
            </Grid>
            <Container>
                <span>
                    적립
                </span>
                <Text
                    text="로그인 후, 회원할인가와 적립혜택 제공"
                    lineHeight="20px"
                    letterSpacing="-1px"
                />
            </Container>
        </Grid>
    );
};

const Container = styled.div`
    padding: 6px 0 0 0;
    display: flex;
    justify-content: flex-end;

    & span {
        display: inline-block;
        width: 38px;
        height: 20px;
        margin-right: 2px;
        border-radius: 10px;
        background-color: #ffbf00;
        font-weight: bold;
        font-size: 11px;
        color: #fff;
        line-height: 20px;
        text-align: center;
    }
`;

export default ModalSum;