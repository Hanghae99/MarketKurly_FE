import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action
const SET_MODAL = "SET_USER";

// actionCreator
export const setModal = createAction(SET_MODAL, (is_open) => ({is_open}));

// initialState
const initialState = {
  is_open: false,
};

// reducer
export default handleActions(
  {
    [SET_MODAL]: (state, action) =>
      produce(state, (draft) => {
        draft.is_open = action.payload.is_open;
      }),
  },
  initialState
);
