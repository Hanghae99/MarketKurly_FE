import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// action
const SET_CART = "SET_CART";
const UPDATE_CART = "UPDATE_CART";
const DELETE_CART = "DELETE_CART";
const CHOICE_DELETE_CART ="CHOICE_DELETE_CART";
const SET_CHECK = "SET_CHECK";
const SET_CHECK_ALL = "SET_CHECK_ALL";

// actionCreator
export const setCart = createAction(SET_CART, (cart_list) => ({cart_list}));
export const updateCart = createAction(UPDATE_CART, (id, price, count) => ({id, price, count}));
export const deleteCart = createAction(DELETE_CART, (id) => ({id}));
export const choiceDeleteCart = createAction(CHOICE_DELETE_CART, () => ({}));
export const setCheck = createAction(SET_CHECK, (id) => ({id}));
export const setCheckAll = createAction(SET_CHECK_ALL, (is_check) => ({is_check}));

// initialState
const initialState = {
    is_open: false,
    list:[],
};

// middleWares
export const loginCartPushApi = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets"));
    const new_baskets = baskets.map(v => {
        return {id:v.id, quantity:v.quantity, sum:v.sum};
    });
    const token = localStorage.getItem("token");
    return async function (dispatch, getState, {history}){
        try {
            await axios.post("http://54.180.156.74/api/mybucket/logincart",new_baskets,{
                headers: {
                    Authorization: `${token}`,
                },
            });
            dispatch(getCartApi());
            console.log("실행")
        }catch(err){
            console.log(err);
            alert("장바구니 목록을 담지 못했습니다.");
        };
    };

};

export const setCartApi = (id, product_info) => {
    const token = localStorage.getItem("token");
    return async function (dispatch, getState, {history}){
        try {
            await axios.post(`http://54.180.156.74/api/mybucket/${id}`,product_info,{
                headers: {
                    Authorization: `${token}`,
                },
            });
        }catch(err){
            console.log(err);
            alert("장바구니에 상품을 추가하지 못했습니다.");
        };
    };
};

export const getCartApi = () => {
    const token = localStorage.getItem("token");
    return async function (dispatch, getState, {history}){
        try {
            const response = await axios.get('http://54.180.156.74/api/mybucket',{
                headers: {
                    Authorization: `${token}`,
                },
            });
            console.log("최신화 :", response.data)
            // 제거하고
            localStorage.removeItem('buckets');
            // 다시 넣어주고
            localStorage.setItem("baskets", JSON.stringify(response.data));
            // 그걸 리덕스에 저장
            dispatch(setCart(response.data));
        }catch(err){
            console.log(err);
            alert("장바구니를 불러오지 못했습니다.");
        };
    };
};

export const deleteCartApi = (id) => {
    const token = localStorage.getItem("token");
    return async function (dispatch, getState, {history}){
        try {
            await axios.delete(`http://54.180.156.74/api/mybucket/${id}`,{
                headers: {
                    Authorization: `${token}`,
                },
            });
        }catch(err){
            console.log(err);
            alert("장바구니 상품을 삭제 못했습니다.");
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
        [CHOICE_DELETE_CART]: (state, action) =>
            produce(state, (draft) => {
                const new_arr = draft.list.filter(v => v.checked !== true);
                draft.list = new_arr;

                // localStorage 업데이트
                const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
                const new_baskets = baskets.filter(v => v.checked !== true);  
                localStorage.setItem("baskets", JSON.stringify(new_baskets));
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
    choiceDeleteCart,
    setCartApi,
    getCartApi,
    deleteCartApi,
};

export { actionCreators };