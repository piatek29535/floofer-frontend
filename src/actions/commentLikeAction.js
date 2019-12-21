import axios from "axios";
import {newsDialogPostOpen} from "./newsDialogActions";

export function commentLikeAction(commentId, postId) {
    return dispatch => {
        dispatch({type:'COMMENT_LIKE_SEND', payload:true})

        const headers = {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const instance = axios.create({
            baseURL:process.env.REACT_APP_API_URL,
            timeout:3000,
            headers:headers
        });

        instance.post(`/api/comments/${commentId}/like`)
            .then(response => {
                dispatch(newsDialogPostOpen(postId));
                dispatch({type:'COMMENT_LIKE_SUCCESS', payload:response.data})
            })
            .catch(err => dispatch({type:'COMMENT_LIKE_FAILURE', payload:err}))
    }
}