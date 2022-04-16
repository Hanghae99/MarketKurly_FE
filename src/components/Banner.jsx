import React from 'react';
import styled from 'styled-components';
import { RESP } from '../shared/test';
import { Grid, Button } from "../elements/index"

const Banner = (props) => {
    const img_list = RESP.imaUrlList;

    return (
        <BannerContainer>
            <BannerItem image={img_list[2].imgUrl}>
                <Grid flex>
                    <BannerBtnWrap>
                        <Button margin="0 0 0 360px" place="left" />
                    </BannerBtnWrap>
                    <BannerBtnWrap>
                        <Button margin="0 0 0 590px" place="right" /> 
                    </BannerBtnWrap>
                </Grid>  
            </BannerItem>
        </BannerContainer>
    );
};

const BannerContainer = styled.div`
    width: 100%;
    margin-bottom: 40px;
`;

const BannerItem = styled.div`
    display: flex;
    height: 370px;
    max-width: 1900px;
    margin: 0 auto;
    background: url(${props => props.image});
    background-size: cover;
    background-color: rgb(238, 238, 238);
    background-position: 50% center;
    background-repeat: no-repeat;
`;

const BannerBtnWrap = styled.div`
    position: relative;
    width: 950px;
    height: 370px;
`;

export default Banner;