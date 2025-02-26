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
import {changeProfilePicReducers} from "./changeProfilePicReducers";
import {commentLikeReducers} from "./commentLikeReducers";
import {commentEditReducers} from "./commentEditReducers";
import {commentDeleteReducers} from "./commentDeleteReducers";
import {fetchUserReducers} from "./fetchUserReducers";
import {activateAccountReducers} from "./activateAccountReducers";
import {userFollowersAndFolloweReducers} from "./userFollowersAndFolloweeFetchReducers";
import {createConversationReducers} from "./createConversationReducers";
import {fetchConversationsReducers} from "./fetchConversationsReducers";
import {fetchSingleConversationReducers} from "./fetchSingleConversationReducers";
import {sendMessageReducers} from "./sendMessageReducers";
import {fetchNotificationsReducers} from "./fetchNotificationsReducers";
import {readNotificationReducers} from "./readNotificationReducers";
import {editCurrentlyLoggedUserReducers} from "./editCurrentlyLoggedUserReducers";

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
    changeProfilePicReducers,
    commentLikeReducers,
    commentEditReducers,
    commentDeleteReducers,
    fetchUserReducers,
    activateAccountReducers,
    userFollowersAndFolloweReducers,
    createConversationReducers,
    fetchConversationsReducers,
    fetchSingleConversationReducers,
    sendMessageReducers,
    fetchNotificationsReducers,
    readNotificationReducers,
    editCurrentlyLoggedUserReducers,
});

export default reducers;