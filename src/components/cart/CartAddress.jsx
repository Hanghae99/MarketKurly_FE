import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Grid, Text } from '../../elements';

const CartAddress = (props) => {
    const is_login = useSelector(state => state.user.is_login);
    const post_address = useSelector(state => state.user.user_info?.address);
  
    if(is_login){
        return (
            <Container>
                <Grid>
                    <ElP className='address-place'>배송지</ElP>
                    <Grid padding="11px 0 0 0">
                        <ElP>{post_address}</ElP>
                        <Text
                            padding="8px 0 0 0"
                            bold="normal"
                            letterSpacing="-.3px"
                            color="#5f0080"
                            text="샛별배송"
                        />
                        <SearchAddress>배송지 변경</SearchAddress>
                    </Grid>
                </Grid>
            </Container>
        )
    }
    return (
        <Container>
            <Grid>
                <ElP className='address-place'>배송지</ElP>
                <Grid padding="11px 0 0 0">
                    <ElP><span>배송지를 입력</span>하고</ElP>
                    <ElP>배송유형을 확인해 보세요!</ElP>
                    <SearchAddress><span />주소 검색</SearchAddress>
                </Grid>
            </Grid>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 23px 19px 20px;
`;

const ElP = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-overflow: ellipsis;
    word-break: break-word;

    &.address-place:before{
        content: '';
        padding-left: 24px;
        background-image: url('https://res.kurly.com/pc/service/cart/2007/ico_location.svg');
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: 0 50%;
    }

    & span {
        color: #5f0080;
    }
`;

const SearchAddress = styled.a`
    display: inline-block;
    border: 1px solid #5f0080;
    border-radius: 5px;
    margin-top: 17px;
    width: 100%;
    height: 36px;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    line-height: 34px;
    color: #5f0080;
    
    & span {
        line-height: 36px;
        display: inline-block;
        width: 21px;
        height: 20px;
        margin-left: -14px;
        background-image: url('https://res.kurly.com/pc/service/cart/2007/ico_search.svg');
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 21px 20px;
        background-position: 0 50%;
        vertical-align: -5px;
    }
`;

export default CartAddress;