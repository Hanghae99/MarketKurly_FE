import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";

const Signup = createAction(SIGN_UP, (userInfo) => ({ userInfo }));
const logIn = createAction(LOGIN, (userInfo) => ({ userInfo }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// const token = localStorage.getItem("token");

const initialState = {
  userInfo: {
    username: "",
    name: "",
  },
  is_login: false,
};

//middleware actions

const signUpDB = (username, password, nickname, address) => {
  return async function (dispatch, getState, { history }) {
    const data = {
      username,
      password,
      nickname,
      address,
    };
  };
};

const logInDB = (username, password) => {
  return async function (dispatch, getState, { history }) {
    const data = {
      username,
      password,
    };
  };
};

const usernameCheckDB = (username) => {
  return async function (dispatch, getState, { history }) {};
};

//isLogin
// const isLogin = () => {
//   return function (dispatch, getState, { history }) {
//     const token = localStorage.getItem("token");
//     const username = localStorage.getItem("username");

//     // 토큰이 없거나 유저아이디가 없거나 둘 중 하나면 로그인이 아님
//     if (!token || !username) {
//       dispatch(logout());
//     }
//     console.log(token);
//     console.log(username);
//     dispatch();
//     // 어딘가에서 setUser 를 위한 정보를 가지고 와야 함. 토큰에 이 정보 있는지 확인 필요
//     // setUser({ username })
//   };
// };

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
    [SIGN_UP]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
        draft.is_login = true;
      }),

    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("token");
        draft.userInfo = {
          username: "",
          name: "",
        };
        draft.is_login = false;
        console.log("로그아웃합니다");
      }),
  },
  initialState
);

const actionCreators = {
  logIn,
  logout,
  Signup,
  logOut,
  signUpDB,
  usernameCheckDB,
  logInDB,
};

export { actionCreators };
