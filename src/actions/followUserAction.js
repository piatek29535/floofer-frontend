import axios from "axios";
import {fetchFollowersAndFollowee} from "./followersAndFolloweFetchAction";
import {fetchUserAction} from "./fetchUserAction";
import {searchUsersAction} from "./searchUsersAction";

export function followUserAction(id, from, searchText) {
    return dispatch => {
        dispatch({type:'FOLLOW_USER_SENDING',payload:true});

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.post(`/api/users/${id}/follow`)
            .then(response => {

                switch(from){
                    case "search":
                        dispatch(searchUsersAction(searchText));
                    case "followers":
                        dispatch(fetchFollowersAndFollowee());
                        break;
                    case "profile":
                        dispatch(fetchUserAction(id));
                        break;
                    default:
                        break;
                }

                dispatch({type:'FOLLOW_USER_SUCCESS', payload:response.data})
            })
            .catch(err => dispatch({type:'FOLLOW_USER_ERROR', payload:err}))
    }
}