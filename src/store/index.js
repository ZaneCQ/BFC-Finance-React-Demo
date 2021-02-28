import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const unsubscribe = store.subscribe(() => {
    console.log('subscribe:', store.getState());
});

export default store;