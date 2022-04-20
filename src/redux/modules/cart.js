import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action
const SET_CART = "SET_CART";
const UPDATE_CART = "UPDATE_CART";
const DELETE_CART = "DELETE_CART";
const SET_CHECK = "SET_CHECK";
const SET_CHECK_ALL = "SET_CHECK_ALL";

// actionCreator
export const setCart = createAction(SET_CART, (cart_list) => ({cart_list}));
export const updateCart = createAction(UPDATE_CART, (id, price, count) => ({id, price, count}));
export const deleteCart = createAction(DELETE_CART, (id) => ({id}));
export const setCheck = createAction(SET_CHECK, (id) => ({id}));
export const setCheckAll = createAction(SET_CHECK_ALL, (is_check) => ({is_check}));

// initialState
const initialState = {
    is_open: false,
    list:[],
};

// middleWares
export const setCartApi = () => {
    return async function (dispatch, getState, { history }) {
        try {
            // const response = axios.
        }catch(err){
            console.log(err);
            alert("장바구니 목록을 담지 못했습니다.");
        };
    };
};

// reducer
export default handleActions(
    {
        [SET_CART]: (state, action) =>
            produce(state, (draft) => {
                draft.list = action.payload.cart_list;
            }),
        [UPDATE_CART]: (state, action) =>
            produce(state, (draft) => {
                const idx = draft.list.findIndex(v => v.id === action.payload.id);
                
                // localStorage 업데이트
                const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
                if(draft.list[idx].quantity > action.payload.count){
                    baskets[idx].quantity -= 1;
                } else {
                    baskets[idx].quantity += 1;
                }
                baskets[idx].sum = action.payload.price * action.payload.count;
                localStorage.setItem("baskets", JSON.stringify(baskets));
                //

                const new_arr = {
                    ...draft.list[idx], 
                    quantity: action.payload.count,
                    sum: action.payload.price * action.payload.count,
                }
                draft.list[idx] = new_arr;
            }),
        [DELETE_CART]: (state, action) =>
            produce(state, (draft) => {
                const idx = draft.list.findIndex(v => v.id === action.payload.id);
                draft.list.splice(idx, 1);
                
                // localStorage 삭제
                const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
                baskets.splice(idx, 1);
                localStorage.setItem("baskets", JSON.stringify(baskets));
                //
            }),
        [SET_CHECK]: (state, action) =>
            produce(state, (draft) => {
                const idx = draft.list.findIndex(v => v.id === action.payload.id);
                draft.list[idx].checked = draft.list[idx].checked ? false : true;

                // localStorage 업데이트
                const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
                baskets[idx].checked = draft.list[idx].checked
                localStorage.setItem("baskets", JSON.stringify(baskets));
                //
            }),
        [SET_CHECK_ALL]: (state, action) =>
            produce(state, (draft) => {
                console.log(state)
                const new_arr = draft.list.map((v,i) => 
                    v.checked === action.payload.is_check
                        ? v
                        : {...v, checked: action.payload.is_check}   
                );
                draft.list = new_arr;
                
                // localStorage 업데이트
                const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
                const new_baskets = baskets.map(v =>
                    v.checked === action.payload.is_check
                        ? v
                        : {...v, checked: action.payload.is_check}   
                );    
                localStorage.setItem("baskets", JSON.stringify(new_baskets));
                //

            }),
    },
    initialState
);

const actionCreators = {
    setCart,
    updateCart,
    deleteCart,
    setCheck,
    setCheckAll,
};

export { actionCreators };