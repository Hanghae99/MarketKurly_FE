import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Button } from "../../elements/index";

const Banner = (props) => {
    
    const settings = {
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <Button place="right" margin="0 0 0 590px"/>,
        prevArrow: <Button margin="0 0 0 -590px"/>,
    };
    
    return (
        <>
            <StyledSlider {...settings}>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/33729ca6-1a24-40d0-9f55-454c9955d267"
                        alt="메인 배너 1"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/fa8ecd2d-b420-4805-9d9a-d158caa7c8a4"
                        alt="메인 배너 2"
                        height="370px"
                        width=""
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/46b0eed9-0c77-4731-829b-f6f32727a2c3"
                        alt="메인 배너 3"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/2fc6b874-164b-41bc-9d09-e3fcf9e4c804"
                        alt="메인 배너 4"
                    >
                    </img>
                </div>
                <div>
                    <img 
                        src="https://img-cf.kurly.com/banner/main/pc/img/ea170c0a-7890-4f99-9c09-9cc7a3bacd74"
                        alt="메인 배너 5"
                    >
                    </img>
                </div>
            </StyledSlider>  
        </>
    );
};

const StyledSlider = styled(Slider)`
   //슬라이드 컨테이너 영역
   position: relative;
   height: 370px; 
   width: 100%;
   margin-bottom: 40px;
   overflow: hidden;

  .slick-list {  //슬라이드 스크린
    min-width: 1050px;
    max-width: 1900px;
    width: 100%;
    margin: 0 auto;
    background-size: cover;
    background-color: rgb(238, 238, 238);
    background-position: 50% center;
    background-repeat: no-repeat;
    /* &:hover Button{
        opacity: 0;
    } */ // 아직 잘 모르겠음,,
  }

  .slick-slide div { //슬라이더  컨텐츠
    cursor: pointer;
    outline: none;
  }
`;

export default Banner;