import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action
const SET_CART = "SET_CART";
const SET_COUNT = "SET_COUNT";

// actionCreator
export const setCart = createAction(SET_CART, (cart_list) => ({cart_list}));
export const setCount = createAction(SET_COUNT, (id, count) => ({id, count}));

// initialState
const initialState = {
    is_open: false,
    list:[],
};

// reducer
export default handleActions(
    {
        [SET_CART]: (state, action) =>
            produce(state, (draft) => {
                // draft.is_open = action.payload.is_open;
                draft.list = action.payload.cart_list;
            }),
        [SET_COUNT]: (state, action) =>
            produce(state, (draft) => {
                const idx = draft.list.findIndex(v => v.id === action.payload.id);
                console.log(idx, "뜨니?")
                draft.list[idx].quantity = action.payload.count;
                draft.list[idx].sum = draft.list[idx].price * action.payload.count;
            }),
    },
  initialState
);
