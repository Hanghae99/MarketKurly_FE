import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Button, Grid } from '../../elements';
import Item from '../Item';
import Text from './Text';
import {RESP} from '../../shared/banner'

const Recommend = (props) => {
    const settings = { 
        infinite: true, 
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 4,
        nextArrow: <Button type="recommend" place="right" bg="right"/>,
        prevArrow: <Button type="recommend"/>,
    };
    
    const item_list = RESP.itemList;
    
    return (
        <Grid margin="0 0 40px 0">
            <Container>
                <Text>이 상품 어때요?</Text>
                <ItemContainer>
                    <StyledSlider {...settings}>
                        {item_list.map((v ,i) => {
                            return(
                                <div key={i}>
                                    <Item {...v}/>
                                </div>
                            )}
                        )}
                    </StyledSlider>
                </ItemContainer>
            </Container>
        </Grid>
    );
};

const StyledSlider = styled(Slider)`
    width: 1050px;
`;

const Container = styled.div`
    width: 1050px;
    margin: 0 auto;
    padding: 32px 0px 40px 0px;
`;

const ItemContainer = styled.div`
    width: 1050px;
    display: flex;
    justify-content: center;
`;
export default Recommend;