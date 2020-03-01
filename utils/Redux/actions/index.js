import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    // GET_SINGLE_ARTICLE,
    // GET_SINGLE_ARTICLE_SUCCESS,
    // GET_SINGLE_ARTICLE_FAILURE
} from '../constants';

// GET_PRODUCTS function will be dispatched within ARTICLEContainer
function getProducts () {
    return {
        type: GET_PRODUCTS
    };
}
/* After fetching form the server this action is intercepted by the reducer and the Products added to the state */
function getProductsSuccess (receiveProducts) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        receiveProducts
    };
}
function getProductsFailure () {
    return {
        type: GET_PRODUCTS_FAILURE
    };
}

//****************************************************************************************************************************************************************//
//send id for get single page
// function fetchProductsAction (id) {
//     return {
//         type: GET_SINGLE_PRODUCTS,
//         id
//     };
// }
// function getProductsSuccessSingle (receiveProductsSingle) {
//     return {
//         type: GET_SINGLE_PRODUCTS_SUCCESS,
//         receiveProductsSingle
//     };
// }
// function getProductsFailureSingle () {
//     return {
//         type: GET_SINGLE_PRODUCTS_FAILURE
//     };
// }

// we export all the function in a single export command
export {
    getProducts,
    getProductsSuccess,
    getProductsFailure,
    // fetchProductsAction,
    // getProductsSuccessSingle,
    // getProductsFailureSingle
};
