import {combineReducers} from "redux";
import {fetchData} from "./opinions";
import {initializeRefs} from "./navigationRefs";
import {signInUpReducers, signInUpButtonReducers} from "./singInUpReducers";
import {fetchPosts, toggleDialog} from "./mainPostsReducers";
import {newsDialogData} from "./newsDialogReducers";
import {loginReducer} from "./loginReducers";
import {mainUser} from "./mainUserReducers";
import {likeReducers} from "./likeReducers";
import {commentReducers} from "./commentReducers";
import {followersAndFolloweReducers} from "./followersAndFolloweeFetchReducers";
import {searchUsersReducers} from "./searchUsersReducers";
import {userPostsReducers} from "./userPostsReducers";
import {followUserReducers} from "./followUserReducers";
import {addPostReducers} from "./addPostReducers";

const reducers = combineReducers({
    fetchData,
    initializeRefs,
    signInUpReducers,
    signInUpButtonReducers,
    fetchPosts,
    toggleDialog,
    newsDialogData,
    loginReducer,
    mainUser,
    likeReducers,
    commentReducers,
    followersAndFolloweReducers,
    searchUsersReducers,
    userPostsReducers,
    followUserReducers,
    addPostReducers,
});

export default reducers;