import React from 'react';
import styled from 'styled-components';
import Grid from '../../elements/Grid';

const Header = (props) => {

    return(
        <>
            <Grid width="1050px" margin="0 auto">
                <HeaderWrap>
                    <img
                        style={{ cursor: 'pointer' }}
                        src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png"
                        width="121px"
                        height="22px"
                        alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송"
                    />
                    <HeaderMenu>
                        <li className="menu signup">회원가입</li>
                        <li className="menu">로그인</li>
                        <li >고객센터</li>
                    </HeaderMenu>
                </HeaderWrap>

                <Grid height="63px" position="relative">
                    <Logo>
                        <h1>
                            <img
                                style={{ cursor: 'pointer' }}
                                src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png"
                                width="103px"
                                height="79px"
                                alt="마켓컬리 로고"
                            />
                        </h1>
                    </Logo>
                </Grid>

                <Gnb>
                    <GnbMenu>
                        <li>전체 카테고리</li>
                        <li>신상품</li>
                        <li>베스트</li>
                        <li>알뜰쇼핑</li>
                        <li>특가/혜택</li>
                    </GnbMenu>
                </Gnb>
            </Grid>
        </>
    );
};

const HeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    letter-spacing: -0.3px;
`;

const HeaderMenu = styled.ul`
	display: flex;
	font-size: 12px;
	
    & li {
		margin: 0px 0px 0px 24px;
		cursor: pointer;
		list-style: none;
        position: relative;
        line-height: 37px;

		&.menu:before {
            content: "";
            float: right;
            width: 1px;
            height: 13px;
            position: relative;
			top: 12px;
			left: 12px;   
            background-color: #d8d8d8;
		};
        
        &.signup{
            color: #5f0080;
        };
	};  
`;

const Logo = styled.div`
    position: absolute;
    bottom: 6px;
    text-align: center;
    width: 100%;
`;

const Gnb = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    letter-spacing: -0.3px;
`;

const GnbMenu = styled.ul`
    display: flex;
	font-size: 16px;
    color: #333;
    line-height: 20px;
    text-align: center;

`;

export default Header;