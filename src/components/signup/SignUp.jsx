import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import styled from "styled-components";

const SignUp = (props) => {
  const [formRegister, setFormRegister] = useState({
    username: "",
    idDup: false,
    password: "",
    pwCheck: "",
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
  console.log(formRegister);

  const onSubmit = (e) => {
    e.preventDefault();
    signUpClick();

    console.log("회원가입할래!");
  };

  const signUpClick = () => {
    if (!username || !nickname || !password || !pwCheck || !address) {
      alert("빈칸을 모두 채워주세요.");
      return;
    }
    if (password !== pwCheck) {
      alert("패스워드가 서로 일치하지 않습니다.");
      return;
    }

    // else {
    //  dispatch(userActions.signUpApi(formInput));
    // }
  };

  function isId(username) {
    let regExp = /^[a-z]+[a-z0-9]{5,19}$/g;

    return regExp.test(username);
  }

  function isPassword(password) {
    let regExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    return regExp.test(password); // 형식에 맞는 경우 true 리턴
  }

  // const dispatch = useDispatch();

  // const idcheckAPI = (username) => {
  //   api
  //     .post("api/user/dupliChk", {
  //       username,
  //     })
  //     .then((res) => {
  //       setIdDup(true);
  //       console.log(res);
  //       window.alert(res);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //       window.alert(err.response);
  //     });
  // };

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
                  {/* <CheckBtn onClick={() => idcheckAPI(id)}>중복확인</CheckBtn> */}
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

// const CheckBtn = styled.button`
//   color: #5f0081;
//   border-radius: 3px;
//   border: 1px solid #5f0081;
//   background-color: white;
//   cursor: pointer;
//   height: 44px;
//   width: 120px;
//   font-weight: 500;
//   font-size: 14px;
// `;

const Register = styled.button`
  color: #fff;
  border-style: none;
  background-color: #5f0081;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  line-height: 54px;
`;

const Reg = styled.div`
  width: 240px;
  height: 56px;
  border-radius: 3px;
  text-align: center;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  margin-left: 230px;
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
