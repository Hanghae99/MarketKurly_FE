import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_USER = "SET_USER";
const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
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
    //       .post("/user/signup", {data})
    //       .then((res) => {
    //         console.log(res);
    //         window.alert("회원가입이 완료되었습니다. 로그인해주세요!");
    //
    //         history.push("/login");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
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
        draft.user = action.payload.userInfo;
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
  setUser,
  logOut,
  signUpDB,
  usernameCheckDB,
  logInDB,
};

export { actionCreators };
