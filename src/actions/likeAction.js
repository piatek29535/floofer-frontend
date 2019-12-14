import {newsDialogPostOpen} from "./newsDialogActions";
import axios from "axios";

export function likeAction(id){
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
        dispatch({type:'LIKE_SEND', payload:true});

        instance.post(`/api/posts/${id}/like`)
            .then(response => response.data)
            .then(json => {
                dispatch(newsDialogPostOpen(id));
                dispatch({type:'LIKE_SUCCESS', payload:json})
            })
            .catch(err => dispatch({type:'LIKE_FAILURE',payload:err}))
    }
}