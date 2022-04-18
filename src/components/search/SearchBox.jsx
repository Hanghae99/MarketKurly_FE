import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, Grid, Text } from '../../elements';
import { actionCreators as productActions } from '../../redux/modules/product';

const SearchBox = (props) => {
    const dispatch = useDispatch();
    const [ word, setWord ] = useState("");

    const searchItem = () => {
        dispatch(productActions.getProductApi(1, word));
        setWord("");
    };

    return (
        <Container>
            <Grid justify="space-around" flex>
                <Text 
                    text="검색조건"
                    lineHeight="18px"
                    letterSpacing="-1px"
                    padding="26px 0 0 26px"
                    bold="500"
                    />
                <Grid width="845px" padding="26px 26px 0 0" flex >
                    <Input 
                        type="text"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <Button 
                        onClick={searchItem}
                        type="big"
                        width="175px"
                        height="45px"
                        background="#5f0080"
                        lineHeight="45px"
                        text="검색하기"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

const Container = styled.div`
    width: 1050px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-bottom: 26px;
    border-top: 2px solid #5f0080;
    border-bottom: 1px solid #5f0080;
`;

const Input = styled.input`
    width: 607px;
    height: 45px;
    margin-right: 16px;
    padding-left: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    color: #333;
    letter-spacing: -1px;
    outline: none;
`;

export default SearchBox;