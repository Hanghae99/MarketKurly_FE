import React from "react";
import styled from "styled-components";

const Write = () => {
  return (
    <>
      <Section>
        <div>
          <div>
            <Tit>후기 작성</Tit>
            <Border />
            <Imgurl>
              <img
                style={{
                  width: "200px",
                  height: "250px",
                  margin: "30px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
                src="https://www.montshop.com/data/goods/22/01/03/1000000235/1000000235_detail_016.jpg"
                alt="리뷰이미지"
              />
            </Imgurl>
            <div>
              <Name>[Kurly's] 수세미 2종 (2개입)</Name>
            </div>
          </div>
        </div>
      </Section>

      <BorderLine />

      <Section>
        <div>
          <Box>
            <span>제목</span>
          </Box>

          <InputBox>
            <Input type="text" placeholder="제목을 입력해주세요 " />
          </InputBox>
        </div>
        <BorderLine />
        <div>
          <Box>
            <span>후기작성</span>
          </Box>

          <InputBox>
            <Input
              type="text"
              placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 됩니다."
            />
          </InputBox>
        </div>
      </Section>
    </>
  );
};

export default Write;

const Section = styled.section`
  width: 1000px;
  margin: 10px auto;
  padding: 20px;
  display: flex;
`;

const Tit = styled.h2`
  font-weight: 500;
  color: #333;
  display: flex;
`;

const Input = styled.input`
  border: none;
  width: 400px;
  height: 40px;
  display: flex;
  border: 1px solid gray;
  padding: 10px;
`;

const InputBox = styled.div``;

const Box = styled.div`
  display: flex;
  background-color: #e2e2e2;
  width: 200px;
  height: 50px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

const Border = styled.div`
  border-bottom: 2px solid #5f0080;
  padding: 10px;
  width: 900px;
  display: flex;
`;

const BorderLine = styled.div`
  border-bottom: 1px solid #e2e2e2;
  width: 1000px;
  padding: 20px;
  display: flex;
  margin: 10px auto;
`;

const Name = styled.span`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 200px;
`;

const Imgurl = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 300px;
`;
