import React from "react";
import styled from "styled-components";
import { Grid } from "../../elements";
import NumBtn from "./NumBtn";

const Detail = () => {
  return (
    <>
      <Section>
        <Div>
          <Img>
            <ImgSrc
              src="https://www.montshop.com/data/goods/22/01/03/1000000235/1000000235_detail_016.jpg"
              alt=""
            />
          </Img>

          <Fix>
            <Wrap>
              <InfoSection>
                <Wrapper>
                  <Strong>
                    <span>[마이올리브트리]</span>
                    엑스트라버진 500ml엑스트라버진
                  </Strong>
                  {/* <Icon
                  src="https://res.kurly.com/mobile/service/goodsview/1910/ico_view_sns.png"
                  alt=""
                /> */}
                </Wrapper>
                <Content>[그리스 햇올리브]2021년 가을 수확한 햇올리브</Content>
              </InfoSection>

              <div>
                <Price>
                  <Num>
                    39,600 <Won>원</Won>
                  </Num>
                  {/* <Percent>40%</Percent> */}
                </Price>

                {/* <p>66,000원</p> */}
                <P>로그인 후, 회원할인가와 적립혜택이 제공됩니다.</P>
              </div>

              <Border />
              <Tit>안내사항</Tit>
              <Con> - 2020년부터 패키지가 변경되었습니다.</Con>
              <Border />
              <Tit>구매수량</Tit>
              <NumBtn />
              <Border />

              <Order>
                <DivO>
                  <Total>총 상품금액:</Total> <Bold>3,800</Bold>원
                </DivO>
                <Point>
                  <IconPoint>적립</IconPoint>로그인 후,회원할인가와 적립혜택
                  적용
                </Point>
              </Order>
            </Wrap>
          </Fix>
        </Div>
      </Section>
    </>
  );
};

export default Detail;

const Section = styled.section`
  width: 1050px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
`;

const IconPoint = styled.div`
  display: inline-block;
  width: 38px;
  height: 20px;
  margin-right: 2px;
  border-radius: 10px;
  background-color: #ffbf00;
  font-weight: 700;
  font-size: 11px;
  color: #fff;
  line-height: 20px;
  text-align: center;
`;

const Total = styled.div`
  font-weight: 700;
  font-size: 15px;
  display: flex;
`;

const Point = styled.span`
  font-size: 15px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Bold = styled.span`
  font-weight: 900;
  font-size: 30px;
  line-height: 20px;
  vertical-align: 2px;
  display: flex;
  color: #333;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Div = styled.div`
  padding: 30px 0 20px;
  border-top: 1px solid #f4f4f4;
  color: #333;
  letter-spacing: 0;
  display: flex;
`;

const DivO = styled.div`
  padding: 30px 0 20px;
  color: #333;
  letter-spacing: 0;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Order = styled.div`
  justify-content: right;
  align-items: right;
`;

const Tit = styled.span`
  width: 128px;
  font-size: 14px;
  color: #666;
  line-height: 20px;
`;

const Con = styled.span`
  color: #333;
  letter-spacing: -0.5px;
  font-size: 15px;
  margin-left: 40px;
`;

const Border = styled.div`
  border-top: 0.2px solid gray;
  opacity: 20%;
  margin-top: 30px;
  margin-bottom: 20px;
`;

// const Icon = styled.img`
//   display: flex;
//   margin-left: 120px;
//   cursor: pointer;
// `;

const Wrapper = styled.div`
  /* display: flex; */
`;

const Price = styled.div`
  width: 560px;
`;

const Num = styled.span`
  font-weight: 500;
  font-size: 30px;
  color: #333;
`;

const Won = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

// const Percent = styled.span`
//   font-weight: 500;
//   font-size: 30px;
//   padding-left: 10px;
//   color: #fa622f;
// `;

const Img = styled.div`
  padding: 0 40px 0 0;
  display: flex;
  width: 430px;
  height: 552px;
`;

const P = styled.p`
  /* display: block; */
  padding-top: 7px;
  font-size: 14px;
  color: #5f0080;
  line-height: 20px;
  letter-spacing: 0;
`;

const ImgSrc = styled.img`
  width: 430px;
  height: 552px;
  max-width: 100%;
  /* display: flex; */
  /* position: fixed; */
`;

const Strong = styled.p`
  /* background-color: blanchedalmond; */
  /* display: flex; */
  font-weight: 500;
  font-size: 24px;
  color: #333;
`;

const InfoSection = styled.section`
  padding: 0 0 29px 0;
`;

const Wrap = styled.div`
  margin-left: 40px;
`;

const Fix = styled.div`
  /* display: block; */
  padding: 10px;
`;

// const SaleText = styled.p`
//   width: 560px;
//   padding-right: 21px;
//   font-size: 14px;
//   color: #333;
// `;

const Content = styled.div`
  /* display: block; */
  padding: 4px 60px 0 0;
  font-size: 14px;
  color: #999;
`;
