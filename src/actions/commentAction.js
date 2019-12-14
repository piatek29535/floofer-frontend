import axios from "axios";
import {newsDialogPostOpen} from "./newsDialogActions";

export function commentAction(id, comment){

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
        dispatch({type:'COMMENT_SEND',payload:true});

        instance.post(`/api/posts/${id}/comments`,{content:comment})
            .then(response => {
                dispatch(newsDialogPostOpen(id));
                dispatch({type:'COMMENT_SUCCESS', payload:'COMMENT_SUCCESS'})
            }) // i dont know if data need to be send
            .catch(err => dispatch({type:'COMMENT_FAILURE',payload:err}))
    }
}