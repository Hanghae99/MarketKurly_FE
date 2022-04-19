import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

export const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));

export const addComment = createAction(ADD_COMMENT, (productId, comment) => ({
  productId,
  comment,
}));

export const editComment = createAction(
  EDIT_COMMENT,
  (commentId, newComment) => ({ commentId, newComment })
);

export const deleteComment = createAction(
  DELETE_COMMENT,
  (commentId, itemId) => ({
    commentId,
    itemId,
  })
);

//미들웨어
export const getCommentDB = (productId) => {
  const token = localStorage.getItem("token");
  return async function (dispatch, getState, { history }) {
    await axios
      .get(`http://54.180.156.74/api/detail/${productId}/comment`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(getComment(res.data));

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addCommentDB = (productId, commentValue) => {
  const token = localStorage.getItem("token");

  return async function (dispatch, getState, { history }) {
    await axios
      .post(`http://54.180.156.74/api/detail/13/comment`, commentValue, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(addComment(productId, res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCommentDB = (commentId) => {
  const token = localStorage.getItem("token");
  return async function (dispatch, getState, { history }) {
    await axios
      .delete(`http://54.180.156.74/api/detail/comment/${commentId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(deleteComment(commentId));
        window.alert("삭제가 완료되었어요!");
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const editCommentDB = (commentId) => {
  const token = localStorage.getItem("token");
  return async function (dispatch, getState, { history }) {
    await axios
      .delete(`http://54.180.156.74/api/detail/comment/${commentId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(deleteComment(commentId));
        window.alert("삭제가 완료되었어요!");
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

const initialComment = {
  commentList: [
    {
      userId: 1,
      commentId: 1,
      nickname: "쿼카아",
      comment: "맛살 무쌈 너무맛있어요!!!",
      createdAt: "2022-04-10",
    },
    {
      userId: 2,
      commentId: 2,
      nickname: "연재몬",
      comment: "댓글 테스트입니다아!",
      createdAt: "2022-04-11",
    },
    {
      userId: 3,
      commentId: 3,
      nickname: "배고파아",
      comment: "클론코딩 화이팅",
      createdAt: "2022-04-19",
    },
  ],
};

// Reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList = action.payload.comments;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList.unshift(action.payload.comment);
        console.log(state);
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("수정할거야");
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft.commentList);
      }),
  },
  initialComment
);
