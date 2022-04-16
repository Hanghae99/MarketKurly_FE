import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '../elements';


const Item = (props) => {
    const { imgUrl, brand, price, name } = props;
    return (
        <ItemContainer>
            <img
                src={imgUrl}
                // style={{padding: "0 9px"}}
                width="249px"
                height="320px"
                alt={brand}
            />
            <ItemInfoContainer>
                <h3 style={{marginBottom: "8px"}}>
                    <BrandName to="">  
                            {`[${brand}] ${name}`}
                    </BrandName>
                </h3>
                <Grid>
                    <Discount>10%</Discount>
                    <Price>8,140원</Price>
                </Grid>
                <PrePrice>{price}</PrePrice>
            </ItemInfoContainer>
        </ItemContainer>
    )
};

const ItemContainer = styled.div`
    padding: 0 9px;
    display: flex;
    flex-direction: column;
`;

const ItemInfoContainer = styled.div`
    padding: 14px 10px 0 0;
    text-align: left;
`;

const BrandName = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    line-height: 1.45;
    color: rgb(51, 51, 51);
    font-weight: 500;
    text-overflow: ellipsis;
`;

const Discount = styled.span`
    color: rgb(250, 98, 47);
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
    margin-right: 7px;
`;

const Price = styled.span`
    color: rgb(51, 51, 51);
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    white-space: nowrap;
`;

const PrePrice = styled.span`
    color: rgb(153, 153, 153);
    font-size: 14px;
    font-weight: 500;
    text-decoration: line-through;
    margin-top: 2px;
`;

export default Item;