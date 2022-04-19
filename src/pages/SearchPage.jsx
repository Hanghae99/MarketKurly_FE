import React from 'react';
import { useSelector } from 'react-redux';
import SearchBox from '../components/search/SearchBox';
import SortMenu from '../components/search/SortMenu';
import Item from '../components/shared/Item';
import { Grid, Text } from '../elements';
import Spinner from '../shared/Spinner';

const SearchPage = (props) => {
    const item_list = useSelector(state => state.product.list);
    const is_loading = useSelector(state => state.product.is_loading);

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
        </>
    );
};

export default SearchPage;