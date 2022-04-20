import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid } from '../../elements';

const CartHeader = (props) => {
    const { borderB } = props;
    const cart_list = useSelector(state => state.cart.list);
    // const is_choice = useSelector(state => state.cart.list)
    return (
        <Container border={borderB}>
            <ChoiceAll>
                <Grid flex>
                    <CheckBox onClick={() => {}}/>
                    <Text className="all">전체선택 ({cart_list.length}/{cart_list.length})</Text>
                </Grid>
                <Text className="choice">선택삭제</Text>
            </ChoiceAll>
        </Container>
    );
};

const Container = styled.div`
    width: 730px;
    height: 60px;
    margin: 0 auto;
    ${props => props.border 
        ? 'border-bottom: 1.5px solid black;'
        : 'border-top: 1px solid #ddd;'
    }
`;

const ChoiceAll = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    font-weight: 500;
    font-size: 14px;
    color: #333;
    line-height: 25px;
    letter-spacing: -.3px;

    &.all {
        padding: 18px 0 17px;
    }
    &.choice {
        padding: 18px 0 17px 20px;
        text-align: right;
    }
    &.choice:before {
        content: "";
        float: left;
        width: 1px;
        height: 14px;
        margin: 6px 21px 0 0;
        background-color: #ddd;
    }
`;

const CheckBox = styled.button`
    cursor: pointer;
    width: 24px;
    height: 24px;
    border: none;
    outline: none;
    margin: 0 12px 0 0;
    background-image: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox_checked.svg');
    /* background-image: url('https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg'); */
    background-color: transparent;
    background-repeat: no-repeat;     
    background-size: 24px 24px;
    background-position: 50% 50%;
`;

export default CartHeader;