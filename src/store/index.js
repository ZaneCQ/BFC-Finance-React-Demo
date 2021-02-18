import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeData from './home/reducer';
import userInfo from './userInfo/reducer';
import navigator from './navigator/reducer'

let store = createStore(combineReducers({
    navigator,
    homeData,
    userInfo,
}), applyMiddleware(thunk))

export default store;