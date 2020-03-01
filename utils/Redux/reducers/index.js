// We import the combineReducers function
import { combineReducers } from 'redux';
// Import our reducers function from here
import ProductsReducer from './HomeReducer';
// import {SingleProductReducer} from './SingleReducer'



// combineReducers merges them all!
const AllReducer= combineReducers({
    ProductsReducer,
    // SingleProductReducer
});
export default AllReducer
