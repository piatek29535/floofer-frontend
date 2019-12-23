import axios from "axios";
import {fetchUserPostsAction} from "./fetchUserPostsAction";

export function fetchUserAction(id) {
    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const instance = axios.create({
        baseURL:process.env.REACT_APP_API_URL,
        timeout:3000,
        headers:headers
    });

    return dispatch => {

        dispatch({type:'USER_FETCHING', payload:true});

        return instance.get(`/api/users/${id}`)
            .then(response => response.data)
            .then(json => {
                dispatch(fetchUserPostsAction(json._id));
                dispatch({type:'USER_SUCCESS', payload:json})
            })
            .catch(err => dispatch({type:'USER_ERROR',payload:err}))
    }
}