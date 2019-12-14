import axios from "axios";
import {fetchUserPostsAction} from "./fetchUserPostsAction";

export function fetchCurrentlyLoggedUser() {

    const headers = {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const instance = axios.create({
        baseURL:'http://localhost:3001',
        timeout:3000,
        headers:headers
    });

    return dispatch => {

        dispatch({type:'CURRENTLY_LOGGED_USER_FETCHING', payload:true});

        return instance.get('/api/me')
            .then(response => response.data)
            .then(json => {
                dispatch(fetchUserPostsAction(json._id));
                dispatch({type:'CURRENTLY_LOGGED_USER_FETCHED', payload:json})
            })
            .catch(err => dispatch({type:'CURRENTLY_LOGGED_USER_ERROR',payload:err}))
    }
}