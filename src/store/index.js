import { createStore, combineReducers } from 'redux';
import homeData from './home/reducer';
import userData from './userInfo/reducer';
import navigator from './navigator/reducer'

let store = createStore(combineReducers({
    navigator,
    homeData,
    userData,
}))

export default store;