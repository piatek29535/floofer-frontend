import {combineReducers} from "redux";
import {fetchData} from "./opinions";
import {initializeRefs} from "./navigationRefs";
import {signInUpReducers, signInUpButtonReducers} from "./singInUpReducers";
import {fetchPosts} from "./mainPostsReducers";

const reducers = combineReducers({
    fetchData,
    initializeRefs,
    signInUpReducers,
    signInUpButtonReducers,
    fetchPosts
});

export default reducers;