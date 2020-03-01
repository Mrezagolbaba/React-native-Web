// Import the watcher we have just created
import {
    watchGetProducts,

} from './HomeSaga';
import {call} from 'redux-saga/effects'

export default function* rootSaga () {
// We start all the sagas in parallel
    yield call(watchGetProducts);
}
