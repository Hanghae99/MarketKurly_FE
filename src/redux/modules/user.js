import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCartApi, loginCartPushApi } from "./cart";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

export const setUser = createAction(SET_USER, (user_info) => ({ user_info }));
export const logOut = createAction(LOG_OUT, () => ({}));

const initialState = {
  user_info: null,
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
        history.replace('/');
        localStorage.setItem("token", res.headers.authorization);
        dispatch(loginCheckDB());
        
        const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
        console.log(baskets);
        if(baskets.length>0){
          dispatch(loginCartPushApi());
        } else {
          dispatch(getCartApi());
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    await axios
      .get(
        `http://54.180.156.74/api/user/loginCheck`,

        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(
          setUser({
            username: res.data.username,
            address: res.data.address,
            nickname: res.data.nickname,
          })
        );
      })
      .catch((err) => {
        window.alert("에러!!");
        console.log(err);
      });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user_info = action.payload.user_info;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user_info = null;
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
