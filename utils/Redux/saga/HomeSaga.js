
import {takeEvery} from 'redux-saga/effects';
import {put, call,select} from 'redux-saga/effects';
import {GET_PRODUCTS, GET_SINGLE_PRODUCT,} from '../constants';

import {
    getProductsSuccess,
    getProductsFailure,
    // getProductSuccessSingle,
    // getProductFailureSingle
} from '../actions';

//request for list of items
const fetchProducts = () => {
    return fetch('https://api.punkapi.com/v2/beers', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest',
        }
    })
        .then(response => response.json())
};

//request for single items
const fetchProductsSingle = (id) => {

    return fetch('http://localhost:3000/fames/'+id+'?guest=true', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'X-Requested-With':'XMLHttpRequest',
        }
    })
        .then(response => response.json())
};

//function for list request
function* getProducts () {
    try {
        const receiveProducts = yield call(fetchProducts);
        yield put(getProductsSuccess(receiveProducts));
    } catch (err) {
        yield put(getProductsFailure());
    }
}

//function for single request
function* getProductsSingle (action) {
    const id = yield select((state)=>{
        return state.SingleProductReducer.id
    });
    if(id){
        try {
            const receiveProductSingle = yield call(fetchProductSingle,action.id) ;
            yield put(getProductSuccessSingle(receiveProductSingle.data));
        } catch (err) {
            yield put(getProductFailureSingle());
        }
    }

}


//watcher for all of function
function* watchGetProducts () {

    yield takeEvery(GET_PRODUCTS, getProducts);

    // yield takeEvery(GET_SINGLE_PRODUCT, getProductsSingle);

}

export {
    watchGetProducts
};
