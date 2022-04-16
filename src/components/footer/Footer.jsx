import React from "react";
import styled from "styled-components";
import Grid from "../../elements/Grid";

const Footer = (props) => {
  return (
    <>
      <IN width="1050px">
        <Inner display="flex" width="534px">
          <Position display="flex" width="160px" margin="20px">
            <div size="20px" margin="0px 0px 22px 0px">
              고객행복센터
            </div>
            <div bold size="28px">
              1644-1107
            </div>

            <Button>카카오톡 문의</Button>

            <Button>1:1 문의</Button>

            <Button>대량주문 문의</Button>
          </Position>

          <Inner display="flex">
            <CenterInfo>
              <li>365고객센터</li>
              <li>오전7시 - 오후7시</li>
              <li>365고객센터</li>
              <li>오전7시 - 오후7시</li>
              <li>24시간 접수 가능</li>
              <li>고객센터 운영시간에 순차적으로 답변해드리게습니다.</li>
              <li>{""}</li>
              <li>비회원의 경우 메일로 문의 바랍니다.</li>
            </CenterInfo>
          </Inner>
        </Inner>

        <Position width="516px">
          <KurlyMenu>
            <Spot>컬리소개</Spot>
            <Spot>컬리소개영상</Spot>
            <Spot>인재채용</Spot>
            <Spot>이용약관</Spot>
            <Spot>개인정보처리방침</Spot>
            <Spot>이용안내</Spot>
          </KurlyMenu>

          <KurlyInfo>
            <li>
              법인명 (상호): 주식회사 컬리 | 사업자등록번호:261-81-23567{" "}
              <span>사업자정보 확인</span>
            </li>
            <li>
              통신판매업:제2018-서울강남-01646 호 | 개인정보보호책임자:이원준
            </li>
            <li>
              주소:서울시 도산대로 16길 20,이래빌딩 B1~4F | 대표이사:김슬아
            </li>
            <li>
              입점문의:<span>입점문의하기</span> | 제휴문의:{" "}
              <span>business@kurlycorp.com</span>
            </li>
            <li>
              채용문의:<span>recruit@kurlycorp.com</span>
            </li>
            <li>
              팩스:070-7500-6098 | 이메일:<span>help@kurlycorp.com</span>
            </li>
            <li>ⓒ KURLY CORP.ALL REIGHTS RESERVED</li>
          </KurlyInfo>
        </Position>
      </IN>

      <IN width="1050px">
        <OutsideInfo>
          <Inner>
            <Img
              src="https://res.kurly.com/kurly/logo/isms_220310.png"
              alt="isms 로고"
              width="35px"
            />
            <div>
              [인증범위]마켓컬리 쇼핑몰 서비스 개발 · 운영
              <br />
              [유효기간]2022.01.19~2025.01.18
            </div>
          </Inner>

          <Inner>
            <Img
              src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"
              alt="eprivacy plus 로고"
              width="35px"
            />
            <div margin="0px 10px">
              개인정보보호 우수 웹사이트 ·<br />
              개인정보처리시스템인증 (ePRIVACY PLUS)
            </div>
          </Inner>

          <Inner>
            <Img
              src="https://res.kurly.com/pc/service/main/2009/logo_payments.png"
              alt="payments 로고"
              width="100px"
            />
            <div margin="0px 10px">
              고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
              가입한
              <br />
              토스 페이먼츠 구매안전(에스크로)서비스를 이용하실 수 있습니다.
            </div>
          </Inner>
        </OutsideInfo>
      </IN>
    </>
  );
};

export default Footer;

const Position = styled.div``;

const CenterInfo = styled.ul`
  font-size: 14px;
  margin: 25px 10px 0 10px;

  & li {
    list-style: none;
  }

  & li:nth-child(2n) {
    list-style: none;
    color: #999999;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }
`;

const KurlyMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 12px;
`;

const KurlyInfo = styled.ul`
  font-size: 12px;
  color: #999999;
  & li {
    margin-bottom: 5px;
    list-style: none;
    & span {
      color: #5f0080;
    }
  }
  & li:last-child {
    font-size: 10px;
    position: relative;
    top: 8px;
  }
`;

const OutsideInfo = styled.div`
  display: flex;
  box-sizing: border-box;
  border-top: 1px solid #eee;
  padding-top: 20px;
  font-size: 10px;
  color: #999999;
  gap: 0px 32px;
`;

const Button = styled.button`
  display: block;
  color: #fff;
  border-style: none;
  background-color: #5f0081;
  padding: 9px 0px;
  width: 140px;
  size: 14px;
  margin: 15px 0px;
  color: #333333;
  border: 1.5px solid #e3e3e3;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 600;
`;

const Inner = styled.div`
  display: flex;
`;

const Spot = styled.li`
  margin-left: 5px;
  list-style: none;
`;

const IN = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  margin: 100px auto;
  width: 80%;
  display: flex;
  margin-left: 300px;
`;

const Img = styled.img`
  margin-right: 5px;
  margin-bottom: 5px;
`;
