import {applyMiddleware, createStore} from 'redux';
import {fetchData} from '../reducers/opinions'; // Consider combineReducers in the future in a separate file
import thunk from "redux-thunk";

export const store = createStore(fetchData, applyMiddleware(thunk));