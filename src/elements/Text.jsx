import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
    const { 
        size,
        bold,
        color,
        lineHeight,
        letterSpacing,
        text,
        padding,
        margin,
    } = props;

    const styles = {
        size,
        bold,
        color,
        lineHeight,
        letterSpacing,
        padding,
        margin,
    }
    return (
        <ElText 
            {...styles}
            value={text}
        >
            {text ? text : ""}
        </ElText>
    );
};

Text.defaultProps = {
    size: "14px",
    bold: "normal",
    color: "#333",
    lineHeight: false,
    letterSpacing: "normal",
    padding: false,
    margin: false,
}

const ElText = styled.div`
    font-size: ${props => props.size};
    font-weight: ${props => props.bold};
    color: ${props => props.color};
    line-height: ${props => props.lineHeight};
    letter-spacing: ${props => props.letterSpacing};
    padding: ${props => props.padding};
    margin: ${props => props.margin}
`;
        
export default Text;