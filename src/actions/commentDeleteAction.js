import axios from "axios";
import {newsDialogPostOpen} from "./newsDialogActions";

export function commentDeleteAction(commentId, postId) {
    return dispatch => {
        dispatch({type:'COMMENT_DELETE_SEND', payload:true})

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.delete(`/api/comments/${commentId}`)
            .then(response => {
                dispatch(newsDialogPostOpen(postId));
                dispatch({type:'COMMENT_DELETE_SUCCESS', payload:response.data})
            })
            .catch(err => dispatch({type:'COMMENT_DELETE_FAILURE', payload:err}))
    }
}