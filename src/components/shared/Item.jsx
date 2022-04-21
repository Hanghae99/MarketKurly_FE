import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from '../../elements/index';
import CartBtn from '../modal/CartBtn';
import { useDispatch } from 'react-redux';
import { actionCreators as productActions } from '../../redux/modules/product';
const Item = (props) => {
    const dispatch = useDispatch();
    const { imgUrl, brand, price, name, id } = props;
    const locale_price = price.toLocaleString('ko-KR');

    const goDetail = () => {
        dispatch(productActions.getOneProductApi(id));
    };

    return (
        <ItemContainer>
            <ItemImageWrap>
                <ItemImage
                    onClick={goDetail}
                    src={imgUrl}
                    alt={brand}
                />
                <CartBtn list={props}/>
            </ItemImageWrap>
            <ItemInfoContainer>
                <h3 style={{marginBottom: "8px"}}>
                    <BrandName to="#" onClick={goDetail}>  
                        {brand 
                            ? `[${brand}] ${name}`
                            : `${name}`}
                    </BrandName>
                </h3>
                <Grid>
                    <Price>{locale_price}원</Price>
                </Grid>
            </ItemInfoContainer>
        </ItemContainer>
    )
};

const ItemContainer = styled.div`
    padding: 25px 18px 0 0;
    display: flex;
    flex-direction: column;
    height: 650px;
    width: 356px;
`;

const ItemImageWrap = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 338px;
    height: 435px;
`;

const ItemImage = styled.img`
    width: 100%;
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
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: normal;
    max-height: 58px;
    font-size: 20px;
    color: #333;
    line-height: 29px;
`;

const Price = styled.span`
    color: rgb(51, 51, 51);
    font-size: 18px;
    font-weight: bold;
    line-height: 29px;
    white-space: nowrap;
`;

export default Item;