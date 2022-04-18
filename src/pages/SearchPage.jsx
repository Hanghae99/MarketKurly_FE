import React from 'react';
import SearchBox from '../components/search/SearchBox';
import SortMenu from '../components/search/SortMenu';
import Item from '../components/shared/Item';
import { Grid, Text } from '../elements';
import {RESP} from '../shared/banner';

const SearchPage = (props) => {
    const item_list = RESP.itemList;
    return (
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
    );
};

export default SearchPage;