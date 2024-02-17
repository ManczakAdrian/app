import{createStore, combineReducers, compose, applyMiddleware}from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import adsReducer from './adsRedux';
import { useReducer } from '/usersRedux';

const subreducers={
    ads: adsReducer,
    user: useReducer
};

const reducer= combineReducers(subreducers);
const store = createStore(
    reducer, 
    initialState,
    compose(
        applyMiddleware(thunk),
        window._REDUX_DEVTOOLS_EXTENSION_
        ? window._REDUX_DEVTOOLS_EXTENSION_()
        :(f)=>f 
    )
);

export default store;
