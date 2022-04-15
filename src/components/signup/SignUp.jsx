import React from "react";
import styled from "styled-components";

const SignUp = (props) => {
  return (
    <>
      <Wrap>
        <Title>회원가입</Title>
      </Wrap>

      <RegisterSection>
        <form method="post">
          <Bar>
            <Red>*</Red>필수입력사항
          </Bar>

          <Table>
            <tr>
              <Name>아이디</Name>
              <Content>
                <Input type="text" />
                <button>중복확인</button>
              </Content>
            </tr>

            <tr>
              <Name>비밀번호</Name>
              <Content>
                <Input type="text" />
              </Content>
            </tr>

            <tr>
              <Name>비밀번호확인</Name>
              <Content>
                <Input type="text" />
              </Content>
            </tr>

            <tr>
              <Name>닉네임</Name>
              <Content>
                <Input type="text" />
              </Content>
            </tr>

            <tr>
              <Name>주소</Name>
              <Content>
                <Input type="text" />
                <button>입력완료</button>
              </Content>
            </tr>
          </Table>

          <div>
            <Button type="button">가입하기</Button>
          </div>
        </form>
      </RegisterSection>
    </>
  );
};

export default SignUp;

const RegisterSection = styled.div`
  width: 640px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  color: #333;
  line-height: 35px;
  text-align: center;
  letter-spacing: -1px;
`;

const Wrap = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 50px 0 51px;
`;

const Bar = styled.span`
  padding-bottom: 10px;
  font-size: 12px;
  color: #666;
  line-height: 17px;
  text-align: right;
`;

const Red = styled.span`
  color: tomato;
  padding-right: 2px;
`;

const Table = styled.tbody`
  width: 100%;
  border-top: 2px solid #333;
  /* background-color: tomato; */
`;

const Name = styled.th`
  padding-top: 29px;
  width: 159px;
  padding: 20px 0 0 20px;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  text-align: left;
`;

const Content = styled.td`
  padding-top: 29px;
  width: 159px;
  padding: 20px 0 0 20px;
  font-weight: 700;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  text-align: left;
`;

const Input = styled.input`
  width: 332px;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  border-radius: 3px;
  background: #fff;
  outline: none;
  vertical-align: top;
`;

const Button = styled.button`
  width: 240px;
  height: 56px;
  font-size: 16px;
  line-height: 54px;
  border: 1px solid #5f0081;
  color: #fff;
`;
