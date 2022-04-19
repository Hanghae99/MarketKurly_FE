import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action
const SET_MODAL = "SET_MODAL";
const SET_COUNT = "SET_COUNT";
const SET_ALERTT_MODAL = "SET_ALERTT_MODAL"; 

// actionCreator
export const setModal = createAction(SET_MODAL, (is_open, product_list) => ({is_open, product_list}));
export const setCount = createAction(SET_COUNT, (count) => ({count}));
export const setAlertModal = createAction(SET_ALERTT_MODAL, (is_open) => ({is_open}));

// initialState
const initialState = {
  is_open: false,
  alert_open: false,
  list: [
    {
      id: null,
      brand: "",
      name: "",
      imgUrl: "",
      price: null,
      quantity: 0,
      sum: 0,
    }
  ],
};

// reducer
export default handleActions(
  {
    [SET_MODAL]: (state, action) =>
      produce(state, (draft) => {
        draft.is_open = action.payload.is_open;
        draft.list = action.payload.product_list;
      }),
    [SET_COUNT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.quantity = action.payload.count;
        draft.list.sum = draft.list.price * action.payload.count;
      }),
    [SET_ALERTT_MODAL]: (state, action) =>
      produce(state, (draft) => {
        draft.alert_open = action.payload.is_open;
      }),
  },
  initialState
);
