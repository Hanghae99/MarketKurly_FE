import { nodeName } from 'jquery';
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
        width,
        textAlign,
        borderB,
    } = props;

    const styles = {
        size,
        bold,
        color,
        lineHeight,
        letterSpacing,
        padding,
        margin,
        width,
        textAlign,
        borderB,
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
    lineHeight: "initial",
    letterSpacing: "normal",
    padding: false,
    margin: false,
    width: "100%",
    textAlign: "auto",
    borderB: "none",
}

const ElText = styled.div`
    font-size: ${props => props.size};
    font-weight: ${props => props.bold};
    color: ${props => props.color};
    line-height: ${props => props.lineHeight};
    letter-spacing: ${props => props.letterSpacing};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    width: ${props => props.width};
    text-align: ${props => props.textAlign};
    border-bottom: ${props => props.borderB};
    user-select: none;
`;
        
export default Text;