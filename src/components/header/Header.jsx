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
                        <li className="menu1">
                            <span className='all-category'/>
                            전체 카테고리
                        </li>
                        <li className="menu2">신상품</li>
                        <li className="menu3">베스트</li>
                        <li className="menu4">알뜰쇼핑</li>
                        <li className="menu5">특가/혜택</li>
                    </GnbMenu>
                    <Grid position="relative">
                        <GnbInput placeholder='검색어를 입력해주세요.' />
                        <GnbInputClick
                            src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
                            width="30px"
                            height="30px"
                            alt="마켓컬리 검색창 돋보기"
                        />
                    </Grid>
                    <Icons className='location' /> 
                    <Icons className='pick' />
                    <Icons className='cart' />
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
	font-family: 'Noto Sans';
    & li{
		margin: 0px 0px 0px 24px;
		cursor: pointer;
		list-style: none;
        position: relative;
        line-height: 37px;

		&.menu:before{
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
    padding: 15px 0 0 0;
    justify-content: space-between;
    background-color: #ffffff;
    letter-spacing: -0.3px;
`;

const GnbMenu = styled.ul`
    display: flex;
    justify-content: space-between;
	font-size: 16px;
    color: #333;
    line-height: 20px;
    text-align: center;
    font-family: 'Noto Sans';
    & li{
        list-style: none;
        cursor: pointer;
        font-weight: 700;
        
        &:hover {
			color: #5f0081;
		}
        &.menu1{
            width: 148px;
        }
        &.menu2, &.menu4{
            width: 124px;
        }
        &.menu3, &.menu5{
            width: 116px;
        };
    };
    & span {
		content: url('https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png');
		position: relative;
		width: 16px;
        height: 14px;
        top: 1px;
        left: -16px;
	};
`;

const GnbInput = styled.input`
    width: 242px;
    height: 36px;
    padding: 0 60px 0 14px;
    border: 1px solid #f7f7f6;
    border-radius: 18px;
    background-color: #f7f7f7;
    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 12px;
    color: #666;
    line-height: 16px;
    outline: none;
    &::placeholder{
        letter-spacing: -.05em;
    };
`;

const GnbInputClick = styled.img`
    position: absolute;
    right: 5px;
    top: 3px;
    cursor: pointer;
`;

const Icons = styled.span`
    width: 36px;
	height: 36px;
    cursor: pointer;
    &.location{
        background: url("https://res.kurly.com/pc/ico/2008/ico_delivery_setting.svg?ver=1") no-repeat 50% 50%;
    };
    &.pick{
        background: url('https://res.kurly.com/pc/service/pick/btn-heart-off.svg') no-repeat 50% 50%;
    };
    &.cart{
        background: url('https://res.kurly.com/pc/service/common/2011/ico_cart.svg') no-repeat 50% 50%;
    };
`;

export default Header;