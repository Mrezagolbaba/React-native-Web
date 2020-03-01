import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
} from '../constants';
const initialState = [];
//reducer for home items
const ProductsReducer = (state = initialState, action={}) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return action.receiveProducts;
        case GET_PRODUCTS_FAILURE :
            return [];
        default:
            return state;

    }
};
export default ProductsReducer
