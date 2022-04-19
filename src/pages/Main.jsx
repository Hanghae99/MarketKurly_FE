import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/main/Banner';
import Recommend from '../components/main/Recommend';
import SmallBanner from '../components/main/SmallBanner';
import Item from '../components/shared/Item';
import { Grid, Text } from '../elements';
import Pagination from '../shared/Pagination';
import { actionCreators as productActions } from '../redux/modules/product';
import Spinner from '../shared/Spinner';

const Main = (props) => {
    const dispatch = useDispatch();
    const page_num = useSelector(state => state.product.page);
    const product_list = useSelector(state => state.product.list);
    const is_loading = useSelector(state => state.product.is_loading);

    const [ page ] = useState(page_num);
    
    useEffect(() => {
        dispatch(productActions.getProductApi(page));
    }, []);

    return(
        <>
            <Banner />
            <Recommend />
            <SmallBanner />
            <Text
                size="28px"
                width="1050px"
                margin="0 auto 27px auto"
                textAlign="center"
                lineHeight="1.15"
                letterSpacing="-.26px"
                bold="500"
                text="마켓컬리 MD추천"
                padding="32px 0 0 0"
            />
            <Grid 
                gridBox
                width="1050px"
                margin="0 auto"
            >  
                {product_list.map((v ,i) => {
                    return(
                        <div key={i}>
                            <Item {...v}/>
                        </div>
                    )}
                )}
            </Grid>
            <Pagination />
            {is_loading && <Spinner type="page" is_dim/>}
        </>
    );
};

export default Main;
