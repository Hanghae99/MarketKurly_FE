import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from '../elements';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = (props) => {
    const dispatch = useDispatch();
    const page_num = useSelector(state => state.product.page);
    const link_arr = useRef([]);

    {/* 이번 프로젝트에서는 5페이지로 고정 */}
    const num_arr = [1, 2, 3, 4, 5];

    useEffect(() => {
        link_arr.current[page_num-1].className += " choice-page"
    }, [page_num]);



    const goods = "meat"
    // console.log(link_arr.current[0].innerText)
    
    return (
        <Grid
            width="1050px"
            margin="60px auto 0 auto"
            flex
            justify="center"
        >
            <StyledLink to={`/${props.page}/goods=${goods}&page=1`} className='layout-pagination-button layout-pagination-first-page'>맨 처음 페이지로 가기</StyledLink>
            <StyledLink to="/cart" className='layout-pagination-button layout-pagination-prev-page'>이전 페이지로 가기</StyledLink>
            {num_arr.map((v, i) => 
                <StyledLink 
                    to="/" 
                    key={i} 
                    ref={elem => link_arr.current[i] = elem} 
                    className='layout-pagination-button'
                >
                    {i+1}
                </StyledLink>
            )}
            
            {/* 이번 프로젝트에서는 5페이지로 고정 */}
            {/* <StyledLink to="/" ref={elem => link_arr.current[0] = elem} className='layout-pagination-button'>1</StyledLink>
            <StyledLink to="/" ref={elem => link_arr.current[1] = elem} className='layout-pagination-button'>2</StyledLink>
            <StyledLink to="/" ref={elem => link_arr.current[2] = elem} className='layout-pagination-button'>3</StyledLink>
            <StyledLink to="/" ref={elem => link_arr.current[3] = elem} className='layout-pagination-button'>4</StyledLink>
            <StyledLink to="/" ref={elem => link_arr.current[4] = elem} className='layout-pagination-button'>5</StyledLink> */}
            
            <StyledLink to="/" className='layout-pagination-button layout-pagination-next-page'>다음 페이지로 가기</StyledLink>
            <StyledLink to="/" className='layout-pagination-button layout-pagination-last-page'>맨 끝 페이지로 가기</StyledLink>
        </Grid>
    );
};

const StyledLink = styled(Link)`
    display: inline-block;
    width: 34px;
    height: 34px;
    border: 1px solid #ddd;
    border-left: none;
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
    color: inherit;
    text-align: center;
    line-height: 31px;  
    cursor: pointer;
    
    &.layout-pagination-first-page {
        text-indent: -9999px;
        background: url('https://res.kurly.com/pc/etc/old/images/common/icon-pagination-first.png') no-repeat 50% 50%;
        border-left: 1px solid #ddd;
    }
    &.layout-pagination-prev-page {
        text-indent: -9999px;
        background: url('https://res.kurly.com/pc/etc/old/images/common/icon-pagination-prev.png') no-repeat 50% 50%;
    }
    &.layout-pagination-next-page {
        text-indent: -9999px;
        background: url('https://res.kurly.com/pc/etc/old/images/common/icon-pagination-next.png') no-repeat 50% 50%;
    }
    &.layout-pagination-last-page {
        text-indent: -9999px;
        background: url('https://res.kurly.com/pc/etc/old/images/common/icon-pagination-last.png') no-repeat 50% 50%;
    }
    &.layout-pagination-button{
        &:hover {
            background-color: #f7f7f7;
        }
    }
    &.choice-page {
        background-color: #f7f7f7;
        cursor: default;
    }
`;


export default Pagination;