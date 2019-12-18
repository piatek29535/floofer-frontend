import axios from "axios";
import {newsDialogPostOpen} from "./newsDialogActions";

export function commentEditAction(commentId, postId, content) {
    return dispatch => {
        dispatch({type:'COMMENT_EDIT_SEND', payload:true})

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.put(`/api/comments/${commentId}`,{content:content})
            .then(response => {
                dispatch(newsDialogPostOpen(postId));
                dispatch({type:'COMMENT_EDIT_SUCCESS', payload:response.data})
            })
            .catch(err => dispatch({type:'COMMENT_EDIT_FAILURE', payload:err}))
    }
}