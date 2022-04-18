import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { actionCreators } from "../../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const onChangeFormValue = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  // console.log(formValue);

  const onSubmit = (e) => {
    e.preventDefault();
    login();
    dispatch(actionCreators.logInDB(formValue));

    console.log("로그인할래!");
  };

  const login = () => {
    if (formValue.username === "" || formValue.password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
  };

  return (
    <>
      <LoginSection>
        <Title>로그인</Title>

        <Form>
          <UserName
            type="text"
            placeholder="아이디를 입력해주세요"
            name="username"
            onChange={onChangeFormValue}
          />
          <PassWord
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={onChangeFormValue}
          />

          <CheckContainer>
            <Wrap>
              <InputCheck type="checkbox" />
              <Text>보안접속</Text>
            </Wrap>
            <Search>
              <FindUser>아이디찾기</FindUser>
              <Bar></Bar>
              <FindUser>비밀번호 찾기</FindUser>
            </Search>
          </CheckContainer>

          <LogIn>
            <LoginBtn onClick={onSubmit}>로그인</LoginBtn>
          </LogIn>

          <SignUp>
            <SignBtn>회원가입</SignBtn>
          </SignUp>
        </Form>
      </LoginSection>
    </>
  );
};

export default Login;

const LoginSection = styled.div`
  width: 340px;
  margin: 0 auto;
  padding-top: 90px;
  letter-spacing: -0.6px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
`;

const Form = styled.div`
  padding-top: 36px;
  text-align: center;
`;

const UserName = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 19px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
  outline: none;
`;

const PassWord = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 19px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
  outline: none;
  margin-top: 10px;
`;

const CheckContainer = styled.div`
  overflow: hidden;
  padding-bottom: 26px;
`;

const Wrap = styled.div`
  float: left;
  margin-top: 9px;
`;

const InputCheck = styled.input`
  margin-right: 3px;
  margin-top: 3px;
  display: inline-block;
  width: 18px;
  height: 14px;
  border: 1px solid #bcbcbc;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 15px;
`;

const Search = styled.div`
  float: right;
  padding-top: 13px;
`;

const FindUser = styled.p`
  float: left;
  font-size: 13px;
  background-color: transparent;
  text-decoration: none;
  color: black;
`;

const Bar = styled.span`
  float: left;
  width: 1px;
  height: 10px;
  margin: 3px 6px 0;
  background-color: #333;
`;

const LogIn = styled.div`
  display: block;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  font-size: 0;
  text-align: center;
  border: 1px solid #5f0081;
  background-color: #5f0080;
`;

const LoginBtn = styled.button`
  color: #fff;
  border-style: none;
  background-color: #5f0081;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const SignUp = styled.div`
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #5f0081;
  width: 100%;
  display: block;
  height: 54px;
  border-radius: 3px;
  font-size: 0;
  text-align: center;
  cursor: pointer;
`;

const SignBtn = styled.button`
  color: #5f0081;
  border-style: none;
  background-color: white;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
`;
