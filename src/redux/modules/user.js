import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const token = localStorage.getItem("token");

export const setUser = createAction(SET_USER, (user) => ({ user }));
export const logOut = createAction(LOG_OUT, () => ({}));

const initialState = {
  username: null,
  address: null,
  nickname: null,
  is_login: false,
};

// middleware
//1. 회원가입
export const signUpDB = (formRegister) => {
  return async function (dispatch, getState, { history }) {
    await axios
      .post(`http://54.180.156.74/api/user/signup`, formRegister)
      .then((res) => {
        console.log(res);
        window.alert("회원가입이 완료되었습니다.");
        history.push("/login");
      })
      .catch((err) => {
        window.alert("에러!!");
        console.log(err);
      });
  };
};

//2. 로그인
export const logInDB = (formValue) => {
  return async function (dispatch, getState, { history }) {
    await axios
      .post(`http://54.180.156.74/user/login`, formValue)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.headers.authorization);

        dispatch(
          setUser({
            username: res.data.username,
            address: null,

            is_login: true,
          })
        );
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//
export const loginCheckDB = (username) => {
  return async function (dispatch, getState, { history }) {
    //유저정보 요청
  };
};

export const isLogin = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.username = "";
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  setUser,
  logOut,
  signUpDB,
  loginCheckDB,
  logInDB,
};

export { actionCreators };
