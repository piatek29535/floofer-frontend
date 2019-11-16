import {combineReducers} from "redux";
import {fetchData} from "./opinions";
import {initializeRefs} from "./navigationRefs";
import {signInUpReducers, signInUpButtonReducers} from "./singInUpReducers";
import {fetchPosts, toggleDialog} from "./mainPostsReducers";
import {newsDialogData} from "./newsDialogReducers";
import {loginReducer} from "./loginReducers";

const reducers = combineReducers({
    fetchData,
    initializeRefs,
    signInUpReducers,
    signInUpButtonReducers,
    fetchPosts,
    toggleDialog,
    newsDialogData,
    loginReducer
});

export default reducers;