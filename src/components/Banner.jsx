import React from 'react';
import styled from 'styled-components';
import { RESP } from '../shared/test';
import { Grid, Button } from "../elements/index"

const Banner = (props) => {
    const img_list = RESP.imaUrlList;

    return (
        <BannerContainer>
            <BannerItem image={img_list[1].imgUrl} >
                <Button place="right" margin="0 0 0 590px"/>
                <Button margin="0 0 0 -590px"/>
            </BannerItem>
        </BannerContainer>
    );
};

// 버튼도 움직이게 고칠 것!

const BannerContainer = styled.div`
    position: relative;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
`;

const BannerItem = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    height: 370px;
    min-width: 1050px;
    max-width: 1900px;
    margin: 0 auto;
    background: url(${props => props.image});
    background-size: cover;
    background-color: rgb(238, 238, 238);
    background-position: 50% center;
    background-repeat: no-repeat;
    cursor: pointer;

    &:hover Button{
        display: block;
        opacity: 1;
        /* transition: all 0.5s ease 0s; */
    }
`;

export default Banner;