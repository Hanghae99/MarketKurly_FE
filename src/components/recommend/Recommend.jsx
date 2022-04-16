import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Grid } from '../../elements';
import Item from '../Item';
import Text from './Text';
import {RESP} from '../../shared/banner'

const Recommend = (props) => {
    const settings = {
        dots: false, 
        infinite: true, 
        // speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1, 
    }
    const item_list = RESP.itemList;
    
    return (
        <Grid margin="0 0 40px 0">
            <Container>
                <Text>이 상품 어때요?</Text>
                <ItemContainer>
                    <Slider {...settings}>
                        {/* {item_list.map((v ,i) => {
                        return(
                            <Item key={i} {...v}/>
                        )})} */}
<Item />


                    </Slider>
                    
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ItemContainer>
            </Container>
        </Grid>
    );
};

const Container = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding: 32px 0px 40px 0px;
`;

const ItemContainer = styled.div`
    width: 1050px;
    display: flex;
    justify-content: center;
    overflow: hidden;
`;
export default Recommend;