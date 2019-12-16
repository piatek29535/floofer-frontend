import axios from "axios";
import {fetchFollowersAndFollowee} from "./followersAndFolloweFetchAction";

export function followUserAction(id) {
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

        console.log(id)

        instance.post(`/api/users/${id}/follow`)
            .then(response => {
                dispatch(fetchFollowersAndFollowee())
                dispatch({type:'FOLLOW_USER_SUCCESS', payload:response.data})
            })
            .catch(err => dispatch({type:'FOLLOW_USER_ERROR', payload:err}))
    }
}