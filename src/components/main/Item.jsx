import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '../../elements/index';

const Item = (props) => {
    const { imgUrl, brand, price, name, sale_rate, sale_price } = props;
    
    return (
        <ItemContainer>
            <ItemImageWrap>
                <ItemImage
                    src={imgUrl}
                    alt={brand}
                />
            </ItemImageWrap>
            <ItemInfoContainer>
                <h3 style={{marginBottom: "8px"}}>
                    <BrandName to="">  
                        {brand 
                            ? `[${brand}] ${name}`
                            : `${name}`}
                    </BrandName>
                </h3>
                <Grid>
                    {sale_rate && <Discount>{sale_rate}</Discount>}
                    <Price>{price}</Price>
                </Grid>
                {sale_price && <PrePrice>{sale_price}</PrePrice>}
            </ItemInfoContainer>
        </ItemContainer>
    )
};

const ItemContainer = styled.div`
    padding: 0 9px;
    display: flex;
    flex-direction: column;
`;

const ItemImageWrap = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 249px;
    height: 320px;
`;

const ItemImage = styled.img`
    width: 249px;
    height: 320px;
    transform: scale(1);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
        transform:scale(1.05);
    }
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