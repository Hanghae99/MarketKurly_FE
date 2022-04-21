import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { signUpDB } from "../../redux/modules/user";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const [formRegister, setFormRegister] = useState({
    username: "",
    password: "",
    nickname: "",
    address: "",
  });

  const { username, password, pwCheck, nickname, address } = formRegister;

  const onChangeFormRegister = (e) => {
    const { name, value } = e.target;

    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };
  // console.log(formRegister);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(usernameCheckDB(username));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !nickname || !password || !pwCheck || !address) {
      alert("빈칸을 모두 채워주세요.");
      return;
    }
    if (password !== pwCheck) {
      alert("패스워드가 서로 일치하지 않습니다.");
      return;
    }
    if (!isId(username)) {
      alert("아이디를 다시 입력해주세요");
      return;
    }

    if (!isPassword(password)) {
      alert("비밀번호를 다시 입력해주세요");
      return;
    }

    dispatch(signUpDB(formRegister));
  };

  function isId(username) {
    let regExp = /[a-zA-Z0-9]/;
    return regExp.test(username);
  }

  function isPassword(password) {
    let regExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return regExp.test(password); // 형식에 맞는 경우 true 리턴
  }

  const usernameCheckDB = (username) => {
    return async function (dispatch, getState, { history }) {
      axios
        .post(`http://54.180.156.74/api/user/dupliChk`, {
          username,
        })
        .then((res) => {
          if (res.data === "OK") {
            alert("사용가능한 아이디입니다!");
          } else if (res.data === "BAD_REQUEST")
            alert("이미 존재하는 아이디입니다");

          console.log(res);
        })
        .catch((err) => {
          window.alert(err.response);
        });
    };
  };

  return (
    <>
      <Wrap>
        <Title>회원가입</Title>
      </Wrap>

      <RegisterSection>
        <form>
          <Bar>
            <Red>*</Red>필수입력사항
          </Bar>

          <Table>
            <tr>
              <Content>
                <Id>
                  <Name>
                    아이디<Red>*</Red>
                  </Name>
                </Id>
                <Div>
                  <Input
                    type="text"
                    placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    name="username"
                    onChange={onChangeFormRegister}
                  />
                </Div>
                <Check>
                  <CheckBtn onClick={onClick}>중복확인</CheckBtn>
                </Check>
              </Content>
            </tr>

            <tr>
              <Content>
                <Id>
                  <Name>
                    비밀번호<Red>*</Red>
                  </Name>
                </Id>
                <Div>
                  <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    name="password"
                    onChange={onChangeFormRegister}
                  />
                </Div>
              </Content>
            </tr>

            <tr>
              <Content>
                <Id>
                  <Name>
                    비밀번호 확인<Red>*</Red>
                  </Name>
                </Id>
                <Div>
                  <Input
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                    name="pwCheck"
                    onChange={onChangeFormRegister}
                  />
                </Div>
              </Content>
            </tr>

            <tr>
              <Content>
                <Id>
                  <Name>
                    닉네임<Red>*</Red>
                  </Name>
                </Id>
                <Div>
                  <Input
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    name="nickname"
                    onChange={onChangeFormRegister}
                  />
                </Div>
              </Content>
            </tr>

            <tr>
              <Content>
                <Id>
                  <Name>
                    주소<Red>*</Red>
                  </Name>
                </Id>
                <Div>
                  <Input
                    type="text"
                    placeholder="주소를 입력해주세요"
                    name="address"
                    onChange={onChangeFormRegister}
                  />
                </Div>
              </Content>
            </tr>
          </Table>

          <Reg>
            <Register onClick={onSubmit}>가입하기</Register>
          </Reg>
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

const Div = styled.div`
  width: 640px;
  margin: 10px;
`;

const Check = styled.div`
  display: flex;
  margin-top: 10px;
`;

const CheckBtn = styled.button`
  color: #5f0081;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: white;
  cursor: pointer;
  height: 44px;
  width: 120px;
  font-weight: 500;
  font-size: 14px;
`;

const Register = styled.button`
  color: #fff;
  border-style: none;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  background-color: #5f0081;
  height: 54px;
  border-radius: 3px;
  text-align: center;
  width: 250px;
`;

const Reg = styled.div`
  text-align: center;
  margin-right: 40px;
`;

const Title = styled.h2`
  font-weight: 500;
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
  font-size: 12px;
  margin-left: 568px;
  color: #666;
`;

const Red = styled.span`
  color: tomato;
  margin-bottom: 10px;
`;

const Table = styled.div`
  width: 100%;
  border-top: 2px solid #333;
  padding-top: 10px;
  padding-bottom: 40px;
`;

const Name = styled.th`
  padding: 10px 0;
  width: 129px;
  padding: 20px 0 0 20px;
  font-weight: 500;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  vertical-align: top;
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  width: 159px;
  padding: 5px 0;
  font-weight: 700;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  /* vertical-align: top; */
  text-align: center;
  /* margin-right: 10px; */
`;

const Input = styled.input`
  width: 332px;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  /* line-height: 20px; */
  border-radius: 3px;
  background: #fff;
  outline: none;
  vertical-align: top;
`;

const Id = styled.div`
  display: flex;
`;
