import React from "react";
import styled from "styled-components";
import { Grid } from "../../elements";

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
                    엑스트라버진 500ml
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

const Div = styled.div`
  display: flex;
`;

// const Icon = styled.img`
//   display: flex;
//   margin-left: 120px;
//   cursor: pointer;
// `;

const Wrapper = styled.div`
  display: flex;
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
  width: 430px;
  height: 552px;
`;

const P = styled.p`
  display: block;
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
  display: flex;
  position: fixed;
`;

const Strong = styled.p`
  /* background-color: blanchedalmond; */
  font-weight: 500;
  font-size: 24px;
  color: #333;
`;

const InfoSection = styled.section`
  padding: 0 0 29px 0;
`;

const Wrap = styled.div`
  position: fixed;
  margin-left: 40px;
`;

const Fix = styled.div`
  display: block;
  padding: 10px;
`;

const SaleText = styled.p`
  width: 560px;
  padding-right: 21px;
  font-size: 14px;
  color: #333;
`;

const Content = styled.div`
  display: block;
  padding: 4px 60px 0 0;
  font-size: 14px;
  color: #999;
`;
