import React from "react";
import styled from "styled-components";

const Image = (props) => {
    
    const {
        src,
        width,
        height,
    }
    = props;
    
    const style = {
        width,
        height,
    }
    
    
    return(
        <ImageInner src={src} {...style}/>
    )
}

Image.defaultProps = {
    src: "",
    width: "100%",
    height: "auto",
}

const ImageInner = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default Image;