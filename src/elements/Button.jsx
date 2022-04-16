import React from "react";
import styled from 'styled-components';

const Button = (props) => {
    const {
        place,
        margin,
    } = props;
    
    const styles = {
        place,
        margin,
    }
    return (
        <>
            <BannerBtn {...styles} />
        </>
    );
};

Button.defaultProps = {
    place: null,
    margin: false,
}

const BannerBtn = styled.button`
    position: absolute;
    z-index: 100;
    width: 52px;
    height: 52px;
    border: none;
    outline: none;
    transform: translate(-50%, -50%);
    cursor: pointer;
    /* opacity: 0; */
    transition: all 0.5s ease 0s;
    top: 50%;
    margin: ${props => props.margin};
    ${props => props.place === 'right'
        ? "background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_right_52_52.svg') 50% 50% no-repeat;"
        : "background: url('https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/arrow_banner_left_52_52.svg') 50% 50% no-repeat;"
    }
`;









export default Button;
