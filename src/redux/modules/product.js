import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

// action
const GET_PRODUCT = "GET_PRODUCT";
const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
const IS_LOADING = "IS_LOADING";

// initialState
const initialState = {
    loading: false,
    search_word: null,
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
const getProduct = createAction(GET_PRODUCT, (page, search_word, product_list) => ({page, search_word, product_list}));
const getOneProduct = createAction(GET_ONE_PRODUCT, (product) => ({product}));
const isLoading = createAction(IS_LOADING, (is_loading) => ({is_loading}));

// middleWares
const getProductApi = (page, search_word) => {
    return async function (dispatch, getState, {history}){
        dispatch(isLoading(true));
        try {
            let product;
            if(!search_word){
                product = await axios.get(`http://54.180.156.74/api/board`,{
                    params: {
                        "searchWord": "프레시지",
                        "page": page,
                    },
                });
                const product_list = product.data.content;
                dispatch(getProduct(page, search_word, product_list));
            }else{
                product = await axios.get("http://54.180.156.74/api/board",{
                    params: {
                        "searchWord": search_word,
                        "page": page,
                    },
                });
                const product_list = product.data.content;
                dispatch(getProduct(page, search_word, product_list));
                history.push('/search');
            };
            // console.log(product.data.content)
            // const a = {...product.data.content[1]}
            // console.log(a)
            // const product_arr = product.data.content;
            // console.log(product_arr)
            // const new_arr = product_arr.map((v => v.price = v.price.toLocaleString('ko-KR')));
            // console.log(new_arr)
        }catch(err){
            console.log("에러발생", err);
            window.alert("해당 상품은 없는 상품입니다.");
        };
    };
};

const getOneProductApi = (id) => {
    return async function (dispatch, getState, {history}){
        try {
            const product = await axios.get(`http://54.180.156.74/api/detail/${id}`);
            const product_list = product.data;
            dispatch(getOneProduct(product_list));
            history.push(`/detail/${id}`)
            window.scrollTo(0, 0);
        } catch(err){
            console.log("에러발생", err);
            window.alert("해당 상품은 없는 상품입니다.");
        };
    };
};

// reducer
export default handleActions(
    {
        [GET_PRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.page = action.payload.page;
                draft.list = action.payload.product_list;
                draft.search_word = action.payload.search_word;
                draft.is_loading = false;
        }),
        [GET_ONE_PRODUCT]: (state, action) =>
            produce(state, (draft) => {
                // draft.page = action.payload.page;
                draft.list = [action.payload.product];
                // draft.search_word = action.payload.search_word;
                // draft.is_loading = false;
        }),
        [IS_LOADING]: (state, action) =>
            produce(state, (draft) => {
                draft.is_loading = action.payload.is_loading;
        }),
    },
    initialState
);

const actionCreators = {
    getProductApi,
    getOneProductApi,
};

export { actionCreators };