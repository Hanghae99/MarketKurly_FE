import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_USER = "SET_USER";
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";

const token = localStorage.getItem("token");

const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

// middleware

//1. 회원가입
const signUpDB = (username, password, nickname, address) => {
  return async function (dispatch, getState, { history }) {
    console.log("아이디", username);
    console.log("닉네임", nickname);
    console.log("비밀번호", password);
    console.log("이메일", address);

    const data = {
      username,
      password,
      nickname,
      address,
    };

    // api
    //       .post("api/user/signup", {data})
    //       .then((res) => {
    //         console.log(res);
    //         window.alert("회원가입이 완료되었습니다.");
    //
    //         history.push("/login");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
  };
};

//2. 로그인
const logInDB = (username, password) => {
  return async function (dispatch, getState, { history }) {
    const data = {
      username,
      password,
    };

    // api
    //       .post("/user/login", {data})
    //       .then(res => {
    //          console.log(res);
    //          localStorage.setItem('token', res.data.token);
    //          const base64Payload = res.data.token.split('.')[1];  => 토큰을 .을 기준으로 split 하고 1번째 값을 불러온다.(payload 에 유저 정보가 담겨있으므로 가져오는 것)
    //          const payload = Buffer.from(base64Payload, 'base64'); => base64payload 를 디코드 하여 buffer 형태의 payload 만들어줌
    //          const result = JSON.parse(payload.toString()); => JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
    //          localStorage.setItem('userInfo', result.userId); => 로컬스토리지에 userId 저장
    //          dispatch(
    //           	setUser({
    // 	        	  name: result.userId,
    // 	          }),
    //          );
    //          history.push('/');
    //        })
    //       .catch((err) => {
    //         console.log(err);
    //       });
  };
};

const usernameCheckDB = (username) => {
  return async function (dispatch, getState, { history }) {};
};

const loginCheckDB = (username) => {
  return async function (dispatch, getState, { history }) {};
};

const logout = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(logOut());
    history.replace("/");
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload.username;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.username = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  logout,
  setUser,
  logOut,
  signUpDB,
  usernameCheckDB,
  loginCheckDB,
  logInDB,
};

export { actionCreators };
