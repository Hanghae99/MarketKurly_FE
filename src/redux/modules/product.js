import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

// action
const GET_PRODUCT = "GET_PRODUCT";
const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";

// initialState
const initialState = {
    loading: false,
    page: 1,
    list: [
        {
          id: 1,
          brand: 'brand',
          name: 'name',
          imgUrl: '',
          price: 1,
        //   sale_rate: 0, 
        }
    ]
};

// actionCreators
const getProduct = createAction(GET_PRODUCT, (page, product_list) => ({page, product_list}));
const getOneProduct = createAction(GET_ONE_PRODUCT, (product) => ({product}));

// middleWares
const getProductApi = (page, search_word) => {
    return async function (dispatch, getState){
        try {
            let product;
            if(!search_word){
                product = await axios.get(`http://54.180.156.74/api/board`,{
                    params: {
                        "searchWord": "밀키트",
                        "page": page,
                    },
                });
            }else{
                product = await axios.get("http://54.180.156.74/api/board",{
                    params: {
                        "searchWord": search_word,
                        "page": page,
                    },
                });
            };
            const product_list = product.data.content;
            dispatch(getProduct(page, product_list));
        }catch(err){
            console.log("에러발생", err);
            window.alert("제품 조회에 실패했습니다.");
        };
    };
};

const getOneProductApi = (id) => {
    return async function (dispatch, getState, {history}){
        const product = axios.get()
    }
};

// reducer
export default handleActions(
    {
        [GET_PRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.page = action.payload.page;
                draft.list = action.payload.product_list;
        }),
    },
    initialState
);

const actionCreators = {
    getProductApi,
};

export { actionCreators };