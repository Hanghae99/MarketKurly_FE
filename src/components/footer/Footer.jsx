import React from "react";
import styled from "styled-components";
import { Grid } from "../../elements";

const Footer = (props) => {
  return (
    <>
      <Bar />
      <Grid flex justify="center" column="column">
      <Container>
        <Section>
          <div>
            <h2
              style={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#333",
              }}
            >
              고객행복센터
            </h2>
            <h1
              style={{
                fontWeight: "700",
                fontSize: "28px",
                color: "#333",
                marinTop: "15px",
                paddingTop: "20px",
              }}
            >
              1644-1107
            </h1>

            <Button>카카오톡 문의</Button>
            <Button>1:1 문의</Button>
            <Button>대량주문 문의</Button>
          </div>

          <Section>
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
          </Section>
        </Section>

        <Wrap>
          <Menu>
            <List>컬리소개</List>
            <List>컬리소개영상</List>
            <List>인재채용</List>
            <List>이용약관</List>
            <List>개인정보처리방침</List>
            <List>이용안내</List>
          </Menu>

          <div style={{ margin: "30px 0 0 10px" }}>
            <KurlyInfo>
              <li>
                법인명 (상호): 주식회사 컬리 | 사업자등록번호:261-81-23567{" "}
                <span>사업자정보 확인</span>
              </li>
              <li>
                통신판매업:제2018-서울강남-01646 호 | 개인정보보호책임자:이원준
              </li>
              <li>
                주소:서울특별시 강남구 테헤란로113, 18층(역삼동) |
                대표이사:김슬아
              </li>
              <li>
                입점문의:<span>입점문의하기</span> | 마케팅제휴:{" "}
                <span>business@kurlycorp.com</span>
              </li>
              <li>
                채용문의:<span>recruit@kurlycorp.com</span>
              </li>
              <li>
                팩스:070-7500-6098 | 이메일:<span>help@kurlycorp.com</span>
              </li>
              <li>
                대량주문 문의 : <span>kurlygift@kurlycorp.com</span>
              </li>
            </KurlyInfo>

            <KurlyIcon>
              <Img
                src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
                alt="isms 로고"
                width="35px"
              />
              <Img
                src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
                alt="isms 로고"
                width="35px"
              />
              <Img
                src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
                alt="마켓컬리 네이버블로그 바로가기"
                width="35px"
              />
              <Img
                src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
                alt="isms 로고"
                width="35px"
              />
              <Img
                src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
                alt="마켓컬리 유튜브 바로가기"
                width="35px"
              />
            </KurlyIcon>
          </div>
        </Wrap>
      </Container>

      <Container>
        <OutsideInfo>
          <Section>
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
          </Section>

          <Section>
            <Img
              src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"
              alt="eprivacy plus 로고"
              width="35px"
            />
            <div margin="0px 10px">
              개인정보보호 우수 웹사이트 ·<br />
              개인정보처리시스템인증 (ePRIVACY PLUS)
            </div>
          </Section>

          <Section>
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
          </Section>
        </OutsideInfo>
      </Container>
      </Grid>
    </>
  );
};

export default Footer;

const Wrap = styled.div`
  margin-left: 30px;
`;

const KurlyIcon = styled.ul`
  margin-top: 40px;
`;

const Bar = styled.span`
  border-top: 0.2px solid gray;
  opacity: 20%;
  margin-top: 60px;
  display: block;
`;

const CenterInfo = styled.ul`
  font-size: 14px;
  margin: 30px 0 0 20px;

  & li:nth-child(2n-1) {
    list-style: none;
    margin-top: 20px;
  }

  & li:nth-child(2n) {
    list-style: none;
    color: #999999;
    display: flex;
    flex-direction: column;
  }
`;

const Menu = styled.ul`
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
  margin: 20px 0px;
  color: #333333;
  border: 1px solid #e3e3e3;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;
`;

const Section = styled.div`
  display: flex;
`;

const List = styled.li`
  margin-left: 10px;
  list-style: none;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  padding-top: 30px;
  width: 80%;
  display: flex;
  width: 1050px;
  letter-spacing: -0.2px;
`;

const Img = styled.img`
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;
