import React from 'react';
import { useSelector } from 'react-redux';

import { SearchBox, SortMenu } from '../components/search/index';
import { Grid, Text } from '../elements';
import { Spinner, Pagination } from '../shared/index';
import Item from '../components/shared/Item';
import { history } from '../redux/store';


const SearchPage = (props) => {
    const item_list = useSelector(state => state.product.list);
    const is_loading = useSelector(state => state.product.is_loading);
    const search_word = useSelector(state => state.product.search_word);

    // 새로고침시 메인으로 이동
    if(!search_word) history.replace('/');
    return (
        <>
            {is_loading && <Spinner type="page" is_dim/>}
            <Grid 
                width="1050px"
                margin="0 auto"
            >
                <Text
                    width="1050px"
                    margin="0 auto"
                    padding="50px 0"
                    lineHeight="35px"
                    bold="500"
                    size="28px"
                    letterSpacing="-1px"
                    textAlign="center"
                    text="상품검색"
                />
                <SearchBox />
                <SortMenu />
                <Grid gridBox>
                    {item_list.map((v ,i) => {
                        return(
                            <div key={i}>
                                <Item {...v}/>
                            </div>
                        )}
                    )}
                </Grid>
            </Grid>
            <Pagination />
        </>
    );
};

export default SearchPage;