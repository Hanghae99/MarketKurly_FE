import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Grid } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as productActions } from '../redux/modules/product';

const Pagination = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const link_arr = useRef([]);
    const arrow_arr = useRef([]);
    const page_num = useSelector(state => state.product.page);
    const search_word = useSelector(state => state.product.search_word);
    const [ choicedPage, setChoicedPage ] = useState(page_num);
    const [ prevPage, setPrevPage ] = useState();
        
    /* 이번 프로젝트에서는 5페이지로 고정 */
    const num_arr = [1, 2, 3, 4, 5];
    
    useEffect(() => {
        if(search_word) setChoicedPage(page_num);
        if(prevPage) link_arr.current[prevPage-1].classList.remove("choice-page");
        link_arr.current[choicedPage-1].className += " choice-page";
        setPrevPage(choicedPage);    
    }, [choicedPage, page_num]);

    const clickBtn = (e) => {
        const page = e.target.innerText;
        setChoicedPage(e.target.innerText);
        if(search_word){
            dispatch(productActions.getProductApi(page, search_word));
        } else {
            dispatch(productActions.getProductApi(page));
        }
        if(location.pathname === '/'){
            window.scrollTo(0, 1325);
        } else {
            window.scrollTo(0, 100);
        }
    };



    // 좋은 방식이 아닌 것 같음
    const clickArrow = (e) => {
        // const click = e.target.dataset.num;
        // switch (click*1) {
        //     case 0:
        //         if(choicedPage!==1){
        //             dispatch(productActions.getProductApi(1));
        //             setChoicedPage(1);
        //             window.scrollTo(0, 1325);
        //         }
        //         break;
        //     case 1:
        //         if(choicedPage!==1){
        //             dispatch(productActions.getProductApi(choicedPage-1));
        //             setChoicedPage(choicedPage-1);
        //             window.scrollTo(0, 1325);
        //         }
        //         break;
        //     case 2:
        //         if(choicedPage!==5){
        //             dispatch(productActions.getProductApi(choicedPage+1));
        //             setChoicedPage(choicedPage+1);
        //             window.scrollTo(0, 1325);
        //         }
        //         break;
        //     case 3:
        //         if(choicedPage!==5){
        //             dispatch(productActions.getProductApi(5));
        //             setChoicedPage(5);
        //             window.scrollTo(0, 1325);
        //         }
        //         break;
        //     default:
        //     alert( "어떤 값인지 파악이 되지 않습니다." );
        // };
        // setChoicedPage(click+1);   
    };
    
    return (
        <Grid
            width="1050px"
            margin="60px auto 0 auto"
            flex
            justify="center"
        >
            <StyledLink to='#' ref={elem => arrow_arr.current[0] = elem} data-num="0" onClick={clickArrow} className='layout-pagination-button layout-pagination-first-page'>맨 처음 페이지로 가기</StyledLink>
            <StyledLink to='#' ref={elem => arrow_arr.current[1] = elem} data-num="1" onClick={clickArrow} className='layout-pagination-button layout-pagination-prev-page'>이전 페이지로 가기</StyledLink>
            {num_arr.map((v, i) => 
                <StyledLink 
                    to="#" 
                    key={i} 
                    onClick={clickBtn}
                    ref={elem => link_arr.current[i] = elem} 
                    className='layout-pagination-button'
                >
                    {i+1}
                </StyledLink>
            )}        
            <StyledLink to="#" ref={elem => arrow_arr.current[2] = elem} data-num="2" onClick={clickArrow} className='layout-pagination-button layout-pagination-next-page'>다음 페이지로 가기</StyledLink>
            <StyledLink to="#" ref={elem => arrow_arr.current[3] = elem} data-num="3" onClick={clickArrow} className='layout-pagination-button layout-pagination-last-page'>맨 끝 페이지로 가기</StyledLink>
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