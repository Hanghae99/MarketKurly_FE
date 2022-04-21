import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Text } from '../../elements';

const SortMenu = (props) => {
    return (
        <Grid padding="19px 0 0 0" flex>
            <Text
                size="12px"
                lineHeight="18px"
                text={`총 0개`}
            />
            <Grid>
                <List>
                    <li>
                        <StyledLink to=''>추천순</StyledLink>
                        <Info />
                    </li>
                    <li><StyledLink to=''>신상품순</StyledLink></li>
                    <li><StyledLink to=''>판매량순</StyledLink></li>
                    <li><StyledLink to=''>혜택순</StyledLink></li>
                    <li><StyledLink to=''>낮은 가격순</StyledLink></li>
                    <li><StyledLink to=''>높은 가격순</StyledLink></li>
                </List>
            </Grid>
        </Grid>
    );
};

const List = styled.ul`
    display: block;
    list-style: none;
    display: flex;
    position: relative;

    & li {
        padding: 0 0 0 18px;
        position: relative;
        display: inline-block;
        width: max-content;
        display: flex;
        align-items: center;
    }

    & li:nth-child(n+2):before {
        content: "";
        position: absolute;
        left: 9px;
        top: 9.5px;
        width: 1px;
        height: 10px;
        background-color: #e5e5e5;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 12px;
    color: #999;
    line-height: 18px;
    letter-spacing: -.3px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`;

const Info = styled.button`
    width: 26px;
    height: 26px;
    margin: 1px -5px 0 -1px;
    border: none;
    outline: none;
    background: url('https://res.kurly.com/kurly/ico/2021/question_24_24_cccc.svg?ver=2') no-repeat 50% 50%;
    background-size: 24px 24px;
`;

export default SortMenu;