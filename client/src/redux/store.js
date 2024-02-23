import{createStore, combineReducers, compose, applyMiddleware}from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import adsReducer from './adsRedux';
import { usersReducer } from './usersRedux';

const subreducers={
    ads: adsReducer,
    user: usersReducer
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
